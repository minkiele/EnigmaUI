import React from 'react';
import Rotor from '../Rotor';

export default React.createClass({

  getRotorTypes: function () {
    return [{
      value: 'BETA',
      label: 'Beta'
    }, {
      value: 'GAMMA',
      label: 'Gamma'
    }];
  },

  render: function () {
    let rotorTypes = this.getRotorTypes();
    return <Rotor {...this.props} choices={rotorTypes} />;
  }
});
