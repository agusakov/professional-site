import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import client from './client';


class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.catId,
      title: this.props.catTitle,
      slug: this.props.catSlug,
    }
  }

  componentDidMount() {
    this.getCat();
  }

  getCat = () => client.getEntry(`${this.state.id}`)
      .then((entry) => {
        var objArr = [];
        console.log(entry);
          Object.keys(entry.fields).map(subcat => {
            var subCatTitle = subcat;
            if ((subCatTitle !== "previewImage") && (subCatTitle !== "title")) {
            var obj = {};
            obj.subCatTitle = subCatTitle.charAt(0).toUpperCase() + subCatTitle.slice(1).split(/(?=[A-Z]|and)+/).join(" ");
            obj.subCatText = entry.fields[subcat];

            objArr.push(obj);
          }
        })
        //console.log(objArr);
        this.setState({
          subCats: objArr
        })})
      .catch(console.error)

  onClick = (subCat) => {
    //console.log(subCat);
    this.setState({subCatInd: subCat});
  }

  render() {
    return (
    <div id="wrapper">
      <div id="main">
      <h2 className="major">
            <span>{this.state.title}</span> 
            <Link to={`/`}>
              <div className="close" />
            </Link>
          </h2>
      <article id={this.state.title} className="active">
      <span>{this.state.title}</span> 
        <ul>
          <li>Generalized Petersen: </li>
          
        </ul>
        </article>
      </div>
    </div>
    );
  }
}

export default Project;
