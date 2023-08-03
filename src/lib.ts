export * from "./lang.ts"
export * from "./template.ts"
export * from "./types.ts"

/**
 * Used to verify against a set.
 * @returns false when failed 
 */
export function verify_set(input: readonly string[], value: string): boolean {
    return input.indexOf(value) != -1
}

const id_regex = /^([a-z0-9\-_.]+:)?[a-z0-9\-_.\/]+$/i
/**
 * Used to verify an identifier.
 * @returns false when failed 
 */
export function verify_identifier(id: string): boolean {
    return id_regex.test(id)
}
