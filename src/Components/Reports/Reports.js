import React, { useEffect, useState } from "react";
import '../../Styles/Reports.css'
import Header from "./Subs/Header";
import Activities_cur from "./Subs/Activities_cur";
import Activities_past from "./Subs/Activities_past";
import Keyrisks from "./Subs/Keyrisks";
import { useLocation } from "react-router-dom";
import axios from "axios";


export default function Reports() {
    const { state } = useLocation();
    const name = state && state.name;
    console.log("report name",name);
    const [data, setData] = useState({})

   

    useEffect(() => {
        axios.get(`http://localhost:3001/reports/${name}`)
        .then((response) => {
            console.log(response);
  
            setData(response.data);
            console.log(data.activitiesPlannedNextWeek);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    },[name])
   
    return (
        <>
            <div className="contains">
                <div className="header">
                    <Header Data={data} />
                </div>


                <div className="grid">
                    <Activities_cur Data={data} />
                    <Activities_past Data={data} />
                </div>
                <div>
                    <Keyrisks Data={data}/>
                </div>

            </div>

        </>
    )
}