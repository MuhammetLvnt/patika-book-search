import React from "react";
import { BiArrowBack } from "react-icons/bi";

function MyModal({ modal, onClose, data }) {
  if (!modal) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="p-2 rounded-md w-[700px] h-auto bg-[#F0F7F4]">
        <div>
          <button onClick={onClose}>
            <BiArrowBack />
          </button>
        </div>
        <div className="mx-5 my-5">
          <p className="text-xs font-light">
            <small className="text-orange-400 text-sm font-medium">
              {data.volumeInfo.description ? "Description" : "Publisher"} :
            </small>{" "}
            {data.volumeInfo.description
              ? data.volumeInfo.description
              : data.volumeInfo.publisher}
          </p>
          <hr className="my-5" />
          <p className="text-xs font-light">
            <small className="text-orange-400 text-sm font-medium">
              Published Date :{" "}
            </small>
            {data.volumeInfo.publishedDate
              ? data.volumeInfo.publishedDate
              : "Unknown"}
          </p>
          <hr className="my-5" />
          <p className="text-xs font-light">
            <small className="text-orange-400 text-sm font-medium">
              Page Count :{" "}
            </small>
            {data.volumeInfo.pageCount ? data.volumeInfo.pageCount : "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyModal;
