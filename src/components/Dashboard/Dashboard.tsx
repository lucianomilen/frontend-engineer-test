import * as React from 'react';
import Searchbar from "../Searchbar/Searchbar";
import {inject, observer} from 'mobx-react';
import './Dashboard.scss'
import {Route} from "react-router";
import StockList from "../Stock/StockList";
import StockDetail from "../Stock/StockDetail";

@inject('routing')
@observer
export default class Dashboard extends React.Component<any,any>{
    public render(){
        return (
            <div className={'dashboard'}>
                <p>{this.props.routing.location.pathname}</p>

                <Searchbar/>
                <Route exact={true} path='/' component={StockList}/>
                <Route path='/detail/:id' component={StockDetail} routing={this.props.routing}/>
            </div>
        )
    }
}