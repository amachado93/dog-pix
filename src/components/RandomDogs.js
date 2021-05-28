import React from 'react';

const RandomDogs = (props) => {
    return(
        <>
            <h2>Cute Doge</h2>
            { props.dogPic ? <img src={props.dogPic} alt="cute dog" /> : null }
        </>
    )
}

export default RandomDogs;