import { useState } from 'react';
import Chart from '../../Chart/Chart'
import PieChart from '../../Chart/PieChart';

const ExpenseChart = (props) => {

    const [showPie, setShowPie] = useState(false)
    const [buttonText, setButtonText] = useState('Show Pie Chart')
    const datapoints = [
        { month: 'Jan', value: 0 },
        { month: 'Feb', value: 0 },
        { month: 'Mar', value: 0 },
        { month: 'Apr', value: 0 },
        { month: 'May', value: 0 },
        { month: 'Jun', value: 0 },
        { month: 'Jul', value: 0 },
        { month: 'Aug', value: 0 },
        { month: 'Sep', value: 0 },
        { month: 'Oct', value: 0 },
        { month: 'Nov', value: 0 },
        { month: 'Dec', value: 0 },
    ]

    for (const expense of props.items) {
        const expenseMonth = expense.date.getMonth()
        datapoints[expenseMonth].value += expense.amount
    }

    const showPieDisplay = () => {
        if (buttonText === 'Show Pie Chart') {
            setShowPie(true)
            setButtonText('Hide Pie Chart')
        }
        else {
            setShowPie(false)
            setButtonText('Show Pie Chart')
        }

    }
    return (
        <div>
            <button type="button" onClick={showPieDisplay}>{buttonText}</button>
            {showPie && <PieChart expenses={props.entireList}/>}
            {!showPie&&<Chart datapoints={datapoints} />}
        </div>

    )
}

export default ExpenseChart