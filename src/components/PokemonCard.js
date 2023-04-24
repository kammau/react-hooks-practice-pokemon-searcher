import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [spriteSide, setSpriteSide] = useState(pokemon.sprites.front)

  function spriteToggle() {
    if (spriteSide === pokemon.sprites.front) {
      setSpriteSide(pokemon.sprites.back)
    } else {
      setSpriteSide(pokemon.sprites.front)
    }
  }

  return (
    <Card onClick={spriteToggle}>
      <div>
        <div className="image">
          <img alt="oh no!" src={spriteSide}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
