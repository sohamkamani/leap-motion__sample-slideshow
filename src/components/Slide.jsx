import React, {PropTypes} from 'react';

const Slide = React.createClass({
  propTypes : {
    title : PropTypes.string,
    description : PropTypes.string
  },
  render() {
    const props = this.props;
    const style= {
      minWidth : props.slideWidth
    };
    return (
      <div className="app__slide" style={style}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    );
  }
});

export default Slide;
