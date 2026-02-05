import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const recipientEmail = Deno.env.get("CONTACT_EMAIL") || "hello@littleumbrella.ca";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactRequest = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields:", { name: !!name, email: !!email, message: !!message });
      throw new Error("Missing required fields: name, email, and message are required");
    }

    // Validate field lengths
    if (name.length > 100) {
      throw new Error("Name must be less than 100 characters");
    }
    if (email.length > 255) {
      throw new Error("Email must be less than 255 characters");
    }
    if (message.length > 1000) {
      throw new Error("Message must be less than 1000 characters");
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }

    console.log("Sending contact email from:", email, "to:", recipientEmail);

    const emailResponse = await resend.emails.send({
      from: "Little Umbrella Website <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #c4745a 0%, #d4894d 100%); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">☂️ New Message from Little Umbrella</h1>
          </div>
          
          <div style="background: #faf7f2; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e8e0d4; border-top: none;">
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 5px 0; font-weight: 600; color: #666;">From:</p>
              <p style="margin: 0; font-size: 16px;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 5px 0; font-weight: 600; color: #666;">Email:</p>
              <p style="margin: 0; font-size: 16px;"><a href="mailto:${email}" style="color: #c4745a;">${email}</a></p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 5px 0; font-weight: 600; color: #666;">Message:</p>
              <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e8e0d4;">
                <p style="margin: 0; white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
              </div>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e8e0d4; margin: 25px 0;">
            
            <p style="margin: 0; font-size: 12px; color: #888;">
              This message was sent from the Little Umbrella website contact form.
              <br>Reply directly to this email to respond to ${name}.
            </p>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Contact email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
