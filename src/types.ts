export const ArchExStoneType = [
    "arch",
    "octagonal_column",
    "round_arch",
    "roof",
    "wall_column",
    "wall_post"
] as const
export type ArchExStoneType = (typeof ArchExStoneType)[number]

export const ArchExWoodType = [
    "beam",
    "crown_molding",
    "fence_post",
    "joist",
    "lattice",
    "round_fence_post",
    "transom",
    "post_cap",
    "post_lantern"
] as const
export type ArchExWoodType = (typeof ArchExWoodType)[number]

export const ArchExMetalType = [
    "h_beam",
    "i_beam",
    "tube_metal"
] as const
export type ArchExMetalType = (typeof ArchExMetalType)[number]

export const ArchExCommonType = [
    "facade"
] as const
export type ArchExCommonType = (typeof ArchExCommonType)[number]

export const ArchExBlockType = [
    ...ArchExStoneType,
    ...ArchExWoodType,
    ...ArchExMetalType,
    ...ArchExCommonType,
    "rod"
] as const
export type ArchExBlockType = (typeof ArchExBlockType)[number]

export const ArchExRecipe = [
    "stonecutting",
    "sawing",
    "fence_to_post",
    "post_to_fence",
    "wall_to_post",
    "post_to_wall",
    "crafting"
] as const

export type ArchExRecipe = (typeof ArchExRecipe)[number]

export const ArchExMapColor = [
    "grass",
    "sand",
    "wool",
    "fire",
    "ice",
    "metal",
    "plant",
    "snow",
    "clay",
    "dirt",
    "stone",
    "water",
    "wood",
    "quartz",
    "orange",
    "magenta",
    "light_blue",
    "yellow",
    "lime",
    "pink",
    "gray",
    "light_gray",
    "cyan",
    "purple",
    "blue",
    "brown",
    "green",
    "red",
    "black",
    "gold",
    "diamond",
    "lapis",
    "emerald",
    "podzol",
    "nether",
    "white_terracotta",
    "orange_terracotta",
    "magenta_terracotta",
    "light_blue_terracotta",
    "yellow_terracotta",
    "lime_terracotta",
    "pink_terracotta",
    "gray_terracotta",
    "light_gray_terracotta",
    "cyan_terracotta",
    "purple_terracotta",
    "blue_terracotta",
    "brown_terracotta",
    "green_terracotta",
    "red_terracotta",
    "black_terracotta",
    "crimson_nylium",
    "crimson_stem",
    "crimson_hyphae",
    "warped_nylium",
    "warped_stem",
    "warped_hyphae",
    "warped_wart_block",
    "deepslate",
    "raw_iron",
    "glow_lichen"
] as const

export type TypedBlockSet = {
    readonly block_types: ArchExBlockType[],
    readonly recipe: ArchExRecipe
}

export type ArchExMapColor = (typeof ArchExMapColor)[number]

export type ArchExJson = {
    only_if_present?: string
    name?: string
    base_block: string
    recipes: ArchExRecipe
    map_color: ArchExMapColor
    types_to_generate: ArchExBlockType[]
}
