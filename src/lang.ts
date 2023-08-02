import en_us from "../lang/en_us.json" assert { type: "json" }

export type LangKey = keyof typeof en_us

const lang = {
    en_us
}

const SupportedLang: SupportedLang[] = Object.keys(lang) as SupportedLang[]

type SupportedLang = keyof typeof lang

let current_lang_id: SupportedLang = "en_us"

export function set_language(lang: SupportedLang) {
    current_lang_id = lang
}

export function list_supported_languages(): readonly SupportedLang[] {
    return SupportedLang
}

export function translate(key: LangKey, ...parameters: string[]): string {
    const lang_set = lang[current_lang_id]
    if (!lang_set) return ""
    let translation = lang_set[key]
    if (!translation) return ""

    for (let i = 0; i < parameters.length; i++) {
        const parameter = parameters[i]
        translation = translation.replace("%s", parameter).replaceAll(`%${i}$s`, parameter)
    }

    return translation
}
