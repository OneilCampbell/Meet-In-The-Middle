import React from "react";
import "./style.css";

const LabelTag = (props) => {
    return(
        <div className="result-tag">{props.content}</div>
    )
}

export default LabelTag;