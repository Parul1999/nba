import React, { useState } from 'react';
import { Paper, Grid, Typography, Tooltip } from '@material-ui/core';
import Modal from './tooltip2';
import axios from "axios";
import './style2.css';

function Load() 
{
    return (
        <Grid team lg={3} style={{ marginTop: "2 auto" }}>
            <Typography style={{ margin:"20px 20px 20px 20px", textAlign: "center" }} variant="h2">
                Loading...
            </Typography>
        </Grid>
    )
}

function Games() 
{
    const [data, setData] = useState(["Loading"]);

    let [modalOpen, setModalOpen] = useState(() => {
        let temp = {};
        for (let i=0; i<100; i++)
            temp = {...temp, [i]: false};
        return temp;
    });



    function openModal(e,idx)
     {
        e.stopPropagation();
        console.log("openModal");
        const temp = {...modalOpen, [idx]: true};
        setModalOpen(temp);
    }
    
    function closeModal(idx) 
    {
        console.log("closeModal");
        const temp = {...modalOpen, [idx]: false};
        setModalOpen(temp);
    }

    if (data[0] == "Loading")
        axios.get("https://www.balldontlie.io/api/v1/games?per_page=100")
            .then(res => setData(res.data.data));
    return (
        <Paper style={{marginTop:"1%"}}>
            <Grid container wrap="wrap" style={{ textAlign: "center" }} spacing={2}>
                {
                    data[0] == "Loading" ? <Load /> :
                        data.map((game, idx) => {
                            return (
                                <Grid team md={4} lg={3} xs={12} key={idx} onClick={(e) => {return openModal(e,idx)}}>
                                    <div className="Team">
                
        
                <ul id="item">
                 <li id="first" key={game.id} style={{cursor : "pointers"}} >
                
                

                
{ 
Array[0] = "Sun",
Array[1] = "Mon",
Array[2] = "Tues",
Array[3] = "Wed",
Array[4] = "Thur",
Array[5] = "Fri",
Array[6] = "Sat",               
Array[new Date(game.date).getDay()+1]
}
                {","}
                {new Date(game.date).getDate()+1}
{
Array[0] = "January",
Array[1] = "February",
Array[2] = "March",
Array[3] = "April",
Array[4] = "May",
Array[5] = "June",    
Array[6] = "July",
Array[7] = "August",
Array[8] = "September",
Array[9] = "October",
Array[10] = "November",
Array[11] = "December",               
Array[new Date(game.date).getMonth()]
}                    
               {""}{""}
               {new Date(game.date).getFullYear()}
               </li>
              
               <br/> <li id="second">
               {new Date(game.date).getHours()}
               {":"}
               {new Date(game.date).getMinutes()}
               {" pm ET"}
                
                </li>
                 </ul>
            
        </div>

                                    <Modal data={game} open={modalOpen[idx]} close={() => {return closeModal(idx)}}/>
                                </Grid>
                            );
                        })
                }
            </Grid>
        </Paper>
    )
}

export default Games;