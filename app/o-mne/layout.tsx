import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "O nás – Mgr. Linda Stanislavová | Spektrum Pocitov",
    description:
        "Spoznajte Mgr. Lindu Stanislavovú – psychologičku a lektorku rozvoja mysle. Pracujem s deťmi, jednotlivcami, pármi aj rodinami v Bratislave.",
    alternates: {
        canonical: "https://www.spektrumpocitov.sk/o-mne",
    },
    openGraph: {
        title: "O nás – Mgr. Linda Stanislavová | Spektrum Pocitov",
        description:
            "Spoznajte Mgr. Lindu Stanislavovú – psychologičku a lektorku rozvoja mysle. Pracujem s deťmi, jednotlivcami, pármi aj rodinami v Bratislave.",
        url: "https://www.spektrumpocitov.sk/o-mne",
        siteName: "Spektrum Pocitov",
        locale: "sk_SK",
        type: "profile",
    },
    twitter: {
        card: "summary_large_image",
        title: "O nás – Mgr. Linda Stanislavová | Spektrum Pocitov",
        description:
            "Spoznajte Mgr. Lindu Stanislavovú – psychologičku a lektorku rozvoja mysle.",
    },
};

export default function OilNasLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
