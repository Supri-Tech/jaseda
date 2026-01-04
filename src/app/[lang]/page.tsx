import { LandingPage } from "@/components/LandingPage";
import { getDictionary, Locale } from "@/dictionaries";

export async function generateStaticParams() {
    return [{ lang: "en" }, { lang: "id" }, { lang: "cn" }];
}

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params
    const dict = getDictionary(lang);
    return <LandingPage dict={dict} />;
}
