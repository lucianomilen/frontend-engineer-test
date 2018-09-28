import * as React from 'react';
import Searchbar from "../Searchbar/Searchbar";
import {inject, observer} from 'mobx-react';
import './Dashboard.scss'
import {Route} from "react-router";
import StockList from "../Stock/StockList";

@inject('routing')
@observer
export default class Dashboard extends React.Component<any,any>{
    public render(){
        return (
            <div className={'dashboard'}>
                <Searchbar/>
                <Route path='/' component={StockList}/>
            </div>
        )
    }
}