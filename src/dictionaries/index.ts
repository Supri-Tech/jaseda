import { en } from "./en"
import { id } from "./id"
import { cn } from "./cn"
import { Dictionary } from "./types"

export type Locale = "en" | "id" | "cn"

const dictionaries: Record<Locale, Dictionary> = {
    en,
    id,
    cn,
}

export const getDictionary = (locale: Locale) => dictionaries[locale] ?? dictionaries.en
