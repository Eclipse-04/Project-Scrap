//caught you dirty script thief how dare you steal Eclipse brrrrrrr
const standardAmmo = extendContent(BasicBulletType,5,12,"shell",{
    knockback: 0.24,
    lifetime: 90,
    width: 8,
    height: 8,
    trailLength: 8,
    trailWidth: 2,
    trailColor: f9c27a,
    backColor: f9c27a,
    frontColor: fff8e8
})

const pyraAmmo = extendContent(BasicBulletType,5,12,"shell",{
    knockback: 0.4,
    lifetime: 90,
    width: 8,
    height: 8,
    trailLength: 8,
    trailWidth: 2,
    trailColor: f68021,
    backColor: f68021,
    makeFire: true,
    status: burning,
    frontColor: f8ad42
})
module.exports = {
    
}