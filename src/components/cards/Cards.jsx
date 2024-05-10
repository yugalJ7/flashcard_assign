import React from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { IoReloadSharp } from "react-icons/io5";
import { PiCaretCircleLeftFill, PiCaretCircleRightFill } from "react-icons/pi";
import { IoMdQrScanner } from "react-icons/io";
import { IconContext } from "react-icons";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const cardNavItems = [
  { id: 1, text: "Study" },
  { id: 2, text: "Quiz" },
  { id: 3, text: "Test" },
  { id: 4, text: "Game" },
  { id: 5, text: "Other" },
];

const Cards = () => {
  return (
    <>
      <div className="card-header mt-5 ml-1 sm:ml-14 p-4  font-semibold">
        <span className="bg-gradient-to-t from-blue-700 to-blue-900 text-transparent inline-block bg-clip-text sm:text-3xl text-2xl">
          Relations and Functions ( Mathematics )
        </span>
      </div>
      <div className="card-body flex flex-col items-center justify-center mt-5 gap-5">
        <div className="card-body_navbar w-4/6 sm:w-2/6 p-1 h-7">
          <ul className="flex justify-around">
            {cardNavItems.map((items) => {
              return (
                <li
                  key={items.id}
                  className="text-[#686671] hover:text-[#051883] hover:font-semibold hover:border-b-2 hover:border-[#051883]"
                >
                  {items.text}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="card-body_flashcard relative flex items-center justify-center gradient h-72 w-3/4 sm:w-[35%] rounded-[30px]">
          <div className="absolute top-6 px-6 bg-clip-text flex justify-between w-full">
            <LightbulbOutlinedIcon className="bg-clip-text text-white" />
            <VolumeUpIcon className="bg-clip-text text-white" />
          </div>
          <span className="text-2xl bg-clip-text text-white">
            9 + 6 + 7x - 2x - 3
          </span>
        </div>
        <div className="card-body_navigation flex justify-around items-center w-4/6 sm:w-2/6">
          <IconContext.Provider
            value={{
              color: "#051883",
            }}
          >
            <IoReloadSharp size={25} />
            <PiCaretCircleLeftFill size={40} />
            <span>01/10</span>
            <PiCaretCircleRightFill size={40} />
            <IoMdQrScanner size={25} />
          </IconContext.Provider>
        </div>
        <div className="card-body_footer flex items-center flex-row justify-between w-full px-16 mt-9">
          <img
            src="/assets/logotwo.png"
            alt="logo"
            className="h-24 w-52 hidden sm:block"
          />
          <div className="flex items-center justify-center">
            <AddCircleIcon
              fontSize="large"
              sx={{
                color: "#051883",
              }}
            />
            <span className="ml-1 bg-gradient-to-t from-blue-700 to-blue-900 text-transparent inline-block bg-clip-text font-semibold">
              Create Flashcard
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
