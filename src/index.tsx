import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ASSETS/styles.scss'
import reportWebVitals from './reportWebVitals';
import AppLayout from './App';


ReactDOM.render(
  <AppLayout />,
  document.getElementById('root')
);

reportWebVitals();
