import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
//- Add new note to an array.
  const [notes, setNotes] = useState([])

  function addNote(inputNote) {
    setNotes((prevNotes) => {
      return ([...prevNotes, inputNote])
    })
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      // filter out the item that needs deletion.
      return (prevNotes.filter((obj, index) => {
        return (index !== id)
      }))
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

{/* Take array and render seperate Note components for each item. */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onCheked={deleteNote}
          />)
      })}


      <Footer />
    </div>
  );
}

export default App;
