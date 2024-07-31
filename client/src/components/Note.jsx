import { useState } from "react";
import axios from "axios";
import Dialog from "./Dialog";

const Note = ({ note }) => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDeleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/notes/${id}`);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleUpdateNote = async (id) => {
    try {
      await axios.put(`http://localhost:3000/notes`, selectedNote);
      setSelectedNote(null);
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  const handelEdit = (note) => {
    setIsDialogOpen(true);
    setSelectedNote(note);
  };

  return (
    <>
      <li key={note._id} className="note">
        <h3>{note.title}</h3>
        <p>{note.contents}</p>
        <button className="btn" onClick={() => handelEdit(note)}>
          تعديل
        </button>
        <button className="btn" onClick={() => handleDeleteNote(note._id)}>
          حذف
        </button>
      </li>
      {selectedNote && (
        <Dialog
          show={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          onClick={() => handleUpdateNote(selectedNote._id)}
        >
          <h2>تعديل الملاحظة</h2>
          <input
            type="text"
            value={selectedNote.title}
            onChange={(e) =>
              setSelectedNote({ ...selectedNote, title: e.target.value })
            }
          />
          <textarea
            value={selectedNote.contents}
            onChange={(e) =>
              setSelectedNote({ ...selectedNote, contents: e.target.value })
            }
          />
        </Dialog>
      )}
    </>
  );
};

export default Note;
