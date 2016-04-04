import React, {PropTypes} from 'react';

const Slide = React.createClass({
  propTypes : {
    title : PropTypes.string,
    description : PropTypes.string
  },
  render() {
    const props = this.props;
    const style= {
      minWidth : props.slideWidth,
      background : `url("images/${props.img}") no-repeat`,
      backgroundSize:'cover',
      height : props.active ? '500px' : '300px'
    };
    const descriptionStyle = {
      opacity : props.enhanced ? '1' : '0'
    };
    return (
      <div className="app__slide" style={style}>
        <h3 className="app__slide__title">{props.title}</h3>
        <p className="app__slide__description" style={descriptionStyle}>{props.description}</p>
      </div>
    );
  }
});

export default Slide;
