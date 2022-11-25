function ContentChild(props) {

    const handle=(id)=>{
         const update= props.setData.filter((ID)=>
        ID.id != id
         )
         props.cricket(update);
    }
    return (
        <div>
            {
                props.setData.map((data) => (
                    <div style={{height:"110vh",marginTop:"30px",width:"38vw"}}>
                        <div style={{ width: "100%", height: "60vh",backgroundColor:"", }}>
                            <img src={data.image1} style={{width:"100%", height:"100%",borderRadius:"5px"}} />
                        </div>
                        <div style={{backgroundColor:"black",color:"white", width:"100%", height:"20vh",borderRadius:"5px"}}>
                            <h5>{data.title1}</h5>
                            <p>{data.subtitle1}</p>
                            <button style={{float:"right",width:"100px"}} onClick={()=>handle(data.id)}>Delete</button>
                        </div>
                    
                    </div>
                ))
            }
        </div>
    );
}

export default ContentChild;