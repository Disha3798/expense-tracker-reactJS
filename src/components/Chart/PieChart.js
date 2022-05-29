import ReactECharts from 'echarts-for-react';
import { useContext } from 'react';
import ExpenseContext from '../../store/expense-context';

const PieChart = () => {

    const expenseCtx=useContext(ExpenseContext)

    let updatedExpenses = expenseCtx.expenses.map((expense) => ({
        value: expense.amount,
        name: expense.date.getFullYear()
    }))
    for(let j=0;j<updatedExpenses.length;j++)
    {
        
        for(let k=j+1;k<updatedExpenses.length;k++)
        {
            if(updatedExpenses[j].name===updatedExpenses[k].name)
            {
                updatedExpenses[j].value1=updatedExpenses[k].value
            }
            
        }
    }
    for(const expense of updatedExpenses)
    {
        if('value1' in expense)
        {
            expense.value+=expense.value1
        }
    }
    
    let updatedArray=[]
    updatedArray.push(updatedExpenses[0])
    for(let j=1;j<updatedExpenses.length;j++)
    {
        for(let k=0;k<updatedArray.length;k++)
        {
            const found = updatedArray.some(el => el.name === updatedExpenses[j].name);
            if(!found)
            {
                updatedArray.push(updatedExpenses[j])
                k++;
            }
        }
    }
    const options = {
        title: {
            text: 'Total Expense',
            subtext: 'Expense per year',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#fff'
            }
        },
        series: [
            {
                name: 'Total Expense',
                type: 'pie',
                radius: '50%',
                data: updatedArray,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }


    return (
        <div>
            <ReactECharts option={options} />
        </div>
    )
}

export default PieChart
