import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrpahangesMap from './pages/OrpahangesMap';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={OrpahangesMap} />
        </BrowserRouter>
    );
}

export default Routes;