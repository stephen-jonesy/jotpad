import React, { useState } from "react";
import './App.css';
import Header from './components/Header.js'
import Form from './components/Form.js'
import Sidebar from './components/Sidebar.js'

function App() {
  const [jotsArray, setJotsArray] = useState([
    {id: 0, title: "title1", text: "text", dateModified: "01/01/2021", fullModifiedDate: new Date()},
    {id: 1, title: "title2", text: "text", dateModified: "03/03/2021", fullModifiedDate: new Date()},
    {id: 2, title: "title3", text: "text", dateModified: "02/02/2021", fullModifiedDate: new Date()}
  ])

  const [counter, setCounter] = useState(jotsArray.length +1)

  const [activeJot, setActiveJot] = useState(0)

  const [activeAddBtn, setActiveAddBtn] = useState(true)

  const addJot = () => {
    if(activeAddBtn === true){
      const id = counter;
      const newJot = {id, title: "", text: "", dateModified: addDate(), fullModifiedDate: new Date()};
      setJotsArray(jotsArray => [...jotsArray, newJot]);
      setActiveJot(newJot.id);
      setCounter(counter +1);
    }
  }

  const toggleActiveJot = (id) => {
    setJotsArray(jotsArray.filter((jot)=>(jot.title || jot.text)))
    setActiveJot(id)
    console.log(counter)

  }

  const addDate = () => {
    //https://stackoverflow.com/questions/22850929/most-efficient-way-to-get-the-dates-for-the-past-7-days
    const date = new Date();
    return date.getDate() + "/" + parseInt(date.getMonth()+1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
  }

  const removeJot = (id) => {
    function getIndex(id) {
      return jotsArray.findIndex(jot => jot.id === id);
    };
    function activeJotConditions() {

      if(id === jotsArray[0].id) {
        return jotsArray[1].id
      }

      if(id !== jotsArray[0].id) {
        return jotsArray[getIndex(id)-1].id
      }
    }
    setJotsArray(jotsArray.filter((jot)=>(jot.id !== id)));

    setActiveJot( activeJotConditions() );
    console.log(jotsArray)

  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = jotsArray.map((jot) => {
      if (jot.id === updatedNote.id) {
        return updatedNote;
      }
      return jot;
    });

    setJotsArray(updatedNotesArr);
  };

  const getActiveNote = () => {
    return jotsArray.find(({id}) => id === activeJot);

  };

  /*
  const sortByDate = () => {
    const sorted = jotsArray.sort((a, b) => {
      return new Date(...b.dateModified.split('/').reverse()) - new Date(...a.dateModified.split('/').reverse())
    });
    setActiveJot(sorted);

  };
  */

  return (
    <div className="App">
      <div className="app-body">
        <Sidebar jotsArray={jotsArray} activeJot={activeJot} toggleActiveJot={toggleActiveJot} addJot={addJot} removeJot={removeJot} activeAddBtn={activeAddBtn} />
        <Form activeJot={getActiveNote()} onUpdateNote={onUpdateNote} addDate={addDate} setActiveAddBtn={setActiveAddBtn}/>
      </div>
    </div>
  );
}

export default App;
