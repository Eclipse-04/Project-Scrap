const heatGenerator = extend(BurnerGenerator, "heat-generator", {
  generateEffect: Fx.none,
  generateFx: Fx.smeltsmoke,
  getLiquidEfficiency(liquid) {
    return liquid.temperature
  }
});

heatGenerator.buildType = () => extend(BurnerGenerator.BurnerGeneratorBuild, heatGenerator, {
  update(){
    this.super$update();
    
    if(this.productionEfficiency > 0.0 && this.generateTime - Time.delta <= 0 && Mathf.chance(0.01)) heatGenerator.generateFx.at(this.x + Mathf.range(heatGenerator.generateEffectRnd), this.y + Mathf.range(heatGenerator.generateEffectRnd));
  }
})

const bigHeatGenerator = extend(BurnerGenerator, "heat-gen-big", {
  generateEffect: Fx.none,
  generateFx: Fx.smeltsmoke,
  getLiquidEfficiency(liquid) {
    return liquid.temperature
  }
});

heatGenerator.buildType = () => extend(BurnerGenerator.BurnerGeneratorBuild, heatGenerator, {
  update(){
    this.super$update();
    
    if(this.productionEfficiency > 0.0 && this.generateTime - Time.delta <= 0 && Mathf.chance(0.01)) heatGenerator.generateFx.at(this.x + Mathf.range(heatGenerator.generateEffectRnd), this.y + Mathf.range(heatGenerator.generateEffectRnd));
  }
})
