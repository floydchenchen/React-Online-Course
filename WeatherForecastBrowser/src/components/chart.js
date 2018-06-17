import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    const kelvin = _.sum(data) / data.length;
    return _.round(9 / 5 * (kelvin - 273) + 32);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"></SparklinesReferenceLine>
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    )
}

