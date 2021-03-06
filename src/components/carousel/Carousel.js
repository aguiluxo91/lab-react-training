import React from 'react';

class Carousel extends React.Component {
  state = {
    imgNumber: 0,
  };

  slideSwitch = (amount) => {
    this.setState((prev, props) => {
      let number = prev.imgNumber;
      if (amount === -1) {
          if (number <= 0) number = props.imgs.length - 1;
          else number = number - 1;
      } else {
          if (number >= props.imgs.length -1) number = 0;
          else number = number + 1;
      }

      return {
        imgNumber: number,
      };
    });
  };
  render() {
    const { imgNumber } = this.state;
    const { imgs } = this.props;

    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ width: '300px' }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imgs[imgNumber]} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          onClick={() => this.slideSwitch(-1)}
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          onClick={() => this.slideSwitch(1)}
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default Carousel;
