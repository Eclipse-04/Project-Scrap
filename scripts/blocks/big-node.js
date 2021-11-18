const bigCoil = extend(PowerNode, "magnetic-coil", {
    load() {
        this.topRegion = Core.atlas.find(this.name + "-top");
        this.rotatorRegion = Core.atlas.find(this.name + "-rotator");
    },
    icons(){
        return [
            this.region, this.rotatorRegion, this.topRegion
        ];
    }
});
bigCoil.buildType = () => extend(PowerNode.PowerNodeBuild, bigCoil, {
    draw() {
        Draw.rect(bigCoil.region, this.x, this.y);
        Draw.rect(bigCoil.rotatorRegion, this.x, this,y, Time.time * 2);
        Draw.rect(bigCoil.topRegion, this.x, this.y);
    }
});