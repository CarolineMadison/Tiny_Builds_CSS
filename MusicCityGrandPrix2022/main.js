// target all path elements describing the gusts of air around the race car
const paths = document.querySelectorAll('path.air');


// add an increasing delay to the animation
paths.forEach((path, index) => {
  const totalLength = path.getTotalLength();
  path.style.setProperty('--stroke-dash', totalLength);
  path.style.setProperty('--stroke-dash-negative', -totalLength);
  
  if (index === 0) {
    path.style.animationDelay = `${0.08 * (paths.length - 2)}s`;
  } else {
    path.style.animationDelay = `${0.08 * index}s`;
  }
});
