import React, {useState, useEffect} from 'react';
import { MenuItem, FormControl, Select, Card, CardContent } from "@material-ui/core";
import InfoBoxFirst from './InfoBoxFirst';
import CountUp from 'react-countup'
import Chart2 from './Chart2';
import BarChart2 from './Bar2';


function SecondContent() {

    const [states, setStates] = useState([]);
    const [init, setInit] = useState('usa');
    const [stateInfo, setStateInfo] = useState([]);
    const [statePop, setStatePop] = useState([]);

    useEffect(() => {
        fetch('https://api.covidactnow.org/v2/country/US.json?apiKey=2cf3054f5c1243c5a8621daf03f129e6' )
        .then(response => response.json())
        .then(data => {
            setStateInfo(data.actuals);
            setStatePop(data.population);
        })
    }, [])

    useEffect(() => {
    const getStatesData = async () => {
        await fetch ("https://api.covidactnow.org/v2/states.json?apiKey=2cf3054f5c1243c5a8621daf03f129e6")
        .then ((response) => response.json())
        .then ((data) => {
            const states = data.map((state) => (
                {
                    name: state.state,
                    value: state.state,
                }));
                setStates(states);
        })
    }
    getStatesData();
    }, []);


    const onStateChange = async (event) => {
        const stateCode = event.target.value;
        
        const url = stateCode === 'usa' ? 'https://api.covidactnow.org/v2/country/US.json?apiKey=2cf3054f5c1243c5a8621daf03f129e6' 
        : `https://api.covidactnow.org/v2/state/${stateCode}.json?apiKey=2cf3054f5c1243c5a8621daf03f129e6`

        await fetch(url)
        .then (response => response.json())
        .then(data => {
            setInit(stateCode);
            setStateInfo(data.actuals);
            setStatePop(data.population);
        })
    };

    return (
        <div className="service">
            <div className="serviceHeader">
            <h1>COVID-19 TRACKER (States)</h1>
            <FormControl className="Dropdown">
                <Select varient="outlined" onChange={onStateChange} value={init}>
                    <MenuItem value="usa">USA</MenuItem>
                    {states.map((state) => (
                    <MenuItem value={state.value}>{state.name}</MenuItem>))}
                </Select>
            </FormControl>
            </div>
            <div className="stats">
                <InfoBoxFirst title="Active Cases" type="cases" cases={stateInfo.newCases} total={stateInfo.cases}/>
                <InfoBoxFirst title="Vaccinations" type="recovered" cases={stateInfo.vaccinesAdministered} total={stateInfo.vaccinesDistributed}/> 
                <InfoBoxFirst title="Deaths" type="deaths" cases={stateInfo.newDeaths} total={stateInfo.deaths}/>
            </div>
            <div className="visuals" >
                    <Card className="visualsCards">
                    <CardContent>
                    <h2>Current Population:  <CountUp start={0} end={statePop} duration={2} separator="," /></h2>
                    {init === "usa" ?  <Chart2 /> : <BarChart2 data={stateInfo} stateCode={init}/>}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default SecondContent


