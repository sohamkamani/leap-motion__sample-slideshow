import classNames from 'classnames';
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
      background : `url("images/${props.img}")`,
      backgroundSize: '100%',
      height : props.active ? '500px' : '300px'
    };
    return (
      <div className="app__slide" style={style}>
        <h3 className="app__slide__title">{props.title}</h3>
        <p className={classNames('app__slide__description', props.enhanced ? 'app__slide--enhanced' : '')}>{props.description}</p>
      </div>
    );
  }
});

export default Slide;
