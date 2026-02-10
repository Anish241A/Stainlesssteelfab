import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const payload: LeadPayload = await req.json();

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing Supabase credentials");
    }

    const leadData = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      service: payload.service,
      message: payload.message,
      status: "new",
    };

    const insertResponse = await fetch(`${supabaseUrl}/rest/v1/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${supabaseKey}`,
        apikey: supabaseKey,
      },
      body: JSON.stringify(leadData),
    });

    if (!insertResponse.ok) {
      const error = await insertResponse.text();
      console.error("Failed to insert lead:", error);
      throw new Error(`Database insert failed: ${error}`);
    }

    const notificationEmail = Deno.env.get("BUSINESS_EMAIL") || "info@ssfabrication.in";

    const emailBody = `
New Lead Submission

Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone}
Service: ${payload.service}
Message: ${payload.message}

Reply to: ${payload.email}
Phone to call: ${payload.phone}

---
Stainless Steel Fabrication
Lead Management System
    `;

    const web3formsAccessKey = Deno.env.get("WEB3FORMS_ACCESS_KEY");
    if (!web3formsAccessKey) {
      console.warn("Web3Forms access key not configured, skipping email notification");
    } else {
      try {
        const emailResponse = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: web3formsAccessKey,
            name: payload.name,
            email: payload.email,
            phone: payload.phone,
            service: payload.service,
            message: payload.message,
          }),
        });

        if (emailResponse.ok) {
          console.log("Email sent successfully to:", notificationEmail);
        } else {
          console.warn("Web3Forms email send failed:", await emailResponse.text());
        }
      } catch (emailError) {
        console.error("Error sending email via Web3Forms:", emailError);
      }
    }

    console.log("Lead saved successfully:", payload.name);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Lead received successfully",
        leadId: payload.email,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing lead:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
