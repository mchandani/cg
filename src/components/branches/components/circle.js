import React from 'react';

export default function circle(text, link, ID) {
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
    // const radius = rand(150,350);
    // const marg = rand(10,20);
    const radius = 200;
    const marg = 10;
    return (
        <a className="p-2 btn btn-info" id={ID} style={{
            display: "block",
            display:'flex',
            // borderRadius: "100%",
            height:`${radius}px`,
            width:`${radius}px`,
            margin:`${marg}px`,
            color:"white",
            textDecoration:"none",
            justifyContent:"center",
            alignItems:"center",
            textAlign:"center",
            fontWeight:"bold"
        }} href={link}
        >
            {text}
        </a>
    )
}