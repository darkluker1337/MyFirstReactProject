import React from "react";
import './gallery.css'
function Gallery(){
    return(
        <div className="gallery">
            <img src={require("./img1.png")}  alt="event 1" />
            <img src={require("./img2.png")}  alt="event 2" />
            <img src={require("./img3.png")}  alt="event 3" />
        </div>
    )
}

export default Gallery