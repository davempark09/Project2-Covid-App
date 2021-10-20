import React from 'react'
import { Bar } from 'react-chartjs-2'



function BarChart2(data) {



    console.log(data)
    const barChart2 = (
        <Bar
        data={{
        labels: ['Infected', 'Vaccinations Completed' ,'Deaths'],
        datasets: [
        {
        label: 'People',
        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
        data: [data.data.cases, data.data.vaccinationsCompleted, data.data.deaths],
        },
        ],
        }}
        options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${data.stateCode}` },
        }}
        />
    ) 

    return (
        <div className="lineCont">
            {barChart2}
        </div>
    )
}

export default BarChart2