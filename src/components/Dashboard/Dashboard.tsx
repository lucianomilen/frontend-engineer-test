import * as React from 'react';
import Searchbar from "../Searchbar/Searchbar";
import './Dashboard.scss'

export default class Dashboard extends React.Component {
    public render(){
        return (
            <div className={'dashboard'}>
                <Searchbar/>
            </div>
        )
    }
}