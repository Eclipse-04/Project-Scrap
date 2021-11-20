let lib = require("ammo-lib");
const salve = extend(ItemTurret, "salve", {})
salve.ammo(
    Items.scrap, lib.shotGunScrap,
    Items.lead, lib.shotGunLead,
    Items.graphite, lib.shotGunGraphite,
    Items.titanium, lib.shotGunTitan,
)