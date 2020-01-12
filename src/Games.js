  
import React from 'react'
import Modal from './tooltip2';
import Axios from 'axios';
import { Card, Typography } from '@material-ui/core';

export default function Games() {

    const [data , setdata] = React.useState([]);
    const [hTeam , setHteam] = React.useState({});
    const [vTeam , setVteam] = React.useState({});
    const [open, setOpen] = React.useState(false);
    const [ai , setAi] = React.useState({});


    const handleHteam = (e)=>{
        setHteam(e);
    }

    const handleVteam = (e)=>{
        setVteam(e);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAi = (e) =>{
        setAi(e)
    }

    React.useEffect(()=>{
        fetch('https://www.balldontlie.io/api/v1/games?per_page=100')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json.data,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });
    },[])

      const toDate = (x)=>{
        let date = new Date(x);
        return date.toUTCString();
      }

    if(data.length!==0){
    return (
        <React.Fragment>
            <Modal open={open} handleClose={handleClose} home_team={hTeam} visitor_team={vTeam} all={ai} />
            <Card  style={{marginTop: 10 , marginBottom : 20}}  >
                {
                    data.map(eachTeam=>{
                        return(
                            <div key={eachTeam.id} style={{cursor : "pointers"}}  
                                onClick={
                                    ()=>{
                                        handleHteam(eachTeam.home_team);
                                        handleVteam(eachTeam.visitor_team);
                                        handleAi(eachTeam);
                                        handleClickOpen();
                                    }
                                }
                            >
                                    <Typography component="h3" variant="h6">
                                       {
                                          toDate(eachTeam.date).slice(0,16)
                                       }
                                    </Typography> 
                                    <Typography>
                                        {eachTeam.status}
                                    </Typography>
                            </div> 
                        )
                    })
                }
            </Card>
            

        </React.Fragment>
    )
    }
    else{
        return(
             <React.Fragment>
                <Typography variant="h2" component="h5">
                    Loading...
                </Typography>
            </React.Fragment>
        )
    }
}   