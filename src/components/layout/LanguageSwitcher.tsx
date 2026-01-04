"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
    const pathname = usePathname()
    const router = useRouter()

    const currentLang = pathname.split("/")[1] as "en" | "id" | "cn" || "en"

    const handleLanguageChange = (lang: string) => {
        // Basic replacement logic for static export structure
        const segments = pathname.split("/")
        // If first segment is a lang, replace it. If not, prepend it (but we assume [lang] structure)
        if (["en", "id", "cn"].includes(segments[1])) {
            segments[1] = lang
        } else {
            segments.splice(1, 0, lang)
        }
        router.push(segments.join("/"))
    }

    // Map for display names
    const labels = {
        en: "English",
        id: "Bahasa",
        cn: "中文",
    }

    return (
        <div className="flex items-center gap-2">
            <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLanguageChange("en")}
                className={currentLang === "en" ? "bg-muted font-bold" : ""}
            >
                EN
            </Button>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLanguageChange("id")}
                className={currentLang === "id" ? "bg-muted font-bold" : ""}
            >
                ID
            </Button>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLanguageChange("cn")}
                className={currentLang === "cn" ? "bg-muted font-bold" : ""}
            >
                CN
            </Button>
        </div>
    )
}
