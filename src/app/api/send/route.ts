import { EmailTemplate } from "@/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log(data);

    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["peralva.developer@gmail.com"],
      subject: data.subject,
      react: EmailTemplate({
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    });
    return NextResponse.json({
      message: "Sua solicitação de contato foi enviada com sucesso.",
    });
  } catch (er) {
    return NextResponse.json({ er });
  }
}
