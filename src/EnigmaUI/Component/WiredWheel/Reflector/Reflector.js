import React from 'react';
import Reflector from '../Reflector';

export default React.createClass({

  getReflectorTypes: function () {
    return [{
      value: 'B',
      label: 'B'
    },{
      value: 'C',
      label: 'C'
    }];
  },

  render: function () {
    let reflectorTypes = this.getReflectorTypes();
    return <Reflector {...this.props} choices={reflectorTypes}/>;
  }
});
