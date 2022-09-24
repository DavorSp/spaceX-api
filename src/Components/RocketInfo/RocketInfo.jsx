import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './RocketInfo.css';
import { db } from '../../init-firebase';
import { ref, set, onValue } from "firebase/database";
import CommentSection from '../CommentSection';


let rocketimg = '';

const GET_ROCKET_QUERY =  gql`
query GET_ROCKET_QUERY($varijabla: ID!){
    rocket(id: $varijabla) {
      id
      boosters
      cost_per_launch
      diameter {
        meters
      }
      payload_weights {
        kg
      }

    }
  }
  
`;




function writeUserData(comment, currentTime) {
  comment = (document.getElementById('textbox1').value);
  currentTime = new Date();
  console.log(currentTime);
  set(ref(db, 'comments/' + currentTime.getTime() ), {
    Comment: comment,

  });
}

let varijabla = window.location.hash;
varijabla = varijabla.replace('#','');

if(varijabla === 'falconheavy') {rocketimg = `https://www.spacex.com/static/images/content/fh_performance.jpg`}
if(varijabla === 'falcon9') {rocketimg = `https://inhabitat.com/wp-content/blogs.dir/1/files/2015/12/SpaceX-Falcon-9-launch-takeoff.jpg` }
if(varijabla === 'falcon1') {rocketimg = `https://i.ytimg.com/vi/TKKa4TaRm6c/maxresdefault.jpg`} 
export default function RocketInfo() {
  const { data, loading, error } = useQuery(GET_ROCKET_QUERY , {
    variables: {varijabla}
});
if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;

  return (
    <div className='container-bottom'>
      <div className='left-container'>
        <div>Boosters:{data.rocket.boosters}</div>
        <div>Diameter:{data.rocket.diameter.meters}</div>
        <div>Payload weight: {data.rocket.payload_weights.kg}</div>
      </div>
      <div className='middle-container'><img opacity={'75%'} width={'100%'} height={'100%'} src={rocketimg}/></div>
      <div className='right-container'>
        <form>
        <input name="textbox1" id="textbox1" type="text" />
        <input name="buttonExecute" onClick={writeUserData} type="button" value="Execute" />
      </form>
      <div>
    <CommentSection>
   
    </CommentSection>
    </div>
      
      </div>


    </div>
  

  )
}
