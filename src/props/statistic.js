import {React, Component} from "react";
import '../css/statistic.css'
export default class Statistic extends Component{
    render(){
        return(
            <div className="statistic">
                <h3>{this.props.title}</h3>
                <h4>{this.props.value}</h4>
            </div>
        );
    }
}
