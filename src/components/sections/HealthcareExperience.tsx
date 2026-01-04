import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Database, Building2 } from "lucide-react"
import { Dictionary } from "@/dictionaries/types"

interface HealthcareExperienceProps {
    dict: Dictionary["healthcare"]
}

export function HealthcareExperience({ dict }: HealthcareExperienceProps) {
    return (
        <section className="bg-primary/5 py-24 md:py-32">
            <div className="container mx-auto flex flex-col gap-10">
                <div className="flex flex-col items-center gap-4 text-center">
                    <Badge variant="outline" className="border-primary text-primary px-4 py-1">
                        {dict.badge}
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        {dict.title}
                    </h2>
                    <p className="max-w-[700px] text-lg text-muted-foreground">
                        {dict.description}
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col gap-4 rounded-xl border bg-background p-6 shadow-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                            <Building2 className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">{dict.items.hospital.title}</h3>
                        <p className="text-muted-foreground">
                            {dict.items.hospital.description}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 rounded-xl border bg-background p-6 shadow-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                            <Database className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">{dict.items.rme.title}</h3>
                        <p className="text-muted-foreground">
                            {dict.items.rme.description}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 rounded-xl border bg-background p-6 shadow-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">{dict.items.security.title}</h3>
                        <p className="text-muted-foreground">
                            {dict.items.security.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
