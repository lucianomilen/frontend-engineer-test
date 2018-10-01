import * as React from 'react';
import './Footer.scss';

export default class Footer extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }


    public render() {
        return (
            <a href="https://www.linkedin.com/in/luciano-otoni-milen/">
                <div className="footer">
                    Developed by Luciano Otoni Milen
                </div>
            </a>

        )
    }
}