const CHANNEL_LINK = 'https://t.me/pipitrad';

const STEPS = [
  {
    title: 'Step 1 : Download Pipi file',
    body: `To begin, download the Pipi file corresponding to the webtoon you want to read in this <a href=${CHANNEL_LINK}>Telegram channel</a>.
  Be sure to save the file in an accessible directory.`,
  },
  {
    title: 'Step 2 : Import Pipi file',
    body: `Then import the file into the application via the <b>+</b> button, and that's it.`,
  },
];

/**
 * @type {HTMLTemplateElement}
 */
const template = document.querySelector('#step-template');

/**
 * @type {HTMLDivElement}
 */
const container = document.querySelector('#container');

/**
 * @type {HTMLBodyElement}
 */
let body = document.querySelector('body');


/**
 *
 * @param {{title:string; body:string, img:string;}} step
 */
function createStep(step, i) {
  /**
   * @type {HTMLDivElement}
   */
  const stepElement = template.content.cloneNode(true);
  /**
   * @type {HTMLTitleElement}
   */
  const title = stepElement.querySelector('.title');
  /**
   * @type {HTMLParagraphElement}
   */
  const body = stepElement.querySelector('.body');

  title.innerHTML = step.title;
  body.innerHTML = step.body;

  container.appendChild(stepElement);
}

function getTheme () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('theme')
}

STEPS.forEach((step, i) => createStep(step, i));

document.body.setAttribute("class", getTheme())


