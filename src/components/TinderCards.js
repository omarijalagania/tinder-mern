import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

const peoples = [
  {
    name: "Lisa Brown",
    url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    name: "Mike Smith",
    url: "https://images.pexels.com/photos/1466844/pexels-photo-1466844.jpeg",
  },
];

function TinderCards() {
  const [people, setPeople] = useState(peoples);
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            className="swipe"
            key={person._id}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
