import React, { Component } from "react";
import { Link } from "react-router-dom";


function Card(props) {
  return(
      <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex px-2 mb-3">
        <Link to={{
          pathname: `${props.url}/${props.id}`,
          state: {
            title: props.title,
            location: props.location,
            year: props.year,
            spread: props.spread,
          }
        }} >
          <div className="card card-block">
            <img src={'/media/'+props.image} className="card-img" alt={props.title}/>
            <div className="card-img-overlay p-1">
              <h5 className="card-title text-pink">{props.title}</h5>
              <p className="card-text">
                מיקום: {props.location}<br/>
                שנה: {props.year}<br/>
                שטח: {props.spread}
              </p>
            </div>
          </div>
        </Link>
      </div>
  )
}

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading..."
    };
  }

  componentDidMount(){
    const {type} = this.props.location.state;

    fetch(`/api/projects/${type}`)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      })
      .then(data => this.setState({ data: data, loaded: true }));
  }

  render() {
    const {data} = this.state
    const {url} = this.props.match

    return(
      <div className="row justify-content-center">
        {data.map(({id, title, location, year, spread, image}, index) => (
          <Card
            id={id}
            title={title}
            location={location}
            year={year}
            spread={spread}
            image={image}
            url={url}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default Grid;