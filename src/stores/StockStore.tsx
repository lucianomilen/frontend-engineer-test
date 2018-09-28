import axios from 'axios'
import {action, observable, toJS} from "mobx";

export default class StockStore {
    constructor() {
        this.getTOPS();
    }

    @observable public stockList: any = [];
    @observable public dataReady = false;

    public getTOPS () {
        axios.get('https://api.iextrading.com/1.0/stock/market/list/infocus?filter=symbol,iexBidPrice').then(
            response => {
                this.setStockList(response.data);
                this.dataReady = true;
            })
    }

    @action private setStockList(stockList:any) {
        this.stockList = toJS([...stockList]);
    }
}