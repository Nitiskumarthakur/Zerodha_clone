import React from "react";

function LeftSection({
    imageURL,
    P_name,
    P_paragraph,
    try_demo,
    learn_more,
    play_Store,
    app_Store,
}){
    return(
        <div>
           
        <div className="container">
            <div className="row p-5">
                <div className="col-12 col-md-6">
                    <img src={imageURL} alt="img" style={{width:"85%", height:"95%"}}/>
                </div>
                <div className="col-12 col-md-6">
                    <h3>{P_name}</h3>
                    <p>{P_paragraph}</p>
                   
                        <a href="#">{try_demo}</a> 
                    <a href="#" style={{marginLeft:"20%"}}>{learn_more}</a>
                  
                    <br></br><br></br>
                    <a href="#"><img src={play_Store} alt="img" /></a>
                    <a href="#" style={{marginLeft:"5%"}}><img src={app_Store} alt="img" /></a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LeftSection;