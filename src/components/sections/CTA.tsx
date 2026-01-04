import { Button } from "@/components/ui/button"
import { Dictionary } from "@/dictionaries/types"

interface CTAProps {
    dict: Dictionary["cta"]
}

export function CTA({ dict }: CTAProps) {
    return (
        <section className="container mx-auto py-16 md:py-32 px-4">
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-secondary px-6 py-12 text-center md:px-12 md:py-24">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {dict.title}
                </h2>
                <p className="max-w-[600px] text-lg text-muted-foreground">
                    {dict.description}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row mt-4">
                    <Button size="lg" className="w-full sm:w-auto">
                        {dict.button}
                    </Button>
                </div>
            </div>
        </section>
    )
}
