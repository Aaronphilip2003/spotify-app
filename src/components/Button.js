import React from "react";
import "./Button.css";
import axios from "axios";

const handleClick = () => {
  //   const url =
  //     "https://api.spotify.com/v1/users/d57rcuk3sbwgiotedak0swrdh/playlists";
  //   const headers = {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     Authorization:
  //       "Bearer BQAflpMQLutAo7b0sGWd0JDeGppsKfnMcw-G5sL5xloCPQMSM2TRY9TXzKBaInTXYNPxJsdqVdDgpWol59qEdufaKOI15IFacVB-aBEOpMYUoFZYGdP2zp2gAvSqssmNwzKBdE9n1zHtlLulFPV3BIN5npCXrFmNVBr4g7gQM_7czXrKmFrO4ondJAa25ttzNPQBr9MxPxurTZDd1V5iBtXUSuI22trO6TZ9Z2cHMssBxKT7JYk_cp_J5Fh826x42SxIWxw1B44FGrdXsDStj4POI8eVrAqz3ZkKzprgaVlFqptd",
  //   };
  //   const data = {
  //     name: "Car Songs",
  //     description: "New playlist description",
  //     public: true,
  //   };

  //   axios
  //     .post(url, data, { headers })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  axios({
    method: "get",
    url: "https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=track&market=ES&limit=10&offset=5",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization:
        "Bearer BQB42hL3eMFtfGejBETLzbPHhgLGxWQ7hCo0kxgTgQUwM3b68jB3YO4QsXkDtoReGeEQGqrD-xpZybnEH9ejBEbVO8QZpFrsX5xyBFqthZQqq8vvHLBG33h_1Cg3yJPW9oA0uWkV-Bej59EBYlxZDvD1EKrAibnhzXSJ_GPotSzHAFrYKin_013HmfNKa1w6xxFb",
    },
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const Button = () => {
  return (
    <div className="button" onClick={handleClick}>
      Button
    </div>
  );
};

export default Button;
