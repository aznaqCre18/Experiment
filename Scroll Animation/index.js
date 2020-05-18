var controller = new ScrollMagic.Controller();

var titleScene = new ScrollMagic.Scene({
  triggerElement: ".best-products",
})
  .setClassToggle("#best-products-title", "fade-in")
  .addTo(controller);

var pScene = new ScrollMagic.Scene({
  triggerElement: ".best-products",
})
  .setClassToggle("#best-products-desc", "fade-in")
  .addTo(controller);

var imgScenes = [];
for (let i = 1; i <= 3; i++) {
  imgScenes[i] = new ScrollMagic.Scene({
    triggerElement: ".best-products",
  }).setClassToggle(`#image-${i}`, "show-up");
}
controller.addScene(imgScenes);

var listTitle = new ScrollMagic.Scene({
  triggerElement: ".list",
})
  .setClassToggle("#list__pack", "show-list")
  .addTo(controller);
