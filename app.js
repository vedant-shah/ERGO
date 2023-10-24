const intro = document.querySelector(".vid");
const video = intro.querySelector("video");
const text1 = intro.querySelector("#t1");
const text2 = intro.querySelector("#t2");
const text3 = intro.querySelector("#t3");
const text4 = intro.querySelector("#t4");
const section = document.querySelector("section");
const end = section.querySelector("h1");
const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
  duration: 14000,
  triggerElement: intro,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

const textAnim = TweenMax.fromTo(text1, 2, { opacity: 1 }, { opacity: 0 });
let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnim)
  .addTo(controller);

// Calculate the offset based on scene's duration
let scene3Offset = scene.duration() * 0.315 - 1000; // 31.25% of scene's duration
let scene4Offset = scene.duration() * 0.643 - 1000; // 31.25% of scene's duration
let scene5Offset = scene.duration() * 0.786 - 1000; // 31.25% of scene's duration

let scene3 = new ScrollMagic.Scene({
  duration: 1500,
  triggerElement: intro,
  triggerHook: 0, // Start at the calculated offset
  offset: scene3Offset,
})
  .setClassToggle(text2, "show")
  .addTo(controller);

let scene4 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: intro,
  triggerHook: 0, // Start at the calculated offset
  offset: scene4Offset,
})
  .setClassToggle(text3, "show")
  .addTo(controller);

let scene5 = new ScrollMagic.Scene({
  duration: 5000,
  triggerElement: intro,
  triggerHook: 0, // Start at the calculated offset
  offset: scene5Offset,
})
  .setClassToggle(text4, "show")
  .addTo(controller);

scene.on("update", (e) => {
  let scrollpos = e.scrollPos / 1000;
  video.currentTime = scrollpos;
});
