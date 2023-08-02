import { translate } from "./lang.ts";
import { verify_identifier, verify_set } from "./lib.ts";
import { ArchExJson, ArchExMapColor, TypedBlockSet, ArchExWoodType, ArchExStoneType } from "./types.ts";

export const templates = {
    stone: {
        block_types: [...ArchExStoneType, "facade"],
        recipe: "stonecutting"
    },
    wood: {
        block_types: [...ArchExWoodType, "facade"],
        recipe: "sawing"
    },
    // // This is currently broken :p
    // metal: {
    //     block_types: [...ArchExMetalType, "facade"],
    //     recipe: "crafting"
    // }
} as { readonly [K in string]?: TypedBlockSet }

export function create_from_template(template_name: string, base_block = "block_name_goes_here", map_color: ArchExMapColor = "wood"): ArchExJson|string {
    const template = templates[template_name]
    if (!template) return translate("error.template.notfound")

    if (!verify_identifier(base_block)) return translate("error.verify", translate("verify.identifier"))

    if (!verify_set(ArchExMapColor, map_color)) return translate("error.verify", translate("verify.mapcolor"))

    return {
        base_block,
        map_color,
        recipes: template.recipe,
        types_to_generate: [...template.block_types]
    }
}
