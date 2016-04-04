import React, {PropTypes} from 'react';

const TeamMember = React.createClass({
  render() {
    const props = this.props;

    return (
      <div className="app__team__member">
        Name : {this.props.name}
      </div>
    );
  }
});

export default TeamMember;
