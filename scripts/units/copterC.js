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
copterC.constructor = () => extend(UnitEntity, {});