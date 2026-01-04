import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Dictionary } from "@/dictionaries/types"

interface HeroProps {
    dict: Dictionary["hero"]
}

export function Hero({ dict }: HeroProps) {
    return (
        <section className="container mx-auto flex flex-col items-center justify-center gap-6 py-24 text-center md:py-32 lg:py-48">
            <div className="flex max-w-[980px] flex-col gap-4">
                <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    {dict.title} <span className="text-primary">{dict.titleAccent}</span>.
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl">
                    {dict.description}
                </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row mt-6">
                <Button size="lg" className="gap-2">
                    {dict.primaryCta} <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="ghost">
                    {dict.secondaryCta}
                </Button>
            </div>
        </section>
    )
}
