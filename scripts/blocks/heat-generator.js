// code by pankiwi :D

const termal = extendContent(BurnerGenerator, "heat-generator", {
  getLiquidEfficiency(liquid) {
    return liquid.temperature
  }
});