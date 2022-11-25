import { useState } from "react";
import RightSideChild from "./RightSideChild";

function RightSide() {
    const [data, setData]= useState([
        {
            title:"NOt Covered live", name1:"Sindh", overs1:"20 over", score1:"190",wickets1:"4",
             name2:"Blochistan", overs2:"19.5 over", score2:"200",wickets2:"2",won:"Blochistan won the match"
        },
        {
            title:"NOt Covered live", name1:"ENG", overs1:"100 over", score1:"510",wickets1:"4",
             name2:"LIONS", overs2:"77 over", score2:"412",wickets2:"9",won:"Day 2 -ENG LIONS trail by 89 runs "
        },
        


    ])
    return ( 
        <div>
             <RightSideChild setData={data}/>
        </div>
     );
}

export default RightSide;