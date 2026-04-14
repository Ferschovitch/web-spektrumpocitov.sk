import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Služby – Psychologická podpora | Spektrum Pocitov",
    description:
        "Ponuka služieb Spektrum Pocitov: terapeutická podpora pre deti, rodiny a jednotlivcov, Theta Healing, Etikoterapia, Vision Extra Ocular, mentálna aritmetika a krízová intervencia v Bratislave.",
    alternates: {
        canonical: "https://www.spektrumpocitov.sk/sluzby",
    },
    openGraph: {
        title: "Služby – Psychologická podpora | Spektrum Pocitov",
        description:
            "Ponuka služieb Spektrum Pocitov: terapeutická podpora pre deti, rodiny a jednotlivcov, Theta Healing, Etikoterapia, Vision Extra Ocular a ďalšie.",
        url: "https://www.spektrumpocitov.sk/sluzby",
        siteName: "Spektrum Pocitov",
        locale: "sk_SK",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Služby – Psychologická podpora | Spektrum Pocitov",
        description:
            "Terapeutická podpora pre deti, rodiny a jednotlivcov. Theta Healing, Etikoterapia, Vision Extra Ocular a viac.",
    },
};

export default function SluzbyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
