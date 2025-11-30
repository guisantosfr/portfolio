import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.MAIL_USER,
            subject: `Mensagem recebida pelo portfólio`,
            html: `
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${message}</p>
            `,
        });

        return new Response(JSON.stringify({ ok: true }), { status: 200 });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Erro ao enviar email" }), { status: 500 });
    }
}
