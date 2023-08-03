import en_us from "../lang/en_us.json" assert { type: "json" }

export type LangKey = keyof typeof en_us

const lang = {
    en_us
}

const SupportedLang: SupportedLang[] = Object.keys(lang) as SupportedLang[]

type SupportedLang = keyof typeof lang

let current_lang_id: SupportedLang = "en_us"

/**
 * Sets the language to a given code.
 */
export function set_language(lang: SupportedLang) {
    current_lang_id = lang
}

/**
 * Gets a list of the supported languages.
 */
export function list_supported_languages(): readonly SupportedLang[] {
    return SupportedLang
}

/**
 * Used to translate a key.
 * 
 * Will default to en_us if not exists.
 */
export function translate(key: LangKey, ...parameters: string[]): string {
    // These guard clauses should never fail if using typescript, but it's good to have *just in case*
    const lang_set = lang[current_lang_id] ?? lang["en_us"]
    if (!lang_set) return ""
    let translation = lang_set[key] ?? lang["en_us"][key]
    if (!translation) return ""

    for (let i = 0; i < parameters.length; i++) {
        const parameter = parameters[i]
        translation = translation.replace("%s", parameter).replaceAll(`%${i}$s`, parameter)
    }

    return translation
}
