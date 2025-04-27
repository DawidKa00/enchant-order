var data = {
    enchants: {
        protection: {
            levelMax: "4",
            weight: "1",
            incompatible: ["blast_protection", "fire_protection", "projectile_protection", "venom_protection"],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"]
        },
        aqua_affinity: {
            levelMax: "1",
            weight: "2",
            incompatible: [],
            items: ["helmet", "turtle_shell"]
        },
        bane_of_arthropods: {
            levelMax: "5",
            weight: "1",
            incompatible: ["smite", "sharpness", "density", "breach"],
            items: ["sword", "axe", "mace"]
        },
        blast_protection: {
            levelMax: "4",
            weight: "2",
            incompatible: ["fire_protection", "protection", "projectile_protection", "venom_protection"],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"]
        },
        channeling: {
            levelMax: "1",
            weight: "4",
            incompatible: ["riptide"],
            items: ["trident"]
        },
        depth_strider: {
            levelMax: "3",
            weight: "2",
            incompatible: ["frost_walker"],
            items: ["boots"]
        },
        efficiency: {
            levelMax: "5",
            weight: "1",
            incompatible: [],
            items: ["pickaxe", "shovel", "axe", "hoe", "shears"]
        },
        feather_falling: {
            levelMax: "4",
            weight: "1",
            incompatible: [],
            items: ["boots"]
        },
        fire_aspect: {
            levelMax: "2",
            weight: "2",
            incompatible: [],
            items: ["sword", "mace"]
        },
        fire_protection: {
            levelMax: "4",
            weight: "1",
            incompatible: ["blast_protection", "protection", "projectile_protection", "venom_protection"],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"]
        },
        flame: {
            levelMax: "1",
            weight: "2",
            incompatible: [],
            items: ["bow"]
        },
        fortune: {
            levelMax: "3",
            weight: "2",
            incompatible: ["silk_touch"],
            items: ["pickaxe", "shovel", "axe", "hoe"]
        },
        frost_walker: {
            levelMax: "2",
            weight: "2",
            incompatible: ["depth_strider"],
            items: ["boots"]
        },
        impaling: {
            levelMax: "5",
            weight: "2",
            incompatible: [],
            items: ["trident"]
        },
        infinity: {
            levelMax: "1",
            weight: "4",
            incompatible: ["mending"],
            items: ["bow"]
        },
        knockback: {
            levelMax: "2",
            weight: "1",
            incompatible: [],
            items: ["sword"]
        },
        looting: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["sword"]
        },
        loyalty: {
            levelMax: "3",
            weight: "1",
            incompatible: ["riptide"],
            items: ["trident"]
        },
        luck_of_the_sea: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["fishing_rod"]
        },
        lure: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["fishing_rod"]
        },
        mending: {
            levelMax: "1",
            weight: "2",
            incompatible: ["infinity"],
            items: ["helmet", "chestplate", "leggings", "boots", "pickaxe", "shovel", "axe", "sword", "hoe", "brush", "fishing_rod",
                "bow", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick", "shield", "elytra", "trident",
                "turtle_shell", "crossbow", "mace"
            ]
        },
        multishot: {
            levelMax: "1",
            weight: "2",
            incompatible: ["piercing"],
            items: ["crossbow"]
        },
        piercing: {
            levelMax: "4",
            weight: "1",
            incompatible: ["multishot"],
            items: ["crossbow"]
        },
        power: {
            levelMax: "5",
            weight: "1",
            incompatible: [],
            items: ["bow"]
        },
        projectile_protection: {
            levelMax: "4",
            weight: "1",
            incompatible: ["protection", "blast_protection", "fire_protection", "venom_protection"],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"]
        },
        punch: {
            levelMax: "2",
            weight: "2",
            incompatible: [],
            items: ["bow"]
        },
        quick_charge: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["crossbow"]
        },
        respiration: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["helmet", "turtle_shell"]
        },
        riptide: {
            levelMax: "3",
            weight: "2",
            incompatible: ["channeling", "loyalty"],
            items: ["trident"]
        },
        sharpness: {
            levelMax: "5",
            weight: "1",
            incompatible: ["bane_of_arthropods", "smite"],
            items: ["sword", "axe"]
        },
        silk_touch: {
            levelMax: "1",
            weight: "4",
            incompatible: ["fortune"],
            items: ["pickaxe", "shovel", "axe", "hoe"]
        },
        smite: {
            levelMax: "5",
            weight: "1",
            incompatible: ["bane_of_arthropods", "sharpness", "density", "breach"],
            items: ["sword", "axe", "mace"]
        },
        soul_speed: {
            levelMax: "3",
            weight: "4",
            incompatible: [],
            items: ["boots"]
        },
        sweeping: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["sword"]
        },
        swift_sneak: {
            levelMax: "3",
            weight: "4",
            incompatible: [],
            items: ["leggings"]
        },
        thorns: {
            levelMax: "3",
            weight: "4",
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"]
        },
        unbreaking: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "pickaxe", "shovel", "axe", "sword", "hoe", "brush", "fishing_rod",
                "bow", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick", "shield", "elytra", "trident",
                "turtle_shell", "crossbow", "mace"
            ]
        },
        binding_curse: {
            levelMax: "1",
            weight: "4",
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "elytra", "pumpkin", "turtle_shell"]
        },
        vanishing_curse: {
            levelMax: "1",
            weight: "4",
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "pickaxe", "shovel", "axe", "sword", "hoe", "brush", "fishing_rod",
                "bow", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick", "shield", "elytra", "pumpkin",
                "helmet", "trident", "turtle_shell", "crossbow", "mace"
            ]
        },
        density: {
            levelMax: "5",
            weight: "1",
            incompatible: ["breach", "smite", "bane_of_arthropods"],
            items: ["mace"]
        },
        breach: {
            levelMax: "4",
            weight: "2",
            incompatible: ["density", "smite", "bane_of_arthropods"],
            items: ["mace"]
        },
        wind_burst: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["mace"]
        },
        fury: {
            levelMax: "5",
            weight: "2",
            incompatible: ["lifeplus", "venom_protection"],
            items: ["helmet", "chestplate", "leggings", "boots"]
        },
        venom_protection: {
            levelMax: "1",
            weight: "6",
            incompatible: ["protection", "fire_protection", "projectile_protection", "blast_protection", "fury"],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell", "elytra"]
        },
        lifeplus: {
            levelMax: "5",
            weight: "8",
            incompatible: ["venom_protection", "fury"],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell", "elytra"]
        },
        voidless: {
            levelMax: "1",
            weight: "8",
            incompatible: [],
            items: ["helmet", "turtle_shell"]
        },
        auto_feed: {
            levelMax: "1",
            weight: "8",
            incompatible: [],
            items: ["helmet", "turtle_shell"]
        },
        bright_vision: {
            levelMax: "1",
            weight: "2",
            incompatible: [],
            items: ["helmet", "turtle_shell"]
        },
        magnet: {
            levelMax: "1",
            weight: "2",
            incompatible: [],
            items: ["chestplate"]
        },
        builder_arm: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["chestplate"]
        },
        leaping: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["leggings"]
        },
        dwarfed: {
            levelMax: "5",
            weight: "5",
            incompatible: ["oversize"],
            items: ["leggings"]
        },
        fast_swim: {
            levelMax: "5",
            weight: "8",
            incompatible: [],
            items: ["leggings"]
        },
        oversize: {
            levelMax: "4",
            weight: "8",
            incompatible: ["dwarfed"],
            items: ["leggings"]
        },
        step_assist: {
            levelMax: "3",
            weight: "1",
            incompatible: ["frost_walker", "lava_walker"],
            items: ["boots"]
        },
        agility: {
            levelMax: "5",
            weight: "8",
            incompatible: [],
            items: ["boots"]
        },
        lava_walker: {
            levelMax: "3",
            weight: "1",
            incompatible: ["frost_walker", "step_assist"],
            items: ["boots"]
        },
        miningplus: {
            levelMax: "1",
            weight: "2",
            incompatible: ["vein_miner", "spawner_touch", "bedrock_breaker"],
            items: ["axe", "shovel", "hoe", "pickaxe"]
        },
        auto_smelt: {
            levelMax: "1",
            weight: "2",
            incompatible: ["silk_touch"],
            items: ["axe", "shovel", "hoe", "pickaxe"]
        },
        timber: {
            levelMax: "1",
            weight: "2",
            incompatible: [],
            items: ["axe"]
        },
        vein_miner: {
            levelMax: "1",
            weight: "2",
            incompatible: ["miningplus", "spawner_touch", "bedrock_breaker"],
            items: ["pickaxe"]
        },
        bedrock_breaker: {
            levelMax: "1",
            weight: "2",
            incompatible: ["miningplus", "spawner_touch", "vein_miner"],
            items: ["pickaxe"]
        },
        spawner_touch: {
            levelMax: "1",
            weight: "2",
            incompatible: ["miningplus", "bedrock_breaker", "vein_miner"],
            items: ["pickaxe"]
        },
        harvest: {
            levelMax: "3",
            weight: "7",
            incompatible: [],
            items: ["hoe"]
        },
        scyther: {
            levelMax: "3",
            weight: "6",
            incompatible: [],
            items: ["hoe"]
        },
        breezing_arrow: {
            levelMax: "2",
            weight: "2",
            incompatible: ["quick_charge", "explosive_arrow", "storm_arrow", "eternal_frost", "echo_frost"],
            items: ["bow", "crossbow"]
        },
        storm_arrow: {
            levelMax: "1",
            weight: "2",
            incompatible: ["quick_charge", "explosive_arrow", "breezing_arrow", "eternal_frost", "echo_frost"],
            items: ["bow", "crossbow"]
        },
        rebound: {
            levelMax: "3",
            weight: "5",
            incompatible: ["quick_charge", "multishot", "piercing"],
            items: ["bow", "crossbow"]
        },
        eternal_frost: {
            levelMax: "5",
            weight: "8",
            incompatible: ["quick_charge", "breezing_arrow", "explosive_arrow", "storm_arrow", "echo_frost"],
            items: ["bow", "crossbow"]
        },
        accuracy_shot: {
            levelMax: "1",
            weight: "2",
            incompatible: [],
            items: ["bow", "crossbow"]
        },
        echo_shot: {
            levelMax: "2",
            weight: "2",
            incompatible: ["quick_charge", "breezing_arrow", "explosive_arrow", "storm_arrow", "eternal_frost"],
            items: ["bow", "crossbow"]
        },
        explosive_arrow: {
            levelMax: "4",
            weight: "2",
            incompatible: ["quick_charge", "breezing_arrow", "storm_arrow", "echo_shot", "eternal_frost"],
            items: ["bow", "crossbow"]
        },
        teluric_wave: {
            levelMax: "1",
            weight: "2",
            incompatible: ["wind_burst"],
            items: ["mace"]
        },
        wind_propulsion: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["mace"]
        },
        striker: {
            levelMax: "2",
            weight: "1",
            incompatible: [],
            items: ["mace"]
        },
        fear: {
            levelMax: "1",
            weight: "2",
            incompatible: ["pull", "life_steal", "tears_of_asflors", "last_hope", "critical", "death_touch"],
            items: ["sword"]
        },
        critical: {
            levelMax: "4",
            weight: "4",
            incompatible: ["pull", "life_steal", "fear", "tears_of_asflors", "last_hope", "death_touch"],
            items: ["sword"]
        },
        dimensionnal_hit: {
            levelMax: "5",
            weight: "4",
            incompatible: ["runic_despair", "reach", "attack_speed"],
            items: ["sword"]
        },
        life_steal: {
            levelMax: "3",
            weight: "4",
            incompatible: ["pull", "fear", "tears_of_asflors", "last_hope", "critical", "death_touch"],
            items: ["sword"]
        },
        last_hope: {
            levelMax: "1",
            weight: "4",
            incompatible: ["pull", "life_steal", "fear", "tears_of_asflors", "critical", "death_touch"],
            items: ["sword"]
        },
        tears_of_asflors: {
            levelMax: "3",
            weight: "4",
            incompatible: ["pull", "life_steal", "fear", "last_hope", "critical", "death_touch"],
            items: ["sword"]
        },
        attack_speed: {
            levelMax: "2",
            weight: "4",
            incompatible: ["runic_despair", "reach", "dimensionnal_hit"],
            items: ["sword"]
        },
        poison_aspect: {
            levelMax: "3",
            weight: "3",
            incompatible: ["fire_aspect"],
            items: ["sword"]
        },
        pull: {
            levelMax: "1",
            weight: "1",
            incompatible: ["life_steal", "fear", "tears_of_asflors", "last_hope", "critical", "death_touch"],
            items: ["sword"]
        },
        death_touch: {
            levelMax: "1",
            weight: "1",
            incompatible: ["pull", "life_steal", "fear", "tears_of_asflors", "last_hope", "critical"],
            items: ["sword"]
        },
        runic_despair: {
            levelMax: "5",
            weight: "4",
            incompatible: ["reach", "attack_speed", "dimensionnal_hit"],
            items: ["sword"]
        },
        reach: {
            levelMax: "3",
            weight: "2",
            incompatible: ["runic_despair", "attack_speed", "dimensionnal_hit"],
            items: ["sword"]
        },
        gungnir_breath: {
            levelMax: "3",
            weight: "2",
            incompatible: ["channeling"],
            items: ["trident"]
        },
        cavalier_egis: {
            levelMax: "5",
            weight: "4",
            incompatible: [],
            items: ["wolf_armor", "horse_armor"]
        },
        steel_fangs: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["wolf_armor"]
        },
        velocity: {
            levelMax: "4",
            weight: "5",
            incompatible: [],
            items: ["wolf_armor", "horse_armor"]
        },
        ethereal_leap: {
            levelMax: "7",
            weight: "2",
            incompatible: [],
            items: ["wolf_armor", "horse_armor"]
        },
        curse_of_enchant: {
            levelMax: "1",
            weight: "4",
            incompatible: [],
            items: [
              "helmet", "chestplate", "leggings", "boots", "turtle_shell", "elytra",
              "sword", "axe", "mace", "trident", "pickaxe", "shovel", "hoe", "bow", "shield", "crossbow", "brush",
              "fishing_rod", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick",
              "pumpkin", "book", "wolf_armor", "horse_armor"
            ]
        },
        curse_of_breaking: {
            levelMax: "5",
            weight: "3",
            incompatible: [],
            items: [
              "helmet", "chestplate", "leggings", "boots", "turtle_shell", "elytra",
              "sword", "axe", "mace", "trident", "pickaxe", "shovel", "hoe", "bow", "shield", "crossbow", "brush",
              "fishing_rod", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick",
              "pumpkin", "book", "wolf_armor", "horse_armor"
            ]
        },
        kinectic_protection: {
            levelMax: "5",
            weight: "1",
            incompatible: [],
            items: ["elytra"]
        },
        armored: {
            levelMax: "4",
            weight: "1",
            incompatible: [],
            items: ["elytra"]
        },
        xp_boost: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["shovel", "axe", "hoe", "pickaxe", "sword", "flint_and_steel", "mace", "trident", "shears", "brush", "bow", "crossbow"]
        }

    },
    items: [
        'helmet',
        'chestplate',
        'leggings',
        'boots',
        'turtle_shell',
        'elytra',

        'sword',
        'axe',
        'mace',
        'trident',
        'pickaxe',
        'shovel',
        'hoe',
        'bow',
        'shield',
        'crossbow',
        'brush',

        'fishing_rod',
        'shears',
        'flint_and_steel',
        'carrot_on_a_stick',
        'warped_fungus_on_a_stick',
        'pumpkin',
        'book',
        'wolf_armor',
        'horse_armor'
    ]
};
