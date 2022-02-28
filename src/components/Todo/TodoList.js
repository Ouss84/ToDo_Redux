import React from "react";
import { useState, useEffect } from "react";
import * as actionTypes from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [filteredValue, setFilteredValue] = useState();
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const [searchInput, setSearchInput] = useState("");
  const removeHandler = (id) => {
    // console.log(id, "was clicked");
    dispatch({
      type: actionTypes.REMOVE_TODO,
      payload: id,
    });
  };
  const doneHandler = (id) => {
    console.log(id, "was clicked");
    dispatch({
      type: actionTypes.TODO_DONE,
      payload: id,
    });
  };
  const tasksFiltered = notes.filter((item) => {
    return item.title.toLowerCase().includes(searchInput.toLowerCase());
  });
  const filterHandler = (event) => {
    setFilteredValue(event.target.value);
    // console.log(searchInput);
  };
  const searchInputHandler = (event) => {
    setSearchInput(event.target.value);
  };
  useEffect(() => {
    if (filteredValue === "done") {
      setFilteredNotes(notes.filter((item) => item.done === !!filteredValue));
    } else if (filteredValue === "not-done") {
      setFilteredNotes(notes.filter((item) => item.done !== !!filteredValue));
    } else {
      setFilteredNotes(notes);
    }
  }, [filteredValue, notes]);

  return (
    <div className={classes.todos}>
      <label> Search task:</label>
      <input type="text" onChange={searchInputHandler} />
      <label>choose:</label>
      <select name="done" onChange={filterHandler}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="not-done">Not done</option>
      </select>

      <h1>Notes:</h1>
      {filteredNotes.map((note) => {
        return (
          <div
            onClick={() => doneHandler(note.id)}
            className={`${classes.todo} ${
              note.done ? classes.done : classes.notDone
            }`}
            key={note.id}
          >
            <h2>
              {note.id}. {note.title}
            </h2>
            <p>{note.task}</p>
            <span
              onClick={() => removeHandler(note.id)}
              className={`material-icons ${classes.delete}`}
            >
              delete
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
