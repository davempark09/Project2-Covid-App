import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'



function Chart() {
    const [countryDailyCases, setCountryDailyCases] = useState([])
    const [countryDailyDeaths, setCountryDailyDeaths] = useState([])
    const [countryDailyRecovered, setCountryDailyRecovered] = useState([])

    useEffect(() => {
        const fetchData = async () => {

            await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
            .then ((response) => response.json())
            .then ((data) => {
                setCountryDailyCases(data.cases)
                setCountryDailyDeaths(data.deaths)
                setCountryDailyRecovered(data.recovered)
            })
            }
            fetchData()
        },[])
        const newDates = Object.keys(countryDailyCases)
        const newCases = Object.values(countryDailyCases)
        const newDeaths = Object.values(countryDailyDeaths)
        const newRecovered = Object.values(countryDailyRecovered)
        





            const lineChart = {
                labels: [ newDates[0], newDates[50], newDates[100], newDates[150], newDates[200], newDates[250], newDates[300], newDates[350], newDates[400], newDates[450], newDates[500], newDates[550], newDates[560] ],
                datasets: [
                {
                    label: 'Cases',
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: 'blue',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [ newCases[0], newCases[50], newCases[100], newCases[150], newCases[200], newCases[250], newCases[300], newCases[350], newCases[400], newCases[450], newCases[500], newCases[550], newCases[560] ] 
                },
                {
                    label: 'Deaths',
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: 'Red',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [ newDeaths[0], newDeaths[50], newDeaths[100], newDeaths[150], newDeaths[200], newDeaths[250],newDeaths[300], newDeaths[350], newDeaths[400], newDeaths[450], newDeaths[500], newDeaths[550], newDeaths[560] ] 
                },
                {
                    label: 'Recovered',
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: 'Green',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [ newRecovered[0], newRecovered[50], newRecovered[100], newRecovered[150], newRecovered[200], newRecovered[250],newRecovered[300], newRecovered[350], newRecovered[400], newRecovered[450], newRecovered[500], newRecovered[550], newRecovered[560] ] 
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

export default Chart
