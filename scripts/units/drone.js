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
const copterc = extend(UnitType, "copter-c", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"industrial-copter-c-rotator",
			unit.x + Angles.trnsx(unit.rotation, 7.5),
			unit.y + Angles.trnsy(unit.rotation, 7.5),
			Time.time * -15);
		Draw.rect(
			"industrial-copter-c-rotator",
			unit.x + Angles.trnsx(unit.rotation, 7.5),
			unit.y + Angles.trnsy(unit.rotation, 7.5),
			Time.time * 15);
		Draw.rect(
			"industrial-copter-c-top",
			unit.x + Angles.trnsx(unit.rotation, 7.5),
			unit.y + Angles.trnsy(unit.rotation, 7.5),
			unit.rotation - 90);
	}
});
const copterd = extend(UnitType, "copter-d", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"industrial-copter-d-blade",
			unit.x + Angles.trnsx(unit.rotation, 7.75),
			unit.y + Angles.trnsy(unit.rotation, 7.75),
			Time.time * -20);
		Draw.rect(
			"industrial-copter-d-blade-a",
			unit.x + Angles.trnsx(unit.rotation, 7.75),
			unit.y + Angles.trnsy(unit.rotation, 7.75),
			Time.time * 20);
		Draw.rect(
			"industrial-copter-d-top",
			unit.x + Angles.trnsx(unit.rotation, 7.75),
			unit.y + Angles.trnsy(unit.rotation, 7.75),
			unit.rotation - 90);
	}
});
drone.constructor = () => extend(UnitEntity, {});
repairer.constructor = () => extend(UnitEntity, {});
coptera.constructor = () => extend(UnitEntity, {});
copterb.constructor = () => extend(UnitEntity, {});
copterc.constructor = () => extend(UnitEntity, {});
copterd.constructor = () => extend(UnitEntity, {});
// @Author Eschatologue 
//extracted from Eschatologue/Heavy-Armaments-Industries, thx for giving me code
