import * as React from 'react';
import StockStore from '../../stores/StockStore'
import {inject, observer} from "mobx-react";
import ReactTable from "react-table";
import {toJS} from "mobx";
import 'react-table/react-table.css'
import './StockList.scss'

@inject('routing')
@observer
export default class StockList extends React.Component<any> {
    public stockStore: any;
    public routing: any;
    constructor(props: any) {
        super(props);
        // console.log(props)
        // this.routing = props.routing;

        this.stockStore = new StockStore();
    }

    public tell() {
        console.log(toJS(this.stockStore.stockList))
    }

    public render() {

        const columns = [
            {
                Header: "Symbol",
                accessor: 'symbol',
            },
            {
                Header: "Price",
                accessor: 'iexBidPrice',
            },
        ];

        // @ts-ignore
        const onRowClick = (state, rowInfo, column, instance) => {
            return {
                onClick: () => {
                    console.log(rowInfo.original)
                    // console.log(this.props)
                    this.props.routing.push(`/detail/${rowInfo.original.symbol}`)
                }
            }
        }

        return (
            <div >
                {
                    this.stockStore.stockListDataReady &&
                        <div >
                            <ReactTable
                                filterable={true}
                                getTrProps={onRowClick}
                                defaultPageSize={10}
                                data={toJS(this.stockStore.stockList)}
                                columns={columns}
                            />
                        </div>


                }
            </div>
        )
    }
}