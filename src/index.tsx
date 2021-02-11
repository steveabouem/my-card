import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ASSETS/styles.scss'
import reportWebVitals from './reportWebVitals';
import Lang from 'lang.js';
import AppLayout from './App';

declare global {
  interface Window { lang: any; }
}

enum LocalesEnum {
  EN = 'en',
  FR = 'fr_ca'
}

var lang = new Lang({
  messages: './UTILS/locale',
  locale: LocalesEnum.EN,
  fallback: LocalesEnum.FR
});

lang.setLocale(LocalesEnum.EN);

window.lang = lang;

ReactDOM.render(
  <AppLayout />,
  document.getElementById('root')
);

reportWebVitals();
