import React, { useState } from "react";
import "./Content.css";
import axios from "axios";
import { useEffect} from "react";
import RowData from "../../constants/URLs";
import Row from "../row/Row";

export default function Content() {
  return (
    <div className="content-wrapper">
      {/* content page */}
      {RowData.map((item,index) => {
        // console.log(item.url);
        console.log(item.title);
        return  <Row key={index} title={item.title} url={item.url} />;
      })}
    </div>
  );
}

// 0042526a3901f5070c408711a76b9c97
