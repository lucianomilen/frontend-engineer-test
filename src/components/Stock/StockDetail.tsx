import * as React from 'react';
import {inject, observer} from 'mobx-react';
import './Stock.scss'


@inject('StockStore')
@observer
export default class StockDetail extends React.Component<any> {

    private stockID: string;
    private LineChart: any;
    private chartOptions: any;

    constructor(props: any) {
        super(props);

        this.stockID = props.match.params.id;
        props.StockStore.getStockInfo(this.stockID);
        props.StockStore.getStockChart(this.stockID);
        // props.StockStore.initSocketConnection(this.stockID.toLowerCase());

        this.LineChart = require("react-chartjs").Line;
        this.chartOptions = {
            responsive: true,
        }
    }

    public render() {
        const {currentStock} = this.props.StockStore;

        const negativeText = {
            color: 'red'
        };
        const normalText = {
            color: 'green'
        };

        return (
            <div className="stock-info-container">
                {
                    this.props.StockStore.stockInfoDataReady &&
                    <div className="stock-info-content">
                        <div className="stock-info-header">
                            <h4>
                                {currentStock.companyName} ({currentStock.symbol})
                            </h4>
                            <h1>
                                {currentStock.latestPrice}&nbsp;
                                <span className="stock-change-text"
                                      style={currentStock.change < 0 ? negativeText : normalText}>
                                    {currentStock.change}
                                    ({(currentStock.changePercent * 100).toFixed(3)}%)
                                    </span>
                            </h1>
                        </div>
                        <div className={"stock-info-list"}>
                            <p>
                                <label>
                                    Latest Time
                                </label>
                                {currentStock.latestTime}
                            </p>
                            <p>
                                <label>
                                    Volume
                                </label>
                                {currentStock.latestVolume}
                            </p>
                            <p>
                                <label>
                                    Open
                                </label>
                                {currentStock.open}
                            </p>
                            <p>
                                <label>
                                    Sector
                                </label>
                                {currentStock.sector}
                            </p>
                            <p>
                                <label>
                                    Market Cap
                                </label>
                                {currentStock.marketCap}
                            </p>
                            <p>
                                <label>
                                    Week 52 Range
                                </label>
                                {currentStock.week52High} - {currentStock.week52Low}
                            </p>
                        </div>
                        {this.props.StockStore.stockChartDataReady &&
                        <div className="stock-info-graph-container">
                            <p>
                                Current Month Price
                            </p>
                            <this.LineChart data={this.props.StockStore.getStockChartData()} options={this.chartOptions}/>
                        </div>
                        }
                    </div>
                }
                {
                    this.props.StockStore.stockInfoDataError &&
                    <div>
                        <p>An error has occurred. Please try again later.</p>
                    </div>

                }
            </div>

        )
    }

    // public componentWillUnmount() {
    //     this.props.StockStore.closeSocketConnection(this.stockID.toLowerCase());
    // }

}