import copy from "@/content/client-copy.json";

interface FaqItem {
    question: string;
    answer: string;
}

export default function ServicesFaq({ content }: { content: Record<string, unknown> }) {
    const items = (Array.isArray(content.faqItems) ? content.faqItems : copy.pages.sluzby.content.faqItems)
        .filter((item): item is FaqItem => Boolean(item) && typeof item.question === "string" && typeof item.answer === "string" && Boolean(item.question.trim()) && Boolean(item.answer.trim()));
    if (items.length === 0) return null;

    const title = typeof content.faqTitle === "string" && content.faqTitle.trim()
        ? content.faqTitle : copy.pages.sluzby.content.faqTitle;
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://www.spektrumpocitov.sk/sluzby/#faq",
        mainEntity: items.map(item => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
    };

    return (
        <section id="faq" className="faq-section" aria-labelledby="faq-title">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
            <div className="faq-wrap">
                <p className="faq-eyebrow">Pred prvým stretnutím</p>
                <h2 id="faq-title">{title}</h2>
                <div className="faq-list">
                    {items.map((item, index) => (
                        <details className="faq-item" key={`${index}-${item.question}`}>
                            <summary>
                                <span>{item.question}</span>
                                <span className="faq-indicator" aria-hidden="true" />
                            </summary>
                            <p>{item.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
