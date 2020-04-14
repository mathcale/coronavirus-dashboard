const FontFaceObserver = require('fontfaceobserver');

export const loadFonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Montserrat:wght@900';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const roboto = new FontFaceObserver('Roboto');
  const montserrat = new FontFaceObserver('Montserrat');

  roboto.load().then(() => {
    document.documentElement.classList.add('with-roboto');
  });

  montserrat.load().then(() => {
    document.documentElement.classList.add('with-montserrat');
  });
}
