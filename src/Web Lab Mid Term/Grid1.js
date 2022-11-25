import Content from "./Content";
import LeftSideBar from "./LeftSideBar";
import RightSide from "./RightSide";

function Grid1() {
    return (

        <div className="row" style={{marginLeft:"30px"}}>
            <div className="col-md-2" style={{backgroundColor:"lightgrey",marginTop: "50px",borderRadius:"5px"}}>
                
            <RightSide/>
                
            </div>
            <div className=" col-md-4" style={{}}>
                <Content/>
            </div>


            <div className="col-md-5" style={{borderRadius:"5px",borderRadius:"10px",marginLeft:"80px"}}>
                <LeftSideBar/>
                
            </div>



        </div>


    );
}

export default Grid1;