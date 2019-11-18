//bootstrapping
import ReactDOM from 'react-dom';
import React from "react";

import Routes from "./app/Routes";

const { registerObserver } = require('react-perf-devtool');
registerObserver();


ReactDOM.render(<Routes />, document.getElementById('root'));