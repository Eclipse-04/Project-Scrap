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
const coptera = extend(UnitType, "copter-a", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"industrial-copter-a-rotator",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -15);
		Draw.rect(
			"industrial-copter-a-rotator-out",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -15);
		Draw.rect(
			"industrial-copter-a-rotator",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * 15);
		Draw.rect(
			"industrial-copter-a-rotator-out",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * 15);
	}
});
const copterb = extend(UnitType, "copter-b", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"industrial-copter-b-rotator",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -15);
		Draw.rect(
			"industrial-copter-b-rotator-out",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -15);
		Draw.rect(
			"industrial-copter-b-rotator",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * 15);
		Draw.rect(
			"industrial-copter-b-rotator-out",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * 15);
	}
});
drone.constructor = () => extend(UnitEntity, {});
repairer.constructor = () => extend(UnitEntity, {});
coptera.constructor = () => extend(UnitEntity, {});
copterb.constructor = () => extend(UnitEntity, {});
// @Author Eschatologue 
//extracted from Eschatologue/Heavy-Armaments-Industries, thx for giving me code