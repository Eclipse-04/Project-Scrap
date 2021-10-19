const multiLib = require("multi-lib");
//you can use GenericSmelter instead GenericCrafter
//also GenericSmelter.SmelterBuild instead GenericCrafter.GenericCrafterBuild
//                                                                           ▼this has to be same with .json file name
//
const multi=multiLib.MultiCrafter(GenericCrafter,GenericCrafter.GenericCrafterBuild,"thicc-forge",[
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
            items:["graphite/2","industrial-iron/5"],
            liquids:["water/6"],
            power: 5.5
        },
        output:{
            items:["industrial-steel/5"],
        },
        craftTime: 180
    },
    {//2
        input:{
            items:["lead/5","industrial-copper/6","industrial-iron/5","silicon/4"],
            power: 4.7
        },
        output:{
            items:["surge-alloy/4"],
            liquids:["industrial-watse-metal/3"],
        },
        craftTime: 130
    },
    {//3
        input:{
            items:["silicon/2","sand/6","industrial-quartz/3"],
            liquids:["water/3"],
            power: 2.7
        },
        output:{
            items:["industrial-silic-glass/8"],
            liquids:["industrial-dirty-water/4"],
        },
        craftTime: 100
    },
    {//4
        input: {
            items:["coal/23"],
            power: 7.5
        },
        output:{
            items:["graphite/20"]
        },
        craftTime: 420
    }
],{
    /*you can customize block here. ex) load()*/
},
/*this is Object constructor. This way is much better than literal way{a:123}
you can replace this with {} if you don't want to modify entity*/
function Extra(){});
