import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { browserHistory } from 'react-router';

import Routes from './routes';

ReactDOM.render(
	<Routes history={browserHistory} />,
	document.getElementById('root')
);
//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
