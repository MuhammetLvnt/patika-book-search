import React, { useState } from "react";
import { useData } from "../context/DataContext";
import Modal from "./modal";
import { Link } from "react-router-dom";

function Content() {
  const { datas } = useData();
  const [modal, setModal] = useState({ id: "", show: false });
  console.log(datas);
  const handleClose = () => setModal({ show: false });

  return (
    <div className="grid grid-cols-4 gap-6 mx-5 mt-10 h-full mb-2">
      {datas?.map((data) => (
        <div
          key={data.id}
          className="flex justify-center bg-[#F0F7F4] items-center flex-col rounded shadow-xl shadow-gray-800 hover:shadow-gray-700"
        >
          <img
            src={
              data?.volumeInfo?.imageLinks?.thumbnail
                ? data?.volumeInfo?.imageLinks?.thumbnail
                : "https://bookcart.azurewebsites.net/Upload/Default_image.jpg"
            }
            alt=""
            className="w-40 h-56 mt-2 rounded-md"
          />

          <div className="flex justify-center items-center">
            <Link
              target="_blank"
              to={data.volumeInfo.previewLink}
              className="text-xs font-light text-amber-600 hover:underline  hover:scale-125"
            >
              Preview
            </Link>
            <small>&nbsp;|&nbsp;</small>
            <button
              onClick={() => setModal({ id: data.id, show: true })}
              className="text-xs font-light text-amber-600 hover:underline hover:transition hover:ease-in-out delay-150 hover:scale-125"
            >
              Details
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xs font-medium p-2">{data.volumeInfo.title}</h3>
            <div className="w-full border-t border-black" />
            <h3 className="text-xs font-medium p-2">
              {data.volumeInfo.authors ? data.volumeInfo.authors : "Anonim"}
            </h3>
          </div>
          {modal.id == data.id && modal.show == true && (
            <Modal onClose={handleClose} data={data} modal={modal} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Content;
