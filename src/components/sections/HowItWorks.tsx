import { Badge } from "@/components/ui/badge"
import { Dictionary } from "@/dictionaries/types"

interface HowItWorksProps {
    dict: Dictionary["howItWorks"]
}

export function HowItWorks({ dict }: HowItWorksProps) {
    const steps = [
        { number: "01", ...dict.steps.discovery },
        { number: "02", ...dict.steps.design },
        { number: "03", ...dict.steps.dev },
        { number: "04", ...dict.steps.deploy },
    ]

    return (
        <section className="container mx-auto py-16 md:py-32 px-4">
            <div className="flex flex-col items-center gap-4 text-center mb-16">
                <Badge variant="outline" className="px-3 py-1">{dict.badge}</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {dict.title}
                </h2>
                <p className="max-w-[700px] text-lg text-muted-foreground">
                    {dict.description}
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center gap-4 p-6 relative">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary mb-4">
                            {step.number}
                        </div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
