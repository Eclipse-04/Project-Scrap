let lib = require("ammon-lib");
const salve = extend(ItemTurret, "salve", {})
salve.ammo(
    Items.copper, Bullets.standardCopper,
    Items.scrap, lib.shotGunScrap,
    Items.lead, lib.shotGunLead,
    Items.graphite, lib.shotGunGraphite,
    Items.titanium, lib.shotGunTitan,
)