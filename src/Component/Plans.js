import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Plans = ({value, id, HandleDelete}) => {
  return (
    <>
      <li className="shadow p-2 my-1 col-sm-9">{value}</li>
      <button className="btn btn-danger my-2 col-sm-2 offset-1 fs-2"
      onClick={() =>{
        HandleDelete(id)
      }}
      >
        <RiDeleteBin6Line />
      </button>
    </>
  );
};

export default Plans;
