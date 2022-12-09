import { useState } from "react";
import { Link } from "react-router-dom";

function DashboardContent() {
    const [player, setPlayer] = useState("admin")
    const [data, setData] = useState([

        { name: "View All Institute", count: 18, alt: "doctor icon" },
        { name: "All Principals", count: 18, alt: "data entery icon" },
        { name: "Delete Institute", count: 8, alt: "patient icon" },
        { name: "Delete principal", count: 10, alt: "doctor icon" },
        { name: "Add Institute", count: 10, alt: "data entery icon" },
        { name: "Add Principal", count: 8, alt: "patient icon" },

    ])
    return (
        <div>
            <div style={{ marginTop: 20 }}><b style={{ fontSize: 30 }}>Dashboard </b><sub>{player}</sub></div>
        
            <div style={{ display: "flex", flexWrap: "wrap", width: "75vw",marginLeft:"22vw",}}>

                {
                    data.map((data) => (
                        <div style={{
                            width: "18vw", height: "22vh", borderRadius: 10,
                            boxShadow: "3px  3px  5px rgb(50,50,50,0.7)",
                            margin: "20px 0 0 50px",
                            borderTop: "1px solid black",
                            borderLeft: "1px solid black",
                        }}>

                            <center style={{ marginTop: 30 }}> <h4>{data.name}</h4>
                                <h6> {data.count}</h6>
                                <Link><button class="btn btn-outline-dark" style={{ borderRadius: 7, marginTop: 10 }}>View</button></Link>
                            </center>

                        </div>
                    ))
                }
            
            
            </div>

        </div>
    );
}
export default DashboardContent;