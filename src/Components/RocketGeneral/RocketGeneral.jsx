import React from 'react';
import './RocketGeneral.css'
import { gql,useQuery } from '@apollo/client';



const GET_ROCKET_QUERY =  gql`
query GET_ROCKET_QUERY($varijabla: ID!){
    rocket(id: $varijabla) {
      name
      mass {
        kg
      }
      id
      boosters
      cost_per_launch
      diameter {
        meters
      }
      success_rate_pct
      payload_weights {
        kg
      }
      description
    }
  }
  
`;
let varijabla = window.location.hash;
varijabla = varijabla.replace('#','');

export default function RocketGeneral() {
  const { data, loading, error } = useQuery(GET_ROCKET_QUERY , {
    variables: {varijabla}
});
if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;
console.log(data.rocket.name);

  return (
    <div className='container'>
        <h1 className='name-container'>{data.rocket.name}</h1>
            <p className='description'>{data.rocket.description}</p>
            <div className='info-container'>
              <p className='mass'>Weight: {data.rocket.mass.kg}kg</p>
              <p className='srate'>Success rate:{data.rocket.success_rate_pct}%</p>
            </div>
    </div>
  )};

