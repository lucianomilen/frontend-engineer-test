import * as React from 'react';
import {observer} from 'mobx-react';
import StockStore from '../../stores/StockStore'

@observer
export default class StockDetail extends React.Component {

    public stockStore: any;
    private stockID: string;

    constructor(props: any) {
        super(props);
        this.stockID = props.match.params.id;
        this.stockStore = new StockStore();
        this.stockStore.getStockInfo(this.stockID);
    }

    public render() {
        return (
            this.stockStore.stockInfoDataReady &&
            <div>
                <p>
                    Symbol: {this.stockStore.currentStock.symbol}
                </p>
                <p>
                    Company: {this.stockStore.currentStock.companyName}
                </p>
                <p>
                    Primary Exchange: {this.stockStore.currentStock.primaryExchange}
                </p>
                <p>
                    Sector: {this.stockStore.currentStock.sector}
                </p>
                <p>
                    High: {this.stockStore.currentStock.high}
                </p>
                <p>
                    Low: {this.stockStore.currentStock.low}
                </p>
                <p>
                    Latest Price: {this.stockStore.currentStock.latestPrice}
                </p>
                <p>
                    Change: {this.stockStore.currentStock.change}
                </p>
                <p>
                    IEX Volume: {this.stockStore.currentStock.iexVolume}
                </p>
                <p>
                    IEX Bid Price: {this.stockStore.currentStock.iexBidPrice}
                </p>
                <p>
                    IEX Ask Price: {this.stockStore.currentStock.iexAskPrice}
                </p>
                <p>
                    Market Cap: {this.stockStore.currentStock.marketCap}
                </p>
                <p>
                    Week 52 High: {this.stockStore.currentStock.week52High}
                </p>
                <p>
                    Week 52 Low: {this.stockStore.currentStock.week52Low}
                </p>
            </div>
        )
    }
}