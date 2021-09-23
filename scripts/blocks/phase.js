const thiccPhase = extend(GenericCrafter, "phase-constructor", {
	load(){
		this.super$load();
		this.region = Core.atlas.find("industrial-phase-constructor");
		this.point = Core.atlas.find("industrial-phase-constructor-bar");
		this.bar = Core.atlas.find("industrial-phase-constructor-point");
	}
});
thiccPhase.buildType = () => extend(GenericCrafter.GenericCrafterBuild, thiccPhase, {
	draw(tile){
		Draw.rect(thiccPhase.region, this.x, this.y, 0);
        	Draw.rect(thiccPhase.bar, this.x + Math.sin(this.totalProgress * 360))
	}
});
