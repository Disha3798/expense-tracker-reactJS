import ReactECharts from 'echarts-for-react';

const PieChart = (props) => {

    let updatedExpenses = new Set()
    updatedExpenses = props.expenses.map((expense) => ({
        value: expense.amount,
        name: expense.date.getFullYear()
    }))
    
    let years=[]
    for(let i=0; i < updatedExpenses.length; i++){
        if(years.indexOf(updatedExpenses[i].name) === -1) {
            years.push(updatedExpenses[i].name);
        }
    }
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
            text: 'Pie Chart',
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
                name: 'Tota Expense',
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
        <div >

            <ReactECharts option={options} />
        </div>
    )
}

export default PieChart
