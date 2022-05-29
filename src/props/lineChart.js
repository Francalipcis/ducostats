import React, {Component} from "react";

import {Bar} from 'react-chartjs-2';

export default class LineChart extends Component{
    render(){
        return(
            <div>

                <Bar 
                    data={{
                        labels: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
                    }}
                    height={400}
                    width={400}
                    />
            </div>
        )
    }
}