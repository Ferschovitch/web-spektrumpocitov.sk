import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontakt – Rezervujte si konzultáciu | Spektrum Pocitov",
    description:
        "Kontaktujte Mgr. Lindu Stanislavovú – psychologičku a terapeutku. Napíšte alebo zavolajte a dohodneme si konzultáciu v Bratislave.",
    alternates: {
        canonical: "https://www.spektrumpocitov.sk/kontakt",
    },
    openGraph: {
        title: "Kontakt – Rezervujte si konzultáciu | Spektrum Pocitov",
        description:
            "Kontaktujte Mgr. Lindu Stanislavovú. Napíšte alebo zavolajte a dohodneme si konzultáciu v Bratislave.",
        url: "https://www.spektrumpocitov.sk/kontakt",
        siteName: "Spektrum Pocitov",
        locale: "sk_SK",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Kontakt | Spektrum Pocitov",
        description:
            "Napíšte alebo zavolajte a dohodneme si konzultáciu v Bratislave.",
    },
};

export default function KontaktLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
