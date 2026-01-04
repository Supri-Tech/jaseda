import { Header } from "@/components/layout/Header";

export async function generateStaticParams() {
    return [{ lang: "en" }, { lang: "id" }, { lang: "cn" }];
}

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
