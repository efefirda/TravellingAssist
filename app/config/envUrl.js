//============DEV=============
// const config = {
//   protocol: 'http',
//   baseURL: 'touressapidev.azurewebsites.net',
//   rootURL: 'api',
//   port: '8868',
// };

//============QA=============
const config = {
  protocol: 'http',
  baseURL: 'touressapiqa.azurewebsites.net',
  rootURL: 'api',
  port: '8868',
};

//============DEMO=============
// const config = {
//   protocol: 'https',
//   baseURL: 'touressapidemo.azurewebsites.net',
//   rootURL: 'api',
// };

//============PROD=============
// const config = {
//   protocol: 'https',
//   baseURL: 'api.touress.com',
//   rootURL: 'api',
// };

const API_ROOT = `${config.protocol}://${config.baseURL}/${config.rootURL}`;

export default API_ROOT;
