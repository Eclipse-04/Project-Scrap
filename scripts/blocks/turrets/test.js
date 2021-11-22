const test = extendContent(ItemTurret, "testing-turret", {
    shots = 2,
    health = 100,
    size = 1,
    reloadTime = 10,
    rotateSpeed = 20
});
test.ammo(
    Items.copper, Bullets.standardCopper,
);
test.requirements = ItemStack.with(
    Items.copper, 10
);
test.category = Category.turret;