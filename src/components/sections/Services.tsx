import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Globe, Smartphone, Settings, BarChart3 } from "lucide-react"
import { Dictionary } from "@/dictionaries/types"

interface ServicesProps {
    dict: Dictionary["services"]
}

export function Services({ dict }: ServicesProps) {
    const icons = {
        web: Globe,
        mobile: Smartphone,
        integration: Settings,
        tools: BarChart3,
    }

    const items = [
        { ...dict.items.web, icon: icons.web },
        { ...dict.items.mobile, icon: icons.mobile },
        { ...dict.items.integration, icon: icons.integration },
        { ...dict.items.tools, icon: icons.tools },
    ]

    return (
        <section className="container mx-auto flex flex-col gap-10 py-16 md:py-32 px-4">
            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {dict.title}
                </h2>
                <p className="max-w-[700px] text-lg text-muted-foreground">
                    {dict.description}
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {items.map((item, index) => (
                    <Card key={index} className="border-border/50 bg-background/50 transition-colors hover:border-primary/20 hover:bg-muted/50">
                        <CardHeader>
                            <item.icon className="h-10 w-10 text-primary mb-2" />
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-base text-muted-foreground">
                                {item.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
