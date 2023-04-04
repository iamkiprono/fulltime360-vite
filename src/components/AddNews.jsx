import React, { useState } from "react";

const AddNews = () => {
  const [status, setStatus] = useState("Stat appear here");
  const [id, setId] = useState("");
  const [news, setNews] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newsUpate = { id, news, details, image, category };

    const response = await fetch("https://football-360-api.onrender.com/news", {
      method: "POST",
      body: JSON.stringify(newsUpate),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setStatus("Added");
      window.location.reload()
    }
  };

  return (
    <div>
      {status}
      <form className="add-news">
        <h3>Add news</h3>
        <label>Enter id: </label>
        <input
          type="text"
          placeholder="id"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <label>Enter news: </label>
        <input
          type="text"
          placeholder="news"
          onChange={(e) => {
            setNews(e.target.value);
          }}
        />
        <label>Enter details: </label>
        <input
          type="text"
          placeholder="details"
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <label>Enter image: </label>
        <input
          type="text"
          placeholder="image link"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <label>Enter category: </label>
        <input
          type="text"
          placeholder="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <button type="submit" onClick={handleSubmit}>
          Add news
        </button>
      </form>
    </div>
  );
};

export default AddNews;
