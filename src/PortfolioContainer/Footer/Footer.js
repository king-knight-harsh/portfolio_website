import React from "react";import"./Footer.min.css";import b from"../../utilities/ScrollService";export default function c(){return<div className="scroll-container">

      <button className="btn-scroll"onClick={()=>b.scrollHandler.scrollToHome()}>

        {" "}

        <i className="fa fa-arrow-up"></i>

      </button>

    </div>}