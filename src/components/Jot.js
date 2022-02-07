import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Jot = ({jot, toggleActiveJot, activeJot, removeJot}) => {

    const showTitle = () => {
        if(jot.title.length < 16){
            return jot.title
        }
        else {
            return jot.title.substring(0, 16) + '...'
        }
    }

    const clickHandler = (e) => {
        console.log(e.target.className)
        if(e.target.className === 'jot') {
            toggleActiveJot(jot.id)
        }
        if(e.target.className === 'remove-btn remove-btn-active') {
            removeJot(jot.id)
        }
    }

    return (
        <>
            <div onClick={(e) => clickHandler(e)}  className={activeJot === jot.id ? 'jot active': 'jot'}><div className='jot-title'>{!jot.title ? 'New Jot' : showTitle()}</div><div className='jot-date'>{jot.dateModified}</div> <button className={activeJot === jot.id ? 'remove-btn remove-btn-active': 'remove-btn'}><FontAwesomeIcon icon={faEllipsisV}  className='font-ellipsis'/></button>
            </div>
        </>
    )
}

export default Jot
