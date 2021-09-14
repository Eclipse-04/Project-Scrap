const Refinery = extend( GenericCrafter, "refinery", {});
Refinery.drawer = new DrawRotator();
const bigKiln = extend( AttributeCrafter, "meta-kilnii", {});
bigKiln.drawer = new DrawSmelter();
const sulExtractor = extend( AttributeCrafter, "sulfur-extractor", {});
sulExtractor.drawer = new DrawLiquid();
const acidSulfurMixer = extend( AttributeCrafter, "acid-sulfuric-mixer", {});
acidSulfurMixer.drawer = new DrawLiquid();
