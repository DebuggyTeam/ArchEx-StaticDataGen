import * as React from "https://oliver-makes-code.github.io/ts-cli/fakeReact.tsx"
import { getString } from "https://oliver-makes-code.github.io/ts-cli/fakeReact.tsx"
import * as ArchEx from "../src/lib.ts"
import { CLI, literal, Builtin, named, optional } from "https://oliver-makes-code.github.io/ts-cli/mod.tsx"

const cli = new CLI("archex")

cli.register({
    args: [literal("template"), named(Builtin.STRING, "template_name"), named(optional(Builtin.STRING), "id"), named(optional(Builtin.STRING), "map_color")],
    description: "Generates a staticdata file from a given template.",
    call(template_name: string, block_id: string|null, map_color: ArchEx.ArchExMapColor|null) {
        while (!block_id || !ArchEx.verify_identifier(block_id)) {
            block_id = prompt(getString(<blue>Block ID:</blue>))
            if (block_id && !ArchEx.verify_identifier(block_id)) {
                block_id = null
                const translate = ArchEx.translate("error.verify", ArchEx.translate("verify.identifier"))
                console.error(getString(<red>{translate}</red>))
            }
        }

        while (!map_color || !ArchEx.verify_set(ArchEx.ArchExMapColor, map_color)) {
            map_color = prompt(getString(<blue>Map Color:</blue>)) as ArchEx.ArchExMapColor
            if (map_color && !ArchEx.verify_set(ArchEx.ArchExMapColor, map_color)) {
                map_color = null
                const translate = ArchEx.translate("error.verify", ArchEx.translate("verify.mapcolor"))
                console.error(getString(<red>{translate}</red>))
            }
        }

        const template = ArchEx.create_from_template(template_name, block_id ?? undefined, map_color ?? undefined) as ArchEx.ArchExJson
        console.log(template)
    }
})

export default cli
