import React from 'react';

const Header = (props) => {
    return(
        <>
            <h1>My Dog Website</h1>
            <nav>
                <span onClick={() => props.setView('list')}>All Dog Breeds</span>
                <span onClick={() => props.setView('random')}>Random Dog Pic</span>
            </nav>
        </>
    )
}

export default Header;