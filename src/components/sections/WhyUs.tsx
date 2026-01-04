import { Users, MessagesSquare, CheckCircle2, Wrench } from "lucide-react"
import { Dictionary } from "@/dictionaries/types"

interface WhyUsProps {
    dict: Dictionary["whyUs"]
}

export function WhyUs({ dict }: WhyUsProps) {
    const icons = {
        team: Users,
        comm: MessagesSquare,
        delivery: CheckCircle2,
        maint: Wrench,
    }

    const reasons = [
        { ...dict.items.team, icon: icons.team },
        { ...dict.items.comm, icon: icons.comm },
        { ...dict.items.delivery, icon: icons.delivery },
        { ...dict.items.maint, icon: icons.maint },
    ]

    return (
        <section className="bg-muted/30 py-24 md:py-32">
            <div className="container mx-auto flex flex-col gap-16">
                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        {dict.title}
                    </h2>
                    <p className="max-w-[700px] text-lg text-muted-foreground">
                        {dict.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-4">
                                <reason.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">{reason.title}</h3>
                            <p className="text-muted-foreground">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
