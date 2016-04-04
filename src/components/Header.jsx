import React, {PropTypes} from 'react';

const Header = React.createClass({
  render() {
    const props = this.props;

    return (
      <div className="app__header" >
          Digital NEXT <span className="app__header--sidetext">  - experimenting with next generation technologies</span>
      </div>
    );
  }
});

export default Header;
