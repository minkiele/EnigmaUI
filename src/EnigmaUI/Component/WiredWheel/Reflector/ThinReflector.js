import React from 'react';
import Reflector from '../Reflector';
import ThinReflectorB from 'enigma-minkiele/src/Component/WiredWheel/Reflector/ThinReflector/ThinReflectorB';
import ThinReflectorC from 'enigma-minkiele/src/Component/WiredWheel/Reflector/ThinReflector/ThinReflectorC';

export default React.createClass({

  getReflectorTypes: function () {
    return [{
      value: 'THINB',
      label: 'Thin B',
      reflector: new ThinReflectorB()
    }, {
      value: 'THINC',
      label: 'Thin C',
      reflector: new ThinReflectorC()
    }];
  },

  render: function () {
    let reflectorTypes = this.getReflectorTypes();
    return <Reflector {...this.props} choices={reflectorTypes}/>;
  }
});
