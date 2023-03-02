const { GestureDescription, Finger, FingerCurl } = window.fp;

const scrollUp = new GestureDescription("scroll-up"); // 🖐
const scrollDown = new GestureDescription("scroll-down"); // ✊️
const click = new GestureDescription("click"); // 🤏

// scroll-down
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
scrollDown.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
scrollDown.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  scrollDown.addCurl(finger, FingerCurl.FullCurl, 1.0);
  scrollDown.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// scroll-up
// -----------------------------------------------------------------------------

// no finger should be curled
for (let finger of Finger.all) {
  scrollUp.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

// click
// -----------------------------------------------------------------------------
click.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.8);
click.addCurl(Finger.Index, FingerCurl.FullCurl, 0.5);

click.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
click.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.4);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  click.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  click.addCurl(finger, FingerCurl.FullCurl, 0.9);
}

const knownGestures = [scrollDown, scrollUp, click];

const gestureStrings = {
  "scroll-up": "🖐",
  "scroll-down": "✊️",
  click: "🤏",
};

export { knownGestures, gestureStrings };
