import * as React from 'react';
import './App.scss';
import Dashboard from './components/Dashboard/Dashboard';
import Header from "./components/Header/Header";
import createBrowserHistory from 'history/createBrowserHistory';
import {Provider} from 'mobx-react';
import {RouterStore, syncHistoryWithStore} from 'mobx-react-router';
import {Router} from 'react-router';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
    // Key can be whatever you want
    routing: routingStore,
    // ...other stores
};

const history = syncHistoryWithStore(browserHistory, routingStore);

class App extends React.Component {
    public render() {
        return (
            <Provider {...stores}>
                <Router history={history}>
                    <div className="App">
                        <Header/>
                        <Dashboard />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
