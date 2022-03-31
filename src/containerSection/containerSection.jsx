import React from "react";
import Description from "./description/description";
import Gallery from "./gallery/gallery";

function ContainerSection(){
    return(
        <div className="container">
            <h2>About the event</h2>
            <Description/>
            <Gallery/>
        </div>
    )
}

export default ContainerSection