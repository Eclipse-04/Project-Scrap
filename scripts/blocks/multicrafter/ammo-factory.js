const multiLib=require("multi-lib/library");
//you can use GenericSmelter instead GenericCrafter
//also GenericSmelter.SmelterBuild instead GenericCrafter.GenericCrafterBuild
//                                                                           ▼this has to be same with .json file name
//
const multi=multiLib.MultiCrafter(GenericCrafter,GenericCrafter.GenericCrafterBuild,"multi",[
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
    {//1  you can skip recipe properties
        output:{
            power:5.25
        },
        craftTime:12
    },
    {//2
        input:{
            items:["coal/1","sand/1"],
            liquids:["water/5"],
            power:1
        },
        output:{
            items:["thorium/1","surge-alloy/2"],
            liquids:["slag/5"],
        },
        craftTime:60
    },
    {//3
        input:{
            items:["pyratite/1","blast-compound/1"],
            liquids:["water/5"],
            power:1
        },
        output:{
            items:["scrap/1","plastanium/2","spore-pod/2"],
            liquids:["oil/5"],
        },
        craftTime:72
    },
    {//4
        input:{
            items:["sand/1"],
        },
        output:{
            items:["silicon/1"],
        },
        craftTime:30
    },
],{
    /*you can customize block here. ex) load()*/
},
/*this is Object constructor. This way is much better than literal way{a:123}
you can replace this with {} if you don't want to modify entity*/
function Extra(){
    /*you can use customUpdate=function(){}. this function excuted before update()
    also this.draw=function(){}
    you can customize entity here.
    ex)
    this._myProp=0;
    this.getMyProp=function(){
        return this._myProp;
    };
    this.setMyProp=function(a){
        this._myProp=a;
    };*/
});
