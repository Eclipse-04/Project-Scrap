const SulfurExtractor = extend(GenericCrafter, "sulfur-extractor", {
	load(){
		this.super$load();
		this.region = Core.atlas.find("industrial-sulfur-extractor");
		this.liquidRegion = Core.atlas.find("industrial-sulfur-extractor-liquid");
		this.BottomRegion = Core.atlas.find("industrial-sulfur-extractor-bottom");
		this.GlassRegion = Core.atlas.find("industrial-sulfur-extractor-top");
	}
});
refiner.buildType = () => extend(GenericCrafter.GenericCrafterBuild, refiner, {
	draw(tile){
		let inputLiquid = SulfurExtractor.consumes.get(ConsumeType.liquid).liquid;

		Draw.rect(SulfurExtractor.BottomRegion, this.x, this.y, 0);

		Draw.color(Liquids.oil.color);
		Draw.alpha(this.liquids.get(inputLiquid) / refiner.liquidCapacity);
		Draw.rect(SulfurExtractor.liquidRegion, this.x, this.y);

		Draw.alpha(1);
		Draw.color();
		Draw.rect(SulfurExtractor.GlassRegion, this.x, this.y, 0);
	}
});

const AcidMixer = extend(GenericCrafter, "acid-sulfuric-mixer", {
	load(){
		this.super$load();
		this.region = Core.atlas.find("industrial-acid-sulfuric-extractor");
		this.liquidRegion = Core.atlas.find("industrial-acid-sulfuric-extractor-liquid");
		this.BottomRegion = Core.atlas.find("industrial-acid-sulfuric-extractor-bottom");
		this.GlassRegion = Core.atlas.find("industrial-acid-sulfuric-extractor-top");
	}
});
refiner.buildType = () => extend(GenericCrafter.GenericCrafterBuild, refiner, {
	draw(tile){
		let inputLiquid = AcidMixer.consumes.get(ConsumeType.liquid).liquid;

		Draw.rect(AcidMixer.BottomRegion, this.x, this.y, 0);

		Draw.color(Liquids.oil.color);
		Draw.alpha(this.liquids.get(inputLiquid) / refiner.liquidCapacity);
		Draw.rect(AcidMixer.liquidRegion, this.x, this.y);

		Draw.alpha(1);
		Draw.color();
		Draw.rect(AcidMixer.GlassRegion, this.x, this.y, 0);
	}
});
