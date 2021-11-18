const bigCoil = extend(PowerNode, "magnetic-coil", {});
bigCoil.buildType = () => extend(PowerNode.PowerNodeBuild, bigCoil, {
    draw() {
        Draw.rect(
            "industrial-magnetic-coil", this.x, this.y
        );
        Draw.rect(
            "industrial-magnetic-coil-rotator", this.x, this,y, Time.time * 2
        );
        Draw.rect(
            "industrial-magnetic-coil-top", this.x, this.y
        );
    }
});