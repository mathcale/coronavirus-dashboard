const FontFaceObserver = require('fontfaceobserver');

export const loadFonts = () => {
  const googleFontsLink = document.createElement('link');
  googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Montserrat:wght@900';
  googleFontsLink.rel = 'stylesheet';

  const coreUiIconsLink = document.createElement('link');
  coreUiIconsLink.href = 'https://unpkg.com/@coreui/icons/css/free.min.css';
  coreUiIconsLink.rel = 'stylesheet';

  document.head.appendChild(googleFontsLink);
  document.head.appendChild(coreUiIconsLink);

  const roboto = new FontFaceObserver('Roboto');
  const montserrat = new FontFaceObserver('Montserrat');
  const coreUiFonts = new FontFaceObserver('CoreUI-Icons-Free');

  Promise.all([
    roboto.load(),
    montserrat.load(),
    coreUiFonts.load(),
  ]).then(() => {
    document.documentElement.classList.add('with-roboto');
    document.documentElement.classList.add('with-montserrat');
    document.documentElement.classList.add('with-icons');
  });
}
