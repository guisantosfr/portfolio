'use client';

import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (loading) return; // impede duplo clique (extra safety)
        setLoading(true);

        const form = e.currentTarget;
        const fd = new FormData(form);

        const data = Object.fromEntries(fd.entries());

        const res = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            alert("Mensagem enviada com sucesso!");
            form.reset();
        } else {
            alert("Erro ao enviar mensagem.");
        }

        setLoading(false);
    };

    return (
        <section id="contact" className="max-w-2xl mx-auto p-5">
            <h2 className="text-2xl sm:text-4xl text-center">Contato</h2>
            <h3 className="text-center my-4">Entre em contato comigo preenchendo o formulário abaixo.</h3>

            <form className="flex flex-col gap-4 my-5" onSubmit={sendEmail}>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Nome</label>
                    <input className="w-full border border-gray-300 p-2 rounded" type="text" id="name" name="name" required />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                    <input className="w-full border border-gray-300 p-2 rounded" type="email" id="email" name="email" required />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="message">Mensagem</label>
                    <textarea className="w-full border border-gray-300 p-2 rounded" id="message" name="message" rows={10} required></textarea>
                </div>

                <button
                    className="btn w-50 mx-auto px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? (
                        <span className="flex items-center gap-2">
                            <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
                            Enviando...
                        </span>
                    ) : (
                        "Enviar"
                    )}
                </button>
            </form>
        </section>
    )
}