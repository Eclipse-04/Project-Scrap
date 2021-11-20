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
			unit.x + Angles.trnsx(unit.rotation, 4.25),
			unit.y + Angles.trnsy(unit.rotation, 4.25),
			Time.time * -10
		);
		Draw.rect(
			"industrial-copter-a-top",
			unit.x + Angles.trnsx(unit.rotation, 4.25),
			unit.y + Angles.trnsy(unit.rotation, 4.25),
			unit.rotation - 90
		);
	}
});
const copterb = extend(UnitType, "copter-b", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"industrial-copter-b-rotator",
			unit.x + Angles.trnsx(unit.rotation, 4.5),
			unit.y + Angles.trnsy(unit.rotation, 4.5),
			Time.time * -15 + 120
		);
		Draw.rect(
			"industrial-copter-b-rotator",
			unit.x + Angles.trnsx(unit.rotation, 4.5),
			unit.y + Angles.trnsy(unit.rotation, 4.5),
			Time.time * -15 + 240
		);
		Draw.rect(
			"industrial-copter-b-rotator",
			unit.x + Angles.trnsx(unit.rotation, 4.5),
			unit.y + Angles.trnsy(unit.rotation, 4.5),
			Time.time * -15 
		);
		Draw.rect(
			"industrial-copter-b-rotator",
			unit.x + Angles.trnsx(unit.rotation, 4.5),
			unit.y + Angles.trnsy(unit.rotation, 4.5),
			Time.time * 15 + 120
		);
		Draw.rect(
			"industrial-copter-b-rotator",
			unit.x + Angles.trnsx(unit.rotation, 4.5),
			unit.y + Angles.trnsy(unit.rotation, 4.5),
			Time.time * 15 + 240
		);
		Draw.rect(
			"industrial-copter-b-rotator",
			unit.x + Angles.trnsx(unit.rotation, 4.5),
			unit.y + Angles.trnsy(unit.rotation, 4.5),
			Time.time * 15
		);
		Draw.rect(
			"industrial-copter-b-top",
			unit.x + Angles.trnsx(unit.rotation, 4.5),
			unit.y + Angles.trnsy(unit.rotation, 4.5),
			unit.rotation - 90
		);
	}
});
const copterC = extend(UnitType, "copter-c", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"industrial-copter-c-rotator",
			unit.x + Angles.trnsx(unit.rotation, 9.5),
			unit.y + Angles.trnsy(unit.rotation, 9.5),
			Time.time * -15
		);
		Draw.rect(
			"industrial-copter-c-top",
			unit.x + Angles.trnsx(unit.rotation, 9.5),
			unit.y + Angles.trnsy(unit.rotation, 9.5),
			unit.rotation - 90
		);
		Draw.z(Layer.flyingUnit - 0.001);
		Draw.rect(
			"industrial-copter-c-rotatorb",
			unit.x + Angles.trnsx(unit.rotation, -14.25),
			unit.y + Angles.trnsy(unit.rotation, -14.25),
			Time.time * -15
		);
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
copterC.constructor = () => extend(UnitEntity, {});
copterd.constructor = () => extend(UnitEntity, {});
//@Author Eschatologue 
//extracted from Eschatologue/Heavy-Armaments-Industries, thx for giving me code
