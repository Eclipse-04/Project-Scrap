const multiLib = require("multi-lib");
const multi = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "bullet-fac", [
    {
        input: {
            items: ["copper/5", "coal/3", "industrial-iron/4"],
            power: 2.5
        },
        output: {
            items: ["industrial-standard-ammo/4"],
        },
        craftTime: 240
    },
    {
        input: {
            items: ["industrial-steel/7", "coal/3", "industrial-sulfur/4"],
            power: 4
        },
        output: {
            items: ["industrial-steel-ammo/5"]
        },
        craftTime: 360,
    },
], {
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
/*
YOU MUST NOT MODIFY VALUE OF THESE
configurable
outputsPower
hasItems
hasLiquids
hasPower
*/
//using example without .json file. I don't recommand this way because you can't use mod item as requirements.