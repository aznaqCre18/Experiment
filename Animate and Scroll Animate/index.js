// Animate on scroll

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

// Animate on landing
let tl = gsap.timeline();

tl.to(
  ".jumbotron",
  {
    x: 0,
    opacity: 1,
    duration: 1.2,
  },
  0.5
)
  .to(
    ".slogan",
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    1.7
  )
  .to(
    ".shop-now",
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    1.7
  );
