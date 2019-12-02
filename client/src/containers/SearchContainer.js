import React, { Component } from "react";

import Meme from "../components/Meme";
import Search from "../components/Search";

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      input1: "",
      input2: "",
      allMemes: [],
      image: "https://i.imgflip.com/1bij.jpg",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("/api")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({
          allMemes: memes,
        });
      });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    const { name } = e.target;
    const randNum = Math.floor(Math.random() * this.state.allMemes.length);
    const img = this.state.allMemes[randNum].url;
    this.setState({
      [name]: img,
    });
  }

  render() {
    return (
      <div>
        <Search
          data={this.state}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        <Meme data={this.state} />
      </div>
    );
  }
}

export default SearchContainer;
