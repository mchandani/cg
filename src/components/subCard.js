import React from 'react';

const Card = (props) => {

    function onsubmit(){
        fetch(`http://localhost:3001/notes/file/${props.link}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            window.open(data.url, 'blank')
        })
    }

    return (
        <div className=" d-flex flex-column col col-2 p-2 m-2 rounded" style={{background: "#fff"}}>
            <h3 className="text-center">{props.name}</h3>
            <div className="align-items-center justify-content-center">
            <button className="btn btn-primary" onClick={onsubmit}>Download</button>
            </div>
        </div>
    )
}

export default Card