import axios from 'axios'
import {action, observable, toJS} from "mobx";

export default class StockStore {
    constructor() {
        this.getTOPS();
    }

    @observable public stockList: any = [];
    @observable public currentStock: any = {};
    @observable public stockListDataReady = false;
    @observable public stockInfoDataReady = false;

    public getTOPS () {
        axios.get('https://api.iextrading.com/1.0/stock/market/list/infocus?filter=symbol,iexBidPrice').then(
            response => {
                this.setStockList(response.data);
            })
    }

    @action private setStockList(stockList:any) {
        this.stockList = toJS([...stockList]);
        this.stockListDataReady = true;
    }

    @action private setCurrentStock(stock:any) {
        this.currentStock = stock;
        this.stockInfoDataReady = true;

    }

    public getStockInfo(symbol: string) {
        axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`).then(
            response => {
                this.setCurrentStock(response.data);
            })
    }
}