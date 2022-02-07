import React from 'react'
import { useState } from "react";

const Form = ({activeJot, onUpdateNote, addDate, setActiveAddBtn}) => {

    if (!activeJot) {
        setActiveAddBtn(true)
        return <div>No Active Note</div>;

    } 

    if (!activeJot.title && !activeJot.text) {
        setActiveAddBtn(false)
    }

    else {
        setActiveAddBtn(true)
    }

    const onEditField = (key, value) => {
        onUpdateNote({
          ...activeJot,
          [key]: value,
          dateModified: addDate(),
          fullModifiedDate: new Date()
        });

    }; 

    return (
        <div className="form">
            <input className='form-title' type="text" id="title" value={activeJot.title} onChange={(e) => onEditField('title', e.target.value)} placeholder="New Jot" />
            <textarea className='form-text' name="" id="body" cols="30" rows="10" value={activeJot.text} onChange={(e) => onEditField('text', e.target.value)} placeholder="Write a Jot"></textarea>
        </div>
    )
}

export default Form
