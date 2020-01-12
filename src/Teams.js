import React from 'react';
import './style2.css'
import {
    Card, CardText, CardBody,
    CardTitle
  } from 'reactstrap';
  import Tool from './tooltip';
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
            return <div>Loading...</div>;
           
        return ( 
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
            
        );

    }

}

export default Teams;