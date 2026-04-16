import { prisma } from "@/lib/db";
import ClientPage from "./ClientPage";

export default async function SluzbyPageWrapper() {
    const pageDb = await prisma.pageContent.findUnique({ where: { slug: 'sluzby' } });
    const content = pageDb?.content || {};

    return <ClientPage content={content} />;
}
