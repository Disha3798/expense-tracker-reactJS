
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {

    const datapointValues = props.datapoints.map((data) => data.value)
    const maxValue = Math.max(...datapointValues)
   
    return (
        <div className='chart'>
            {props.datapoints.map((datapoint) =>
                <ChartBar
                    key={datapoint.month}
                    value={datapoint.value}
                    maxValue={maxValue}
                    label={datapoint.month} />
            )
            }
        </div>

    )
}

export default Chart