import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { Dictionary } from "@/dictionaries/types"

interface TestimonialsProps {
    dict: Dictionary["testimonials"]
}

export function Testimonials({ dict }: TestimonialsProps) {
    return (
        <section className="container mx-auto py-16 md:py-32 px-4">
            <div className="flex flex-col items-center gap-4 text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    {dict.title}
                </h2>
            </div>

            <div className="mx-auto max-w-4xl">
                <Card className="bg-primary/5 border-none shadow-none">
                    <CardContent className="flex flex-col items-center gap-6 p-6 text-center md:p-12">
                        <Quote className="h-10 w-10 text-primary/40" />
                        <p className="text-xl font-medium leading-relaxed md:text-2xl">
                            "{dict.quote}"
                        </p>
                        <div className="flex flex-col items-center gap-1">
                            <span className="font-bold">{dict.role}</span>
                            <span className="text-muted-foreground">{dict.hospital}</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
