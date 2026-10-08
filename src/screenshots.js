import light0 from '../siir/screenshots/light/Screenshot_2026-10-08-15-39-05-86_c7fab53393fc9a7e45019b559b2669b6.jpg';
import light1 from '../siir/screenshots/light/Screenshot_2026-10-08-15-39-15-06_c7fab53393fc9a7e45019b559b2669b6.jpg';
import light2 from '../siir/screenshots/light/Screenshot_2026-10-08-15-39-29-82_c7fab53393fc9a7e45019b559b2669b6.jpg';
import light3 from '../siir/screenshots/light/Screenshot_2026-10-08-15-39-51-70_c7fab53393fc9a7e45019b559b2669b6.jpg';
import light4 from '../siir/screenshots/light/Screenshot_2026-10-08-15-40-20-03_c7fab53393fc9a7e45019b559b2669b6.jpg';
import light5 from '../siir/screenshots/light/Screenshot_2026-10-08-15-40-29-59_c7fab53393fc9a7e45019b559b2669b6.jpg';
import spectrogram from '../siir/screenshots/dark/Screenshot_2026-10-08-15-36-35-45_c7fab53393fc9a7e45019b559b2669b6.jpg';
import spectrogramMaths from '../siir/screenshots/dark/Screenshot_2026-10-08-15-36-41-52_c7fab53393fc9a7e45019b559b2669b6.jpg';
import pitchClasses from '../siir/screenshots/dark/Screenshot_2026-10-08-15-36-58-24_c7fab53393fc9a7e45019b559b2669b6.jpg';
import selfSimilarity from '../siir/screenshots/dark/Screenshot_2026-10-08-15-37-28-18_c7fab53393fc9a7e45019b559b2669b6.jpg';
import beatTracking from '../siir/screenshots/dark/Screenshot_2026-10-08-15-37-46-88_c7fab53393fc9a7e45019b559b2669b6.jpg';
import fluid from '../siir/screenshots/.bak/Screenshot_2026-10-08-14-49-25-91_c7fab53393fc9a7e45019b559b2669b6.jpg';
import cellularMusic from '../siir/screenshots/.bak/Screenshot_2026-10-08-14-49-02-65_c7fab53393fc9a7e45019b559b2669b6.jpg';

const darkImages = {
  spectrogram,
  'spectrogram-maths': spectrogramMaths,
  'pitch-classes': pitchClasses,
  'self-similarity': selfSimilarity,
  'beat-tracking': beatTracking,
  fluid,
  'cellular-music': cellularMusic,
};

const lightImages = {
  'spectrogram': light0,
  'spectrogram-maths': light1,
  'pitch-classes': light2,
  'self-similarity': light3,
  'beat-tracking': light4,
  'cellular-music': light5,
};

export const screenshots = Object.fromEntries(Object.entries(darkImages).map(([name, dark]) => [
  name, { dark, light: lightImages[name] },
]));
