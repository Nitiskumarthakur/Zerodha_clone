import React from "react";

function RightSection({
    imageURL,
    P_name,
    P_paragraph,
    learn_more,
}){
    return(
        <div className="container">
            <div className="row p-5">
                <div className="col-12 col-md-6" style={{marginTop:"7rem"}}>
                    <h3>{P_name}</h3>
                    <p>{P_paragraph}</p>
                    <a href="#">{learn_more}</a>
                </div>
                <div className="col-12 col-md-6">
                    <img src={imageURL} alt="img" style={{width:"85%", }}/>
                </div>
            </div>
        </div>
    )
}

export default RightSection;