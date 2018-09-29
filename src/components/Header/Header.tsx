import * as React from 'react';
import './Header.scss';
import {inject} from "mobx-react";

@inject('routing')
export default class Header extends React.Component<any> {
    public routing: any;
    constructor(props: any) {
        super(props);
    }


    public render(){
        return (
            <div onClick={() => this.props.routing.replace('/')} className={'header'}>
                IEX Dashboard
            </div>
        )
    }
}