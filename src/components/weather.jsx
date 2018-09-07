import React, {Component} from "react";
import { Forecast } from "react-forecast"

class WxForecast extends Component {
    render() {
        return (
            <Forecast latitude={34.05} longitude={118.25} name='Los Angeles' />
        );
    }
}

export default WxForecast