//caught you dirty stealer how dare you steal Eclipse brrrrrrrrrrr
const shotGunLead = extendContent(BasicBulletType, 4, 15, "shell", {
    knockback: 0.23,
    lifetime: 30,
    width: 8,
    height: 12,
});
const shotGunScrap = extendContent(BasicBulletType, 4, 17, "shell", {
    knockback: 0.23,
    lifetime: 30,
    width: 8,
    reloadMultiplier: 0.8,
    height: 12,
});
const shotGunGraphite = extendContent(BasicBulletType, 4, 25, "shell", {
    knockback: 0.4,
    lifetime: 30,
    width: 8,
    reloadMultiplier: 0.8,
    height: 12,
});
const shotGunTitan = extendContent(BasicBulletType, 4, 18, "shell", {
    knockback: 0.23,
    lifetime: 30,
    width: 6,
    reloadMultiplier: 1.2,
    height: 12,
    pierce: true,
    pierceBuilding: true,
    pierceCap: 2,
});
module.exports = {
    shotGunScrap:shotGunScrap,
    shotGunLead:shotGunLead,
    shotGunGraphite:shotGunGraphite,
    shotGunTitan:shotGunTitan,
}