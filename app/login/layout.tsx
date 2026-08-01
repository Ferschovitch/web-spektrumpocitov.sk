import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Prihlásenie (CMS)",
    robots: {
        index: false,
        follow: false,
    },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
