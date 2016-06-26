import React from 'react';
import ReactDOM from 'react-dom';
// import Test from './components/Test';
import App from './components/App';

const rootElement = document.getElementById('root');

/*
App.defaultProps = {
  headerTitle: 'Default header',
  contentTitle: 'Default contentTitle',
  contentBody: 'Default contentBody'
};
*/

// ReactDOM.render(<Test />, rootElement);
/*
ReactDOM.render(<App headerTitle = 'Welcome!'
                    contentTitle = 'Stranger,'
                    contentBody = 'Welcome to React JS Sample Application!'/>,
                rootElement);
*/
ReactDOM.render(<App />, rootElement);

