import './index.css';
import registerServiceWorker from './registerServiceWorker';

document.getElementById('app').innerHTML = `
  <h1>Welcome to <code>web-app-template</code>.</h1>
  <a href="https://github.com/remarkablemark/web-app-template">
    View source
  </a>
`;

registerServiceWorker();
