import React from 'react';
import Reflector from '../Reflector';

export default React.createClass({

  getReflectorTypes: function () {
    return [{
      value: 'THINB',
      label: 'B'
    },{
      value: 'THINC',
      label: 'C'
    }];
  },

  render: function () {
    let reflectorTypes = this.getReflectorTypes();
    return <Reflector {...this.props} choices={reflectorTypes}/>;
  }
});
