import axios from 'axios'
import {action, observable} from "mobx";

export default class StockStore {
    constructor() {
        this.getTOPS();
    }

    @observable public stockList: any = [];
    @observable public currentStock: any = {};
    @observable public currentStockChartData: any;
    @observable public currentStockChartDataLabels: any;

    @observable public stockListDataReady = false;
    @observable public stockListDataError = false;

    @observable public stockInfoDataReady = false;
    @observable public stockInfoDataError = false;

    @observable public stockChartDataReady = false;

    // private socket: any; // o socket infelizmente não funcionou


    // public initSocketConnection(stock: string) {
    //     this.socket = require('socket.io-client')('https://ws-api.iextrading.com/1.0/tops');
    //     this.socket.on('message', (message: any) => console.log(message));
    //
    //     this.socket.on('connect', () => {
    //
    //         this.socket.emit('subscribe', stock)
    //
    //     })
    // }
    //
    // public closeSocketConnection(stock: string){
    //     this.socket.emit('unsubscribe', stock)
    // }

    public getTOPS() {
        axios.get('https://api.iextrading.com/1.0/tops?filter=symbol,latestPrice').then(
            response => {
                this.setStockList(response.data);
            },
            error => {
                this.stockListDataError = true;
            })
    }

    @action
    private setStockList(stockList: any) {
        this.stockList = [...stockList];
        this.stockListDataReady = true;
    }

    @action
    private setCurrentStock(stock: any) {
        this.currentStock = stock;
        this.stockInfoDataReady = true;

    }

    @action
    private setStockChart(chartData: any) {
        this.currentStockChartDataLabels = chartData.map((item: any) => item.label);
        this.currentStockChartData = chartData.map((item: any) => item.open)
    }

    @action
    public getStockChartData(){
        return {
            labels: this.currentStockChartDataLabels,
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: this.currentStockChartData
                },
            ]
        };
    }

    public getStockInfo(symbol: string) {
        axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`).then(
            response => {
                this.setCurrentStock(response.data);
            },
            error => {
                this.stockInfoDataError = true;
            })
    }

    public getStockChart(symbol: string) {
        axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/1m`).then(
            response => {
                this.setStockChart(response.data);
                this.stockChartDataReady = true;
            },
            error => {
                this.stockInfoDataError = true;
            })
    }


}