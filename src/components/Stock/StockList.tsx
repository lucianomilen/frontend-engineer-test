import * as React from 'react';
import {inject, observer} from "mobx-react";
import ReactTable from "react-table";
import {toJS} from "mobx";
import 'react-table/react-table.css'
import './Stock.scss'
import StockStore from "../../stores/StockStore";

@inject('StockStore')
@inject('routing')
@observer
export default class StockList extends React.Component<any, any> {
    public routing: any;
    public stockStore: any;
    constructor(props: any) {
        super(props);
        this.stockStore = new StockStore()
    }

    public render() {
        const columns = [
            {
                Header: "Symbol",
                accessor: 'symbol',
                Filter: ({ filter, onChange }: any) =>
                    <input
                        onChange={event => onChange(event.target.value)}
                        style={{ width: "100%" }}
                        placeholder={'search stock...'}
                    />
            },
            {
                Header: "Price",
                accessor: 'latestPrice',
                Filter: ({ filter, onChange }: any) =>
                    <input
                        onChange={event => onChange(event.target.value)}
                        style={{ width: "100%" }}
                        placeholder={'filter by price...'}
                    />
            },
        ];

        const onRowClick = (state: any, rowInfo: any, column: any, instance: any) => {
            return {
                onClick: () => {
                    this.props.routing.push(`/detail/${rowInfo.original.symbol}`)
                }
            }
        };

        return (
            <div className={'table'}>
                {
                    this.props.StockStore.stockListDataReady &&
                        <div >
                            <ReactTable
                                filterable={true}
                                getTrProps={onRowClick}
                                defaultPageSize={20}
                                data={toJS(this.props.StockStore.stockList)}
                                columns={columns}
                            />
                        </div>
                }
                {
                    this.props.StockStore.stockListDataError &&
                        <div>
                            <p>An error has occurred. Please try again later.</p>
                        </div>
                }
            </div>
        )
    }
}