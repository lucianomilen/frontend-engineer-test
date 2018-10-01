import * as React from 'react';
import './App.scss';
import Dashboard from './components/Dashboard/Dashboard';
import Header from "./components/Header/Header";
import createBrowserHistory from 'history/createBrowserHistory';
import {Provider} from 'mobx-react';
import {RouterStore, syncHistoryWithStore} from 'mobx-react-router';
import {Router} from 'react-router';
import StockStore from "./stores/StockStore";
import Footer from "./components/Footer/Footer";

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const stockStore = new StockStore();

const stores = {
    routing: routingStore,
    StockStore: stockStore
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
                        <Footer/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
