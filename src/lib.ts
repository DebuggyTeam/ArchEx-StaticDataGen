export * from "./lang.ts"
export * from "./template.ts"
export * from "./types.ts"

export function verify_set(input: readonly string[], value: string): boolean {
    return input.indexOf(value) != -1
}

const id_regex = /^([a-z0-9\-_.]+:)?[a-z0-9\-_.\/]+$/i
export function verify_identifier(id: string): boolean {
    return id_regex.test(id)
}
