//listen for the event where a unit is destroyed
Events.on(UnitDestroyEvent, event => {
    //display toast on top of screen when the unit was a player
    Vars.ui.hudfrag.showToast("Pathetic.");
  })