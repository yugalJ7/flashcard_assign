import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Breadcrums = () => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center justify-center space-x-1 rtl:space-x-reverse ml-14 p-4 mt-5">
        <li className="inline-flex items-center">
          <div className="flex items-center">
            <HomeRoundedIcon sx={{ fontSize: 25, color: "#686671" }} />
            <a
              href="#"
              className="ms-1 text-sm font-normal text-[#686671] font-vietnam  md:ms-2  "
            >
              Flashcard
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <KeyboardArrowRightIcon sx={{ color: "#051883" }} />
            <a
              href="#"
              className="ms-1 text-sm font-normal text-[#686671] font-vietnam  md:ms-2  "
            >
              Mathematics
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <KeyboardArrowRightIcon sx={{ color: "#051883" }} />
            <span className="ms-1 text-sm font-normal  text-[#051883] md:ms-2  font-vietnam">
              Relation and Function
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrums;
