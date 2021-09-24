const thiccPhase = extend(GenericCrafter, "phase-constructor", {
	load(){
		this.super$load();
		this.region = Core.atlas.find("industrial-phase-constructor");
		this.top = Core.atlas.find("industrial-phase-constructor-top");
		this.bar = Core.atlas.find("industrial-phase-constructor-bar");
		this.point = Core.atlas.find("industrial-phase-constructor-point");
		this.phase = Core.atlas.find("industrial-phase-constructor-phase");
	}
});
thiccPhase.buildType = () => extend(GenericCrafter.GenericCrafterBuild, thiccPhase, {
	draw(tile){
		Draw.rect(thiccPhase.region, this.x, this.y, 0);
		Draw.alpha(this.totalProgress)
		Draw.rect(thiccPhase.phase, this.x, this.y, 0)
		Draw.alpha(1)
        	Draw.rect(thiccPhase.bar, this.x + Angles.trnsx(this.totalProgress * 360, 3.375), this.y, 0);
        	Draw.rect(thiccPhase.point, this.x + Angles.trnsx(this.totalProgress * 360, 3.375), this.y + Angles.trnsy(this.totalProgress * 720, 2.75), 0);
        	Draw.rect(thiccPhase.top, this.x, this.y, 0)	
	}
});
