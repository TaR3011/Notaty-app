import { useEffect, useState } from "react";
import axios from "axios";

import Note from "./Note";

const Notes = ({ notes }) => {
  // const [notes, setNotes] = useState([]);

  // useEffect(() => {
  //   fetchNotes();
  // }, [notes]);

  // const fetchNotes = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/notes");
  //     setNotes(response.data);
  //   } catch (error) {
  //     console.error("Error fetching notes:", error);
  //   }
  // };
  return (
    <div>
      <h2>كل الملاحظات</h2>
      <ul className="list">
        {notes.map((note) => (
          <Note note={note} />
        ))}
      </ul>
    </div>
  );
};

export default Notes;
