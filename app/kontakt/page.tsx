import { prisma } from "@/lib/db";
import ClientPage from "./ClientPage";

export default async function ContactPageWrapper() {
    const pageDb = await prisma.pageContent.findUnique({ where: { slug: 'kontakt' } });
    const content = pageDb?.content || {};

    return <ClientPage content={content} />;
}
