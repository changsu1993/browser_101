// const targetResult = (x) => {
//   const xy = `${x.clientX} , ${x.clientY}`;
//   const positionLeft = x.clientX;
//   const positionTop = x.clientY;
//   document.querySelector('.target').innerHTML = xy;
//   document.querySelector('.target').style.left = positionLeft + 'px';
//   document.querySelector('.target').style.top = positionTop + 'px';
// };

// if (document.addEventListener) {
//   document.addEventListener('mousemove', targetResult, false);
// } else if (document.attachEvent) {
//   document.attachEvent('onmousemove', targetResult);
// } else {
//   document.onmousemove = targetResult;
// }

const horozontal = document.querySelector('.horozontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    vertical.style.transform = `translateX(${x}px)`;
    horozontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
    tag.innerHTML = `${x}px , ${y}px`;
    tag.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
  });
});
