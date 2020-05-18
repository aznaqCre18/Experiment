var tl = gsap.timeline();
tl.to(
  ".bg-image",
  {
    x: 0,
    opacity: 1,
    duration: 1,
  },
  0.7
)
  .to(
    ".jumbotron__image",
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    0.5
  )
  .to(
    ".jumbotron__content",
    {
      x: 0,
      opacity: 1,
      duration: 1,
    },
    0.7
  );

function gone() {
  var tl = gsap.timeline();
  tl.to(
    ".bg-image",
    {
      x: 600,
      opacity: 0,
      duration: 1,
    },
    0.3
  )
    .to(
      ".jumbotron__image",
      {
        y: 20,
        opacity: 0,
        duration: 1,
      },
      0
    )
    .to(
      ".jumbotron__content",
      {
        x: -50,
        opacity: 0,
        duration: 1,
      },
      0.3
    );
  setTimeout(() => {
    window.location.href = "about.html";
  }, 1000);
}
