import '@vaadin/vaadin-lumo-styles/color.js';
import styles from './styles/color-css.js';

const $template = document.createElement('template');
$template.innerHTML = `
  <style id="cxl-lumo-styles-color" include="lumo-color">${styles}</style>
`;
document.head.appendChild($template.content);
