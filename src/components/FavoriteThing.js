import React from "react";
//class where we are defining the styling of our object
class FavoriteThing extends React.Component {
  render() {
    return (
      <div class="mx-auto">
        <div>
          <img
            src={this.props.imageURL}
            alt={this.props.description}
            class="rounded-xl shadow-xl"
            width="300px"
          />
        </div>
        <div>
          <h1 class="text-4xl font-bold text-blue-700 pt4">
            {this.props.name}
          </h1>
        </div>
      </div>
    );
  }
}

export default FavoriteThing;
