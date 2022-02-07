import React from 'react';
import Jot from './Jot.js';

//https://stackoverflow.com/questions/43572436/sort-an-array-of-objects-in-react-and-render-them


const Jotlist = ({jotsArray, activeJot, toggleActiveJot, removeJot, sortByDate}) => {

    const sortArr = () => {
        jotsArray.sort((a, b) => b.fullModifiedDate - a.fullModifiedDate)
        //jotsArray.sort((a, b) => new Date(...b.dateModified.split('/')) -  new Date(...a.dateModified.split('/')))
        return jotsArray
    }
    
    return (
        <div className='jot-list'> 
            {sortArr().map((jot) => <Jot key={jot.id} jot={jot} toggleActiveJot={toggleActiveJot} removeJot={removeJot} activeJot={activeJot}/>)}
        </div>
    )
}

export default Jotlist
