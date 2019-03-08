import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading..."
    };
  }

  componentDidMount(){
    const {pk} = this.props.match.params;
    const {endpoint} = this.props;

    fetch(`/api/images/${pk}`)
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
    const {loaded} = this.state
    const {placeholder} = this.state
    const {title} = this.props.location.state
    const {location} = this.props.location.state
    const {year} = this.props.location.state
    const {spread} = this.props.location.state

    return(
      <div>
        <div className="row mb-2">
          <div className="col-sm-3 justify-content-center d-flex"><h5 className="mr-1">{title}</h5></div>
          <div className="col-sm-3 justify-content-center d-flex">מיקום:<strong className="text-pink mr-1">{location}</strong></div>
          <div className="col-sm-3 justify-content-center d-flex">שנה:<strong className="text-pink mr-1">{year}</strong></div>
          <div className="col-sm-3 justify-content-center d-flex">שטח:<strong className="text-pink mr-1">{spread}</strong></div>
        </div>
        <div className="container-carousel">
          <div id="carouselControls" className="carousel slide" data-ride="carousel" data-interval="false">
            <ol className="carousel-indicators">
              {data.map(({}, index) => (
                <li data-target="#carouselControls" data-slide-to={index} className={index==0 ? 'active' : ''} key={index}></li>
                ))}
            </ol>
            <div className="carousel-inner">
              {data.map(({id, path}, index) => (
                <div className={index==0 ? 'carousel-item active' : 'carousel-item'} key={index}>
                  <img src={"/media/" + path} className="d-block w-100" alt="..."/>
                </div>
                ))}
            </div>
            <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPage;