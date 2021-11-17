const bigCoil = extend(PowerNode, "magnetic-coil", {
    draw(tile) {
        this.super$draw(tile);
        Draw.rect(
            "industrial-magnetic-coil", tile.x, tile.y
        );
        Draw.rect(
            "industrial-magnetic-coil-rotator", tile.x, tile,y, Time.time * 2
        );
        Draw.rect(
            "industrial-magnetic-coil-top", tile.x, tile.y
        );
    }
});