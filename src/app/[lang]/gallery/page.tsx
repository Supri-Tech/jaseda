import { GallerySection } from "@/components/sections/GallerySection";
import { getDictionary, Locale } from "@/dictionaries";

export async function generateStaticParams() {
    return [{ lang: "en" }, { lang: "id" }, { lang: "cn" }];
}

export default async function GalleryPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = getDictionary(lang);
    return <GallerySection dict={dict.gallery} lang={lang} />;
}
