import React from 'react';
import Rotor from '../Rotor';

export default React.createClass({

  getRotorTypes: function () {
    return [{
      value: 'I',
      label: 'I'
    },{
      value: 'II',
      label: 'II'
    },{
      value: 'III',
      label: 'III'
    },{
      value: 'IV',
      label: 'IV'
    },{
      value: 'V',
      label: 'V'
    },{
      value: 'VI',
      label: 'VI'
    },{
      value: 'VII',
      label: 'VII'
    },{
      value: 'VIII',
      label: 'VIII'
    }];
  },

  render: function () {
    let rotorTypes = this.getRotorTypes();
    return <Rotor {...this.props} choices={rotorTypes} />;
  }
});
