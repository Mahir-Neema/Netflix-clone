import React from "react";
import "./Row.css";
import Card from "../card/Card";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";




export default function Row({title,url}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setData(request.data.results);

      return request;
    }
    fetchData();
  }, [url]);

  console.log("hemlo ji");
  // console.log(movies);




  return (
    <div className="row_wrapper">
      <h3 className="row_title">{title}</h3>
      <div className="row_cards_holder"><div className="row_cards">
      
        {data?.map((movi) => {
          console.log(movi)
          return (
            
            <Card
              key={movi.id}
              id={movi.id}
              title={movi.title}
              isAdult={movi.adult}
              backdroPath={movi.backdrop_path}
              voteAverage={movi.vote_average}
            />
          );
        })}
        {/* <Card title={"Avatar Spirits"} isAdult={false} backdroPath={"/PSBUyz5jXYqKr2OvLhQWmTbmSx.jpg"} voteAverage={9} id={278698} /> */}
      </div>
      </div>
    </div>
  );
}
