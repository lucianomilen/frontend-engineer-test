import * as React from 'react';
import {inject, observer} from 'mobx-react';

@inject('StockStore')
@observer
export default class StockDetail extends React.Component<any> {

    private stockID: string;

    constructor(props: any) {
        super(props);
        console.log(props)
        this.stockID = props.match.params.id;
        props.StockStore.getStockInfo(this.stockID);
    }

    public render() {
        return (
            <div>
                {
                    this.props.StockStore.stockInfoDataReady &&
                    <div>
                        <p>
                            Symbol: {this.props.StockStore.currentStock.symbol}
                        </p>
                        <p>
                            Company: {this.props.StockStore.currentStock.companyName}
                        </p>
                        <p>
                            Primary Exchange: {this.props.StockStore.currentStock.primaryExchange}
                        </p>
                        <p>
                            Sector: {this.props.StockStore.currentStock.sector}
                        </p>
                        <p>
                            High: {this.props.StockStore.currentStock.high}
                        </p>
                        <p>
                            Low: {this.props.StockStore.currentStock.low}
                        </p>
                        <p>
                            Latest Price: {this.props.StockStore.currentStock.latestPrice}
                        </p>
                        <p>
                            Change: {this.props.StockStore.currentStock.change}
                        </p>
                        <p>
                            IEX Volume: {this.props.StockStore.currentStock.iexVolume}
                        </p>
                        <p>
                            IEX Bid Price: {this.props.StockStore.currentStock.iexBidPrice}
                        </p>
                        <p>
                            IEX Ask Price: {this.props.StockStore.currentStock.iexAskPrice}
                        </p>
                        <p>
                            Market Cap: {this.props.StockStore.currentStock.marketCap}
                        </p>
                        <p>
                            Week 52 High: {this.props.StockStore.currentStock.week52High}
                        </p>
                        <p>
                            Week 52 Low: {this.props.StockStore.currentStock.week52Low}
                        </p>
                    </div>
                }
                {
                    this.props.StockStore.stockInfoDataError &&
                    <div>
                        <p>Error.</p>
                    </div>

                }
            </div>

        )
    }
}