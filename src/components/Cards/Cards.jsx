import React, { useEffect, useRef, useState } from "react";
import "./Cards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const Cards = ({ title, category }) => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

  //3. After copy and paste set this variable for collected the response from api request
  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  //1. copy get request from TMDB
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_BEARER}`,
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    fetch(
      `${BASE_URL}/movie/${category || "now_playing"}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res); // ✅ debug สำคัญมาก
        setApiData(res.results || []);
      })
      .catch((err) => console.error(err));
  }, [category]);

  useEffect(() => {
    const cardList = cardsRef.current;
    if (!cardList) return;

    cardList.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      cardList.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={
                  card.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
                    : "https://via.placeholder.com/300x170"
                }
                alt={card.original_title}
              />

              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
