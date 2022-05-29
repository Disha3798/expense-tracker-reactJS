import { useState } from 'react';
import './ExpenseChart.css'
import Chart from '../../Chart/Chart'
import PieChart from '../../Chart/PieChart';
import Button from '../../UI/Button/Button';

const ExpenseChart = (props) => {

    const [showPie, setShowPie] = useState(false)
    const [buttonText, setButtonText] = useState('Show Total Expense')
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
        if (buttonText === 'Show Total Expense') {
            setShowPie(true)
            setButtonText('Hide Total Expense')
        }
        else {
            setShowPie(false)
            setButtonText('Show Total Expense')
        }

    }
    return (
        <div>
            <Button className='pie-button' type="button" onClick={showPieDisplay}>{buttonText}</Button>
            {showPie && <PieChart />}
            {!showPie&&<Chart datapoints={datapoints} />}
        </div>

    )
}

export default ExpenseChart