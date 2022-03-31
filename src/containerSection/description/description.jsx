import React from "react";
import DescLeft from "./desc/DescLeft";
import DescRight from "./desc/DescRight";
import './description.css'

function Description(){
    return(
        <div className="description">
                <DescLeft/>
                <DescRight/>
        </div>
    )
}

export default Description