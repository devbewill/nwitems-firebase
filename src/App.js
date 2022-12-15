import "./App.css";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { uid } from "uid";
import { set, ref, onValue } from "firebase/database";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data != null) {
        Object.values(data).map((item) => {
          setItems((oldArray) => [...oldArray, item]);
        });
      }
    });
  }, []);

  //write
  // const writeToDatabase = () => {
  //   const uuid = uid();
  //   set(ref(db, `/${uuid}`), {
  //     item,
  //     uuid,
  //   });

  //   setItem("");
  // };

  return (
    <div className="App">
      <h1>items</h1>
      <ul>
        {items.map((item, i) => {
          if (i < 10) {
            return <li key={i}>{item.attributes.name}</li>;
          }
        })}
      </ul>
    </div>
  );
}

export default App;
