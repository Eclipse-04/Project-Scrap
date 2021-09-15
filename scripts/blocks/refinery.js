const Refinery = extend( GenericCrafter, "refinery", {});
Refinery.drawer = new DrawRotator();
const bigKiln = extend( AttributeCrafter, "meta-kilnii", {});
bigKiln.drawer = new DrawSmelter();
const smolSteel = extend( GenericCrafter, "steel-smelter", {});
smolSteel.drawer = new DrawSmelter();
const bigSteel = extend( AttributeCrafter, "steel-forge", {});
bigSteel.drawer = new DrawSmelter();
