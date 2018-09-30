import * as React from 'react';
import {inject, observer, Provider} from 'mobx-react';
import './Dashboard.scss'
import {Route} from "react-router";
import StockList from "../Stock/StockList";
import StockDetail from "../Stock/StockDetail";

@inject('StockStore')
@inject('routing')
@observer
export default class Dashboard extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        const hide = {
            display: 'none'
        }
        return (
            <div>
                <p style={hide}>
                    {this.props.routing.location.pathname}
                </p>

                <Provider {...this.props.StockStore}>
                    <div className={'dashboard'}>
                        <Route exact={true} path='/' component={StockList} routing={this.props.routing}/>
                        <Route path='/detail/:id' component={StockDetail}/>
                    </div>
                </Provider>
            </div>

        )
    }
}