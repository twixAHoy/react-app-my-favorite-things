import React from "react";
import favoriteThings from "./FavoriteThings";
import FavoriteThing from "./FavoriteThing";

class FavoriteThingsList extends React.Component {
  render() {
    //return a grid of your favorite things
    //loop through your favorite things so that they are mapped correctly
    return (
      <div class="grid sm:grid-cols-4 gap-6">
        {favoriteThings.map(function (favoriteThing) {
          return <FavoriteThing {...favoriteThing} />;
        })}
      </div>
    );
  }
}

export default FavoriteThingsList;
