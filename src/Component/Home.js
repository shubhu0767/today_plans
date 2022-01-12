import React, { useState } from "react";
import Plans from "./Plans";

function Home() {
  const [text, settext] = useState("");
  const [items, setitems] = useState([]);

  const HandleAdd = () => {
    if (text != "") {
      setitems((oldItem) => {
        return [...oldItem, text];
      });
      settext("");
    }
  };

  const HandleDelete = (id) => {
    setitems((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
          <h1 className="text-center">Today's Plans</h1>
          <div className="row">
            <div className="col-9 mb-1">
              <input
                type="text"
                className="form-control"
                placeholder="Write Your Plan Here"
                value={text}
                onChange={(e) => settext(e.target.value)}
              />
            </div>
            <div className="col-2">
              <button
                id="btn"
                className="btn btn-warning px-5 fw-bold"
                onClick={HandleAdd}
              >
                Add
              </button>
            </div>
            <div className="container-fluid">
              <ul className="list-unstyled row m-5">
                {items.map((value, i) => {
                  return (
                    <Plans
                      value={value}
                      key={i}
                      id={i}
                      HandleDelete={HandleDelete}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
