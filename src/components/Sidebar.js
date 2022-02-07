import React from 'react';
import Jotlist from './Jotlist.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({jotsArray, activeJot, toggleActiveJot, addJot, removeJot, activeAddBtn, sortByDate}) => {
    return (
        <div className="sidebar">
            <a href="index.html"><h1 className='title'>Jotpad</h1></a>
            <Jotlist jotsArray={jotsArray} activeJot={activeJot} toggleActiveJot={toggleActiveJot} removeJot={removeJot} />
            <button className='add-btn' onClick={addJot} style={ !activeAddBtn ?{color: 'rgba(255, 255, 255, 0.507)'} : {color: ''} }>Add a Jot <FontAwesomeIcon className='font-plus' icon={faPlusCircle} /></button>
        </div>
    )
}

export default Sidebar
