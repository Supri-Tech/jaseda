import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BarChart3, Shield, Zap, RefreshCw, Layout, Smartphone } from "lucide-react"

const features = [
    {
        title: "Real-time Analytics",
        description:
            "Gain insights immediately with our powerful analytics dashboard that updates in real-time.",
        icon: BarChart3,
    },
    {
        title: "Seamless Integration",
        description:
            "Connect with your favorite tools effortlessly. We support over 100+ third-party integrations.",
        icon: RefreshCw,
    },
    {
        title: "Advanced Security",
        description:
            "Your data is protected with enterprise-grade encryption and compliance standards.",
        icon: Shield,
    },
    {
        title: "Lightning Fast",
        description:
            "Optimized for speed, ensuring your workflow remains uninterrupted and efficient.",
        icon: Zap,
    },
    {
        title: "Intuitive Interface",
        description:
            "A clean, distraction-free interface designed to help you focus on what matters most.",
        icon: Layout,
    },
    {
        title: "Mobile First",
        description:
            "Manage your operations on the go with our fully responsive mobile application.",
        icon: Smartphone,
    },
]

export function Features() {
    return (
        <section className="container mx-auto flex flex-col gap-10 py-24 md:py-32">
            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Everything you need to scale
                </h2>
                <p className="max-w-[700px] text-lg text-muted-foreground">
                    Our platform provides a comprehensive suite of tools designed to help you build, manage, and grow your business.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <Card key={index} className="border-border/50 bg-background/50 transition-colors hover:border-primary/20 hover:bg-muted/50">
                        <CardHeader>
                            <feature.icon className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-base">
                                {feature.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
