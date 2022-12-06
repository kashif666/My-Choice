function RightSideChild(props) {
    return ( 
        <div> 
        <div>
            <h5 style={{backgroundColor:"white"}}>Quaid-e-Azam Tropy</h5>
            <hr/>
            {
               props.setData.map((data)=>(
                <div style={{border:"1px solid black",marginBottom:"20px",backgroundColor:"white"}}>
                    <h5 style={{color:"red"}}>{data.title}</h5>
                    <p><b>{data.name1}<span style={{float:"right"}}><sub>({data.overs1})&nbsp;</sub>{data.score1}/{data.wickets1}</span></b></p>
                    <p style={{marginTop:"0px"}}><b>{data.name2}<span style={{float:"right"}}><sub>({data.overs2})&nbsp;</sub>{data.score2}/{data.wickets2}</span></b></p>
                    <small>{data.won}</small> 
                
                </div>
               ))
            }
        </div>
        </div>
    );
}

export default RightSideChild;