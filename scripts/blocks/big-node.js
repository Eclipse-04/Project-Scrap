const bigCoil = extend(PowerNode, "magnetic-coil", {
    load() {
        this.top = Core.atlas.find(this.name + "-top");
        this.rotator = Core.atlas.find(this.name + "-rotator");
    },
    icons(){
        return [
            this.region, this.rotator, this.top
        ];
    }
});
bigCoil.buildType = () => extend(PowerNode.PowerNodeBuild, bigCoil, {
    draw() {
        Draw.rect(bigCoil.region, this.x, this.y);
        Draw.rect(bigCoil.rotator, this.x, this,y, Time.time * 2);
        Draw.rect(bigCoil.top, this.x, this.y);
    }
});