import TeamMember from './TeamMember.jsx';
import React, {PropTypes} from 'react';

const Team = React.createClass({
  render() {
    const props = this.props;

    return (
      <div className="app__team">
        <div className="app__team__title">
          Team
        </div>
        <div className="app__team__description">
          Digital Next is a team of technology enthusiasts from MDL who are interested in experimentiation and incubation of next generation technology / gadgets to MDL. We like to explore and try out bleeding edge technology streams like IOT and Virtual Reality .
        </div>
      </div>
    );
  }
});

export default Team;
