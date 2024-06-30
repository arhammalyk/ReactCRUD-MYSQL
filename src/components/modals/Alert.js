import React from "react";
import { useSelector } from "react-redux";

function Alert() {
  const alert = useSelector((state) => state.alert);

  return (
    <>
      {alert.visible && (
        <div
          className={`z-10 fixed right-10 md:right-16 top-20 ${
            alert.type === "success" ? "bg-green-600" : "bg-red-600"
          } text-white shadow-lg rounded-lg`}
        >
          <h1 className="px-10 py-6 text-xl font-thin">{alert.message}</h1>
        </div>
      )}
    </>
  );
}

export default Alert;
