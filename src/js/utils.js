export const mediaWidth = width => window.matchMedia(`(max-width: ${width}px)`).matches;

export const isTouch = () => 'ontouchstart' in window;

export const buildIcon = name => `<svg class="icon icon-${name}"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-${name}"></use></svg>`;

export const SCROLL_WIDTH = () => {
  let documentWidth = parseInt(document.querySelector('body').clientWidth),
    windowsWidth = parseInt(window.innerWidth),
    scrollbarWidth = windowsWidth - documentWidth;
  return scrollbarWidth;
};
export const LOAD_DATA = props => {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', props.path, true);
  xhr.onload = () => {
    if (xhr.status !== 200) return console.error(`ERROR, ${props.path} data not found`);
    props.callback(JSON.parse(xhr.responseText));
  };
  xhr.send();
};
