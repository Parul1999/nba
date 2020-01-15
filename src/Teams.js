import React from 'react';
import './style.css'
import {
    Card, CardText, CardBody,
    CardTitle
  } from 'reactstrap';
  import Tool from './tooltip';
  import { Paper, Grid, Typography, Tooltip } from '@material-ui/core';
class Teams extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }
    

   
    componentDidMount() {

        fetch('https://www.balldontlie.io/api/v1/teams')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json.data,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return (
                <Paper><Grid team lg={3} style={{ marginTop: "10 auto" }}>
            <Typography style={{ margin:"40px 40px 40px 40px", textAlign: "center" }} variant="h2">
                Loading...
            </Typography>
        </Grid></Paper> )
           
        return ( <Paper>
            <div className="Team">
              
                    {items.map(item => ( 
  
                    <Card key={item.id}>
                         <Tool
                                team_name={item.full_name} 
                                city={item.city}
                                division={item.division}
                                conference={item.conference}
                                >
                    <CardBody>
                      <CardTitle id="first" >{item.name}</CardTitle>
                      <CardText id="second">{item.city}</CardText>
                    </CardBody> </Tool>
                  </Card>
                  
                  ))}
                
            </div>
            </Paper>
        );

    }

}

export default Teams;