import { Dictionary } from "@/dictionaries/types"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

interface GallerySectionProps {
    dict: Dictionary["gallery"]
    lang: string
}

const projects = [
    {
        id: 1,
        image: "/gallery-1.png",
        name: "Healthcare Analytics Dashboard",
        description: "A comprehensive real-time dashboard for hospital management, featuring patient admission trends, records management, and operational KPIs.",
        tags: ["Next.js", "TypeScript", "PostgreSQL"],
        type: "Web App",
    },
    {
        id: 2,
        image: "/gallery-2.png",
        name: "Smart Patient Management App",
        description: "A cross-platform mobile application that enables clinics to manage appointments, patient records, and doctor scheduling on the go.",
        tags: ["React Native", "Node.js", "MySQL"],
        type: "Mobile App",
    },
    {
        id: 3,
        image: "/gallery-3.png",
        name: "Hospital ERP & Inventory System",
        description: "A full-featured internal ERP system covering inventory management, role-based access control, and revenue analytics for a regional hospital.",
        tags: ["Laravel", "Vue.js", "MariaDB"],
        type: "Internal Tool",
    },
]

const typeColors: Record<string, string> = {
    "Web App": "bg-teal-500/15 text-teal-400 border border-teal-500/30",
    "Mobile App": "bg-purple-500/15 text-purple-400 border border-purple-500/30",
    "Internal Tool": "bg-amber-500/15 text-amber-400 border border-amber-500/30",
}

export function GallerySection({ dict, lang }: GallerySectionProps) {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
                <div className="container mx-auto flex items-center justify-between px-4 py-4">
                    <Link
                        href={`/${lang}`}
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {dict.backToHome}
                    </Link>
                    <span className="text-lg font-bold tracking-tight">
                        Jaseda<span className="text-primary">.</span>
                    </span>
                </div>
            </header>

            {/* Hero Banner */}
            <section className="container mx-auto px-4 py-20 text-center">
                <div className="mx-auto max-w-2xl">
                    <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                        Portfolio
                    </span>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        {dict.title}
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        {dict.subtitle}
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="container mx-auto px-4 pb-24">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
                        >
                            {/* Image */}
                            <div className="relative h-52 w-full overflow-hidden bg-muted">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <ExternalLink className="h-8 w-8 text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col gap-3 p-6">
                                {/* Type badge */}
                                <span
                                    className={`self-start rounded-full px-3 py-0.5 text-xs font-semibold ${typeColors[project.type]}`}
                                >
                                    {project.type}
                                </span>

                                <h2 className="text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                                    {project.name}
                                </h2>

                                <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA Footer Strip */}
            <section className="border-t border-border/50 bg-secondary/50">
                <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-16 text-center">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                        Want to build something like this?
                    </h2>
                    <p className="max-w-md text-muted-foreground">
                        Reach out and let&apos;s talk about your project.
                    </p>
                    <a
                        href="https://wa.me/62895710568000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 hover:shadow-lg"
                    >
                        Chat on WhatsApp
                    </a>
                </div>
            </section>
        </div>
    )
}
