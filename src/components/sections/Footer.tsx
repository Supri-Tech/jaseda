import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Dictionary } from "@/dictionaries/types"

interface FooterProps {
    dict: Dictionary["footer"]
}

export function Footer({ dict }: FooterProps) {
    return (
        <footer className="w-full border-t bg-background">
            <div className="container mx-auto flex flex-col gap-8 py-12 md:py-16">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="text-xl font-bold tracking-tighter">
                            Jaseda
                        </Link>
                        <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                            {dict.tagline}
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold">{dict.services.title}</h4>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">{dict.services.items.web}</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">{dict.services.items.mobile}</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">{dict.services.items.integration}</Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold">{dict.company.title}</h4>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">{dict.company.items.about}</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">{dict.company.items.careers}</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">{dict.company.items.contact}</Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold">{dict.connect.title}</h4>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">LinkedIn</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Instagram</Link>
                    </div>
                </div>

                <Separator />

                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Jaseda. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
