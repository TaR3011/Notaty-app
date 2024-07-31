import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Dialog from "./components/Dialog";
import Notes from "./components/Notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", contents: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, [notes]);

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/notes");
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleAddNote = async () => {
    try {
      await axios.post("http://localhost:3000/notes", newNote);
      fetchNotes();
      setNewNote({ title: "", contents: "" });
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Notaty App</h1>
      <button onClick={() => setIsModalOpen(true)} className="btn add-button">
        إضافة ملاحظة
      </button>

      <Dialog
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onClick={handleAddNote}
      >
        <h2>إضافة ملاحظة</h2>
        <input
          type="text"
          placeholder="عنوان الملاحظة"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          placeholder="محتوى الملاحظة"
          value={newNote.contents}
          onChange={(e) => setNewNote({ ...newNote, contents: e.target.value })}
        />
      </Dialog>
      {notes && <Notes notes={notes} />}
    </div>
  );
};

export default App;
