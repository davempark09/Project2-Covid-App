import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'



function Chart2() {
    const [dailyData, setDailyData] = useState([]);


    useEffect(() => {
        const fetchData2 = async () => {

            await fetch('https://api.covidactnow.org/v2/country/US.timeseries.json?apiKey=2cf3054f5c1243c5a8621daf03f129e6')
            .then ((response) => response.json())
            .then ((data) => {
            setDailyData(data.actualsTimeseries)
            })
            }
            fetchData2()
        },[])

        const newDates = dailyData.map(obj => obj.date)
        const newCases = dailyData.map(obj => obj.cases)
        const newVaccine = dailyData.map(obj => obj.vaccinationsCompleted)
        const newDeaths = dailyData.map(obj => obj.deaths)

        const lineChart = {
            labels: [ newDates[0], newDates[50], newDates[100], newDates[150], newDates[200], newDates[250], newDates[300], newDates[350], newDates[400], newDates[450], newDates[500], newDates[550], newDates[600]],
            datasets: [
            {
                label: 'Cases',
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'blue',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [ newCases[0], newCases[50], newCases[100], newCases[150], newCases[200], newCases[250], newCases[300], newCases[350], newCases[400], newCases[450], newCases[500], newCases[550], newCases[600] ] 
            },
            {
                label: 'Vaccinations Completed',
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'green',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [ newVaccine[0], newVaccine[50], newVaccine[100], newVaccine[150], newVaccine[200], newVaccine[250], newVaccine[300], newVaccine[350], newVaccine[400], newVaccine[450], newVaccine[500], newVaccine[550], newVaccine[600] ] 
            },
            {
                label: 'Deaths',
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'Red',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [ newDeaths[0], newDeaths[50], newDeaths[100], newDeaths[150], newDeaths[200], newDeaths[250], newDeaths[300], newDeaths[350], newDeaths[400], newDeaths[450], newDeaths[500], newDeaths[550], newDeaths[600] ] 
            }
            ]}



    return (
        <div className="lineCont">
                <Line
                data={lineChart}
                options={{
                    title:{
                    display:true,
                    text:'People',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }}
                />
        </div> 
    )
}

export default Chart2




