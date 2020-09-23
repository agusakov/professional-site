import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom";
import Markdown from 'react-markdown';
import Project from './Project';


class App extends Component {
  constructor () {
    super()
    this.state = {
        
    }
    console.log(this.props);
  }
  /*onClick = () => {
    var primary = "primary"
    if (this.state.showOldNews) {
      primary = "";
    }
      this.setState({
        showOldNews: !this.state.showOldNews,
        clicked: primary
      })
  }*/

  render() {
    return (
      <div className="active">
        {console.log(this.props.homePage.fields.projects)}
        <div id="header">
          <Markdown>{this.props.homePage.fields.header}</Markdown>
        </div>
        <h2>Projects</h2>
        <nav /*className="use-middle"*/>
              { this.props.data
                ? Object.keys(this.props.data).map((obj) =>
                <div>
                      {/*console.log(this.props.data[obj].previewImage)*/}
                      <Link to={`${this.props.data[obj].catSlug}`}>
                        <img src={`${this.props.data[obj].previewImage}`} alt="preview"/>
                        <br/>
                        {this.props.data[obj].catTitle}
                      </Link>
                  </div>
                )
                : (<h2>Loading...</h2>)
              }
          </nav>
        <div id="projects">
          <Markdown>{this.props.homePage.fields.projects}</Markdown>
        </div>
      </div>
    );
  }
}

export default App;
