const thiccPhase = extend(GenericCrafter, "phase-constructor", {
	load(){
		this.super$load();
		this.region = Core.atlas.find("industrial-phase-constructor");
		this.top = Core.atlas.find("industrial-phase-constructor-top");
		this.bar = Core.atlas.find("industrial-phase-constructor-bar");
		this.point = Core.atlas.find("industrial-phase-constructor-point");
	}
});
thiccPhase.buildType = () => extend(GenericCrafter.GenericCrafterBuild, thiccPhase, {
	draw(tile){
		Draw.rect(thiccPhase.region, this.x, this.y, 0);
        	Draw.rect(thiccPhase.bar, this.x + Angles.trnsx(this.totalProgress * 360, 1.6875), this.y, 0);
        	Draw.rect(thiccPhase.point, this.x + Angles.trnsx(this.totalProgress * 360, 1.6875), this.y + Angles.trnsy(this.totalProgress * 720, 1.375), 0);
        	Draw.rect(thiccPhase.top, this.x, this.y, 0)
	}
});
