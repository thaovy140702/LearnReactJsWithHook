import { useState } from "react";
import "./YoutubeSearch.scss";
import moment from "moment/moment";
import axios from "axios";
import { Link } from "react-router-dom";
const YoutubeSearch = () => {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);

  const handleSearchYoutube = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        type: "video",
        key: "AIzaSyBGBbAbPDj2ju38kTNUE0xwSfRGwCUUL2o",
        q: query,
      },
    });
    if (res && res.data && res.data.items) {
      let raw = res.data.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map((item) => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createdAt = item.snippet.publishedAt;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;
          result.push(object);
        });
      }
      setVideos(result);
    }
  };
  return (
    <div className="youtube-search-container">
      <div className="yt-search">
        <input
          type="text"
          className="input-search"
          placeholder="Search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        <button
          type="button"
          className="btn-search"
          onClick={() => {
            handleSearchYoutube();
          }}
        >
          Search
        </button>
      </div>
      {videos &&
        videos.length > 0 &&
        videos.map((item) => {
          return (
            <div className="yt-result" key={item.id}>
              <div className="left">
                <iframe
                  className="iframe-yt"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title={item.title}
                  border="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="right">
                <Link
                  to={`/youtube/${item.id}`}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </Link>
                <div className="created-at">
                  {" "}
                  {moment(item.createdAt).format(
                    "dddd, MMMM Do YYYY, h:mm:ss A"
                  )}
                </div>
                <div className="author">Author: {item.author}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default YoutubeSearch;
