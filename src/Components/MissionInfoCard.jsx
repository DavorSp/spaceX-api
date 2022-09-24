import React, { useState, useEffect } from 'react';
import { gql, useQuery } from "@apollo/client";
import "./MissionInfoCard.css";
import RocketGeneral from "./RocketGeneral/RocketGeneral";
import RocketInfo from "./RocketInfo/RocketInfo";



  



// const GET_ROCKET_QUERY = gql`
// {
    //     rocket(id: $varijabla) {
        //       name
        //       mass {
            //         kg
            //       }
            //       id
            //       boosters
            //       cost_per_launch
            //       diameter {
                //         meters
                //       }
                //       success_rate_pct
//       payload_weights {
//         kg
//       }
//     }
//   }

// `;
// id: $varijabla
// const GET_ROCKET_QUERY =  gql`
// query GET_ROCKET_QUERY($varijabla: ID!){
//     rocket(id: $varijabla) {
//       name
//       mass {
//         kg
//       }
//       id
//       boosters
//       cost_per_launch
//       diameter {
//         meters
//       }
//       success_rate_pct
//       payload_weights {
//         kg
//       }
//     }
//   }
  
// `;


// let varijabla = window.location.hash;
// varijabla = varijabla.replace('#','');
// console.log(varijabla);





export default function MissionInfoCard() {
    // const { data, loading, error } = useQuery(GET_ROCKET_QUERY , {
    //     variables: {varijabla}
    // });
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error </p>;



    
return (
    <div >
    <RocketGeneral></RocketGeneral>
    <RocketInfo></RocketInfo>
    </div>
  );

  
}
