const Refinery = extend( GenericCrafter, "refinery", {});
Refinery.drawer = new DrawRotator();
const bigKiln = extend( AttributeCrafter, "meta-kilnii", {});
bigKiln.drawer = new DrawSmelter();
const sulExtractor = extend( GenericCrafter, "sulfur-extractor", {});
sulExtractor.drawer = new DrawMixer();
const acidSulfurMixer = extend( LiquidConverter, "acid-sulfuric-mixer", {});
acidSulfurMixer.drawer = new DrawMixer();
