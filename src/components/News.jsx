import React, { useEffect, useState } from "react";

const News = () => {
  const [updates, setUpdates] = useState([]);
  const [stat, setStat] = useState("stat app");

  // fetch("http://localhost:8800/news")
  //   .then((data) => data.json())
  //   .then((res) => {
  //     setUpdates(res);
  //     console.log(res)
  //   });

  useEffect(() => {
    const getData = async () => {
      try {
        const geti = await fetch("https://football-360-api.onrender.com/");
        const res = await geti.json();
        setUpdates(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>News</h1>
      {stat}
      {updates.map((update) => {
        return (
          <div key={update.id}>
            <img src={update.image} alt="" />
            <h2>{update.news}</h2>
            <p>{update.details}</p>
            <p>{update.category}</p>
            <button
              onClick={async () => {
                try {
                  const del = await fetch(
                    "https://football-360-api.onrender.com/news/" + update.id,
                    {
                      method: "DELETE",
                    }
                  );
                  if (del.ok) {
                    setStat("Deleted");
                    window.location.reload()
                  }
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default News;
