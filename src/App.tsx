import * as React from 'react';
import './App.scss';
import Dashboard from './components/Dashboard/Dashboard';
import Header from "./components/Header/Header";

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Header/>
                <Dashboard/>
            </div>
        );
    }
}

export default App;
