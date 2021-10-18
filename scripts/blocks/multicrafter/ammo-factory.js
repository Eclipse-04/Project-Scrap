const multiLib = require("multi-lib");
//you can use GenericSmelter instead GenericCrafter
//also GenericSmelter.SmelterBuild instead GenericCrafter.GenericCrafterBuild
//                                                                           ▼this has to be same with .json file name
//
const multi=multiLib.MultiCrafter(GenericCrafter,GenericCrafter.GenericCrafterBuild,"ammo-factory",[
    /*default form for each recipes. You can change values.
    {
        input:{
            items:[],     Modded Item:  "mod-name-item-name/amount", Vanilla Item: "item-name/amount"
            liquids:[],   Modded Liquid:  "mod-name-liquid-name/amount",  Vanilla liquid: "liquid-name/amount"
            power:0,
        },
        output:{
            items:[],
            liquids:[],
            power:0,
        },
        craftTime:80,
    },*/
    {//1
        input:{
            items:["coal/3","industrial-iron/2"],
            liquids:["water/2"],
            power: 2.5
        },
        output:{
            items:["industrial-standard-ammo/2"],
            liquids:["industrial-dirty-water/1"],
        },
        craftTime: 90
    },
    {//1
        input:{
            items:["coal/3","industrial-iron/2"],
            liquids:["water/2"],
            power: 2.5
        },
        output:{
            items:["industrial-standard-ammo/2"],
            liquids:["industrial-dirty-water/1"],
        },
        craftTime: 90
    },
    {//2
        input:{
            items:["coal/4","industrial-steel/2"],
            liquids:["water/4"],
            power: 3.7
        },
        output:{
            items:["industrial-steel-ammo/2"],
            liquids:["industrial-dirty-water/3"],
        },
        craftTime: 160
    },
    {//3
        input:{
            items:["pyratite/2","lead/4"],
            liquids:["water/3"],
            power: 2.7
        },
        output:{
            items:["industrial-pyra-ammo/4"],
            liquids:["industrial-dirty-water/1.5"],
        },
        craftTime: 100
    },
],{
    /*you can customize block here. ex) load()*/
},
/*this is Object constructor. This way is much better than literal way{a:123}
you can replace this with {} if you don't want to modify entity*/
function Extra(){});
