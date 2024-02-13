import React from "react";


function Note(props) {
    return(
<div className="note">
<h>{props.title}</h>
<p>{props.content}</p>
</div>

    );
}

export default Note;