import React from 'react';
import { db } from '../init-firebase';
import { ref, set, onValue } from "firebase/database";



const starCountRef = ref(db, 'comments/');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  CommentSection(data);
});


// export default function CommentSection(data) {
    
//     for(let i = 0;i < data.length ; i++) {
//    return  (
     
//         <div className='comments-container'>
           
//         </div>
    
//     )
//   } 
     

function CommentSection(data) {
    for(let i = 0; i <= 3; i++) {
        for(let j = 0; j <= 3; j++) {
            console.log(data)
    return ( 
        <div>
            {data.comment}
        </div>
     );
}}
}
export default CommentSection;

     
