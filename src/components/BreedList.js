import React from 'react';

const BreedList = (props) => {

    return (
        <div>
            <button onClick={props.fetchDog}>Get a list of dogs</button>
            { props.dogs.map((dog, idx) => 
                <p onClick={() => props.fetchRandomDogPic(dog)} key={idx}>{ dog }</p>
            )}
        </div>
    )
}

export default BreedList;