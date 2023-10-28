import React, { useState } from "react";

function CreateArea(props) {

//- Create a constant that keeps track of the title and content.
  const [inputNote, setInputNotes] = useState({
    title: "",
    content: ""
  })

  function handleEvent(event) {
   const {name, value} = event.target
   setInputNotes(prev => { 
    return({...prev, [name]: value})}
    )
  }


  function submitNote(event) {
    props.onAdd(inputNote);
    // Clear the Create Area.
    setInputNotes({
      title: "",
      content: ""
    })
    // Prevent from reloud.
    event.preventDefault(); 
  }

  return (
    <div>
      <form >
        <input onChange={handleEvent} name="title" placeholder="Title" value={inputNote.title}/>
        <textarea onChange={handleEvent} name="content" placeholder="Take a note..." rows="3" value={inputNote.content}/>
        <button
        onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
