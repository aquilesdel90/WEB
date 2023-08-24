import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import personaje1 from "../assets/personajes/personaje1.jpg";
import personaje2 from "../assets/personajes/personaje2.jpg";
import personaje3 from "../assets/personajes/personaje3.jpg";
import personaje4 from "../assets/personajes/personaje4.jpg";
import personaje5 from "../assets/personajes/personaje5.jpg";
import "../assets/styles/VideoWithCharacters.css";

const VideoWithCharacters = () => {
  const personajes = [
    {
      id: 1,
      image: personaje1,
      video: "https://gunnyvideos.s3.amazonaws.com/tierra.webm",
    },
    {
      id: 2,
      image: personaje2,
      video: "https://gunnyvideos.s3.amazonaws.com/agua.webm",
    },
    {
      id: 3,
      image: personaje3,
      video: "https://gunnyvideos.s3.amazonaws.com/Comp_1.webm",
    },
    {
      id: 4,
      image: personaje4,
      video: "https://gunnyvideos.s3.amazonaws.com/Comp_1.webm",
    },
    {
      id: 5,
      image: personaje5,
      video: "https://gunnyvideos.s3.amazonaws.com/fuego.webm",
    },
  ];

  const [selectedCharacter, setSelectedCharacter] = useState(personajes[0].id);
  const videoRef = useRef(null);

  const handleCharacterClick = (characterId) => {
    setSelectedCharacter(characterId);
  };

  const handleVideoEnded = () => {
    // Find the index of the current character in the array
    const currentIndex = personajes.findIndex(
      (personaje) => personaje.id === selectedCharacter
    );

    // Calculate the index of the next character
    const nextIndex = (currentIndex + 1) % personajes.length;

    // Set the next character as the selected character
    setSelectedCharacter(personajes[nextIndex].id);
  };

  return (
    <div className="video-with-characters">
      <ReactPlayer
        ref={videoRef}
        className="background-video"
        playing
        loop
        muted
        url={
          personajes.find((personaje) => personaje.id === selectedCharacter)
            .video
        }
        onEnded={handleVideoEnded}
        width="none"
        height="none"
      />
      <div className="character-images">
        {personajes.map((personaje) => (
          <div
            key={personaje.id}
            className={`character-item ${
              selectedCharacter === personaje.id ? "selected" : ""
            }`}
            onClick={() => handleCharacterClick(personaje.id)}
          >
            <img src={personaje.image} alt={`personaje-${personaje.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoWithCharacters;
