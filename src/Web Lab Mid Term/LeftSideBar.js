import { useState } from "react";
import eng from "../eng.webp";
import sri from "../sri.webp";
import LeftSideBarChild from "./LeftSideBarChild";

function LeftSideBar() {
    const [data, upData]=useState([
        { 
            id:"2",
            image1:{sri}, title1:"SLC invites ICC Anti-Corruption Unit to investigate match-fixing allegations made in parliament",
            subtitle1:"MP Nalin Bandara claimed that the first Sri Lanka-Pakistan Test in July had been fixed, and said the board had become a gambling den.",
            
            

        },
        { 
            id:"1",
            image1:{eng}, title1:<h5>"Jofra Archer on return to England action: A small day but a big day"</h5>,
            subtitle1:"Fast bowler promises caution in comeback but plans to commit to all international formats",
           
        },
      
        
    ])
    return (  
        <div>
        <LeftSideBarChild setData={data} cricket={upData}/>
        </div>
    );
}

export default LeftSideBar;