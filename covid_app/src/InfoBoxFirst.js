import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core";
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CountUp from 'react-countup'

function InfoBoxFirst({ title, cases, total, type}) {
    return (
        <Card className="infoBox">
                <CardMedia image="/CardMedia.jpg" component="img" alt="covidimg" height="140" className={type}/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={type}>
                Covid-19
                </Typography>
                <Typography className="infoBoxTitle" color="textSecondary">
                {title}
                </Typography>
                <h2 className="infoBoxCases">
                <CountUp start={0} end={cases} duration={2} separator="," />
                </h2>
                <Typography className="infoBoxTotal">
                <CountUp start={0} end={total} duration={2} separator="," />
                Total
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" className="moreInfo"><a href="https://en.wikipedia.org/wiki/COVID-19" >More Info </a> </Button>
                <Button size="small" className="moreInfo"><a href="https://www.reddit.com/t/coronavirus/" > Share Info </a></Button>
                </CardActions>
        </Card>
    )
}

export default InfoBoxFirst


