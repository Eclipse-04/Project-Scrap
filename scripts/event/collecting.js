//listen for the event where a unit is destroyed
Events.on(UnitDestroyEvent, test => {
    //display toast on top of screen when the unit is a crawler
  let u = test.unit
  if(u = crawler) {
    Vars.ui.hudfrag.showToast("Pathetic Crawler.");
  }
})
