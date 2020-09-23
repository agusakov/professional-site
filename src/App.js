import React, { Component } from 'react';
import Home from './Home'
import Project from './Project'
import client from './client'
import './App.css';
import { Route } from "react-router-dom";

/**
 * To do:
 * finish up quantum computing stuff, add more to paper
 * clean up technical writing portfolio, make it look professional
 * figure out styling for headers
 * add CV
 * polish up quantum computing papers and add those
 * add talks given to clubs
 */

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: ''
    }
  }

 componentDidMount() {
    this.fetchPosts();
  }
  
  fetchPosts = () => client.getEntries().then(entries => {
    console.log(entries);
    var objArr = [];
    entries.items.forEach(entry => {
      var catTitle = entry.fields.title;
      if ((catTitle) && (catTitle !== "Home Page")) {
        var obj = {};
        obj.catTitle = catTitle;
        obj.catSlug = catTitle.split(" ").join("-");
        obj.catId = entry.sys.id;
        //obj.previewImage = entry.fields.previewImage.fields.file.url;
        objArr.push(obj);
      }
      if (catTitle === "Home Page"){
        this.setState({
          homePage: entry
        })
      }
    })
    console.log(objArr[0]);
    this.setState({
      data: objArr,
    })
   console.log(this.state.data);
  })

    render () {
      return (
        <div className="App">
          {this.state.data
          ? 
          <div >
          <Route /*basename={process.env.PUBLIC_URL}*/ exact path='/' render={() => <Home {...this.state} />}/>
          {Object.keys(this.state.data).map((cat) =>
            <Route /*basename={process.env.PUBLIC_URL}*/ path={`/${this.state.data[cat]}`}
                render={() =>
                  <div>
                  {console.log(this.state.data[cat])}
                  <Project {...this.state.data[cat]} />
                  </div>
                }
              />
            )}
          </div>
          : (<h2>Loading...</h2>)
          } 
        </div>
      );
    }
  }

export default App;
