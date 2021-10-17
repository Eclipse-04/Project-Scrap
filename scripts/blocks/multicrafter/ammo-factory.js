const multiLib = require("multi-lib/library");
const multi = multiLib.MultiCrafter(GenericCrafter,GenericCrafter.GenericCrafterBuild,"ammo-fac",[
    {
        input: {
            items: ["coal/2, iron/3"],
            liquids: ["water/2"],
            power: 3.5
        },
        output: {
            items: ["standard-ammo/3"]
        },
        craftTime: 120
    },
    {
        input: {
            items: ["coal/3, steel/2"],
            liquids: ["water/4"],
            power: 3.5
        },
        output: {
            items: ["steel-ammo/2"]
        },
        craftTime: 180
    }
])