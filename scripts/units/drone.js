const drone = extend(UnitType, "drone", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"industrial-drone-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -15);
		Draw.rect(
			"industrial-drone-rotor-outline",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -15);
	}
});
const repairer = extend(UnitType, "repairer", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"industrial-drone-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -15);
		Draw.rect(
			"industrial-drone-rotor-outline",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -15);
	}
});
const supa = extend(UnitType, "sup-a", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"industrial-sup-a-rotator",
			unit.x + Angles.trnsx(unit.rotation, -6.75),
			unit.y + Angles.trnsy(unit.rotation, -6.75),
			Time.time * -15);
		Draw.rect(
			"industrial-sup-a-rotator",
			unit.x + Angles.trnsx(unit.rotation, 5.75),
			unit.y + Angles.trnsy(unit.rotation, 5.75),
			Time.time * 15);
		Draw.rect(
			"industrial-sup-a-rotator",
			unit.x + Angles.trnsx(unit.rotation, -6.75),
			unit.y + Angles.trnsy(unit.rotation, -6.75),
			Time.time * 15);
		Draw.rect(
			"industrial-sup-a-rotator",
			unit.x + Angles.trnsx(unit.rotation, 5.75),
			unit.y + Angles.trnsy(unit.rotation, 5.75),
			Time.time * -15);
		Draw.rect(
			"industrial-sup-a-top",
			unit.x + Angles.trnsx(unit.rotation, 5.75),
			unit.y + Angles.trnsy(unit.rotation, 5.75),
			unit.rotation - 90);
		Draw.rect(
			"industrial-sup-a-top",
			unit.x + Angles.trnsx(unit.rotation, -6.75),
			unit.y + Angles.trnsy(unit.rotation, -6.75),
			unit.rotation - 90);
	}
});
const coptera = extend(UnitType, "copter-a", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"industrial-copter-a-rotator",
			unit.x + Angles.trnsx(unit.rotation, 4.5),
			unit.y + Angles.trnsy(unit.rotation, 4.5),
			Time.time * -15);
		Draw.rect(
			"industrial-copter-a-rotator-out",
			unit.x + Angles.trnsx(unit.rotation, 4.5),
			unit.y + Angles.trnsy(unit.rotation, 4.5),
			Time.time * -15);
		Draw.rect(
			"industrial-copter-a-rotator",
			unit.x + Angles.trnsx(unit.rotation, 4.5),
			unit.y + Angles.trnsy(unit.rotation, 4.5),
			Time.time * 15);
		Draw.rect(
			"industrial-copter-a-rotator-out",
			unit.x + Angles.trnsx(unit.rotation, 4.5),
			unit.y + Angles.trnsy(unit.rotation, 4.5),
			Time.time * 15);
		Draw.rect(
			"industrial-copter-a-top",
			unit.x + Angles.trnsx(unit.rotation, 4.5),
			unit.y + Angles.trnsy(unit.rotation, 4.5),
			unit.rotation - 90);
	}
});
const copterb = extend(UnitType, "copter-b", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"industrial-copter-b-rotator",
			unit.x + Angles.trnsx(unit.rotation, 5.25),
			unit.y + Angles.trnsy(unit.rotation, 5.25),
			Time.time * -15);
		Draw.rect(
			"industrial-copter-b-rotator-out",
			unit.x + Angles.trnsx(unit.rotation, 5.25),
			unit.y + Angles.trnsy(unit.rotation, 5.25),
			Time.time * -15);
		Draw.rect(
			"industrial-copter-b-rotator",
			unit.x + Angles.trnsx(unit.rotation, 5.25),
			unit.y + Angles.trnsy(unit.rotation, 5.25),
			Time.time * 15);
		Draw.rect(
			"industrial-copter-b-rotator-out",
			unit.x + Angles.trnsx(unit.rotation, 5.25),
			unit.y + Angles.trnsy(unit.rotation, 5.25),
			Time.time * 15);
		Draw.rect(
			"industrial-copter-b-top",
			unit.x + Angles.trnsx(unit.rotation, 5.25),
			unit.y + Angles.trnsy(unit.rotation, 5.25),
			unit.rotation - 90);
	}
});
drone.constructor = () => extend(UnitEntity, {});
supa.constructor = () => extend(UnitEntity, {});
repairer.constructor = () => extend(UnitEntity, {});
coptera.constructor = () => extend(UnitEntity, {});
copterb.constructor = () => extend(UnitEntity, {});
// @Author Eschatologue 
//extracted from Eschatologue/Heavy-Armaments-Industries, thx for giving me code