import React from 'react';
import Reflector from '../Reflector';

export default React.createClass({

  getReflectorTypes: function () {
    return [{
      value: 'A',
      label: 'A'
    }, {
      value: 'B',
      label: 'B'
    }, {
      value: 'C',
      label: 'C'
    }, {
      value: 'BETA',
      label: 'Beta'
    }, {
      value: 'GAMMA',
      label: 'Gamma'
    }];
  },

  render: function () {
    let reflectorTypes = this.getReflectorTypes();
    return <Reflector {...this.props} choices={reflectorTypes}/>;
  }
});
