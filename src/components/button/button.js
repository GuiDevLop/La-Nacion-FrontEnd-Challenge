import React from "react";

function Button({ classname, testid, img, imgtop, logo, text }) {
    return(
        <button className={classname} data-testid={testid}>
            { logo && imgtop && <img className={img} src={logo} alt="img"></img> }
            {text}
            { logo && !imgtop && <img className={img} src={logo} alt="img"></img> }
        </button>
    );
}

export default Button;
