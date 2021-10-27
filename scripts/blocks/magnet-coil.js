const magnetCoil = extend(PowerNode, "magnetic-coil", {
    load(){
        this.super$load();
        this.region = Core.atlas.find("industrial-magnetic-coil")
        this.rotator1 = Core.atlas.find("industrial-magnetic-coil-rotator1")
        this.rotator2 = Core.atlas.find("industrial-magnetic-coil-rotator2")
        this.top1 = Core.atlas.find("industrial-magnetic-coil-top1")
        this.top2 = Core.atlas.find("industrial-magnetic-coil-top2")
    }
});
magnetCoil.buildType = () => extend(GenericCrafter.GenericCrafterBuild, magnetCoil, {