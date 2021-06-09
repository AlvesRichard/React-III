import React from "react";
import Artists from "../components/Artists";
import FilterInput from "../components/FilterInput";

export default class FilterableArtistsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
    this.FilterChange = this.FilterChange.bind(this);
  }

  FilterChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter((artist) =>
      artist.name.match(inputValue)
    );

    return (
      <div>
        <FilterInput FilterChange={this.FilterChange} />
        <Artists artists={filteredArtists} />
      </div>
    );
  }
}