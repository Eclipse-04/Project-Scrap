const phaseConstructor = extend(GenericCrafter, "phase-constructor", {
  load() {
    this.super$load();
    this.topRegion = Core.atlas.find(this.name + "-top");
    this.barRegion = Core.atlas.find(this.name + "-bar");
    this.pointRegion = Core.atlas.find(this.name + "-point");
    this.phaseRegion = Core.atlas.find(this.name + "-phase");
  },
  icons(){
    return [
      this.region,this.phaseRegion,this.barRegion,this.pointRegion,this.topRegion
      ];
  }
});
phaseConstructor.buildType = () => extend(GenericCrafter.GenericCrafterBuild, phaseConstructor, {
  draw() {
    Draw.rect(phaseConstructor.region, this.x, this.y);
    
    Draw.alpha(0.5 + Mathf.absin(this.totalProgress, 10, 0.5));
    
    Draw.rect(phaseConstructor.phaseRegion, this.x, this.y, this.totalProgress);
    
    Draw.alpha(1);
    
    Draw.rect(phaseConstructor.barRegion, this.x + Mathf.cos(this.totalProgress, 40, 4), this.y);
    
    Draw.rect(phaseConstructor.pointRegion, this.x + Mathf.cos(this.totalProgress, 40, 4), this.y + Mathf.sin(this.totalProgress, 20, 4));
    
    Draw.rect(phaseConstructor.topRegion, this.x, this.y);
  }
});