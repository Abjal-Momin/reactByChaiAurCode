import React from "react";
import { useParams } from "react-router-dom";


function User() {
    const {userid} = useParams();
  return (
    <div className="text-center w-full max-w-7xl text-4xl">User: {userid}</div>
  );
}
export default User;
