import React, {useState, useEffect} from 'react';
import { MenuItem, FormControl, Select, Card, CardContent } from "@material-ui/core";
import InfoBoxFirst from './InfoBoxFirst';
import CountUp from 'react-countup';
import Chart from './Chart';
import BarChart from './Bar';


function FirstContent() {

    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('worldwide');
    const [countryInfo, setCountryInfo] = useState([]);


    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all' )
        .then(response => response.json())
        .then(data => {
            setCountryInfo(data);
        })
    }, [])

    useEffect(() => {
    const getCountriesData = async () => {
        await fetch ("https://disease.sh/v3/covid-19/countries")
        .then ((response) => response.json())
        .then ((data) => {
            const countries = data.map((country) => (
                {
                    name: country.country,
                    value: country.countryInfo.iso2,
                }));
                setCountries(countries);
        })
    }

    getCountriesData();
    }, []);


    const onCountryChange = async (event) => {
        const countryCode = event.target.value;
        
        const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' 
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`

        await fetch(url)
        .then (response => response.json())
        .then(data => {
            setCountry(countryCode);
            setCountryInfo(data);
        })
    };
    return (
        <div className="service">
            <div className="serviceHeader">
            <h1>COVID-19 TRACKER (Countries)</h1>
            <FormControl className="Dropdown">
                <Select varient="outlined" onChange={onCountryChange} value={country}>
                    <MenuItem value="worldwide">Worldwide</MenuItem>
                    {countries.map((country) => (
                    <MenuItem value={country.value}>{country.name}</MenuItem>))}
                </Select>
            </FormControl>
            </div>
            <div className="stats">
                <InfoBoxFirst title="Active Cases" cases={countryInfo.todayCases} total={countryInfo.cases} type="cases"/>
                <InfoBoxFirst title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} type="recovered"/>
                <InfoBoxFirst title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} type="deaths" />
            </div>
            <div className="visuals">
                <Card className="visualsCards">
                    <CardContent>
                        <h2>Current Population: <CountUp start={0} end={countryInfo.population} duration={2} separator="," /></h2>
                        {country === "worldwide" ?  <Chart /> : <BarChart data={countryInfo} stateCode={country}/>}
                    </CardContent>
                </Card>
            </div>
        </div>


    )
}

export default FirstContent

