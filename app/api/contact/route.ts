import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, message } = body;

        // Validate required fields
        if (!name || typeof name !== "string" || name.trim().length < 2) {
            return NextResponse.json({ error: "Meno je povinné (min. 2 znaky)." }, { status: 400 });
        }
        if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ error: "Zadajte platný e-mail." }, { status: 400 });
        }
        if (!message || typeof message !== "string" || message.trim().length < 10) {
            return NextResponse.json({ error: "Správa je povinná (min. 10 znakov)." }, { status: 400 });
        }

        // Log the submission (in production, replace with Resend/SendGrid/email service)
        console.log("📬 New contact form submission:", {
            name: name.trim(),
            email: email.trim(),
            phone: phone?.trim() || "—",
            message: message.trim(),
            timestamp: new Date().toISOString(),
        });

        // If you have a RESEND_API_KEY env variable, you can send an email:
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: "Spektrum Pocitov <noreply@spektrumpocitov.sk>",
        //   to: ["info@spektrumpocitov.sk"],
        //   subject: `Nová správa od ${name}`,
        //   html: `<p><b>Meno:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Tel:</b> ${phone || "—"}</p><p><b>Správa:</b></p><p>${message}</p>`,
        // });

        return NextResponse.json({ success: true, message: "Správa bola úspešne odoslaná." });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json({ error: "Nastala chyba, skúste znova." }, { status: 500 });
    }
}
