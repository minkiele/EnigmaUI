import React from 'react';
import Reflector from '../Reflector';
import ReflectorA from 'enigma-minkiele/src/Component/WiredWheel/Reflector/ReflectorA';
import ReflectorB from 'enigma-minkiele/src/Component/WiredWheel/Reflector/ReflectorB';
import ReflectorC from 'enigma-minkiele/src/Component/WiredWheel/Reflector/ReflectorC';
import ReflectorBeta from 'enigma-minkiele/src/Component/WiredWheel/Reflector/ReflectorBeta';
import ReflectorGamma from 'enigma-minkiele/src/Component/WiredWheel/Reflector/ReflectorGamma';

export default React.createClass({

  getReflectorTypes: function () {
    return [{
      value: 'A',
      label: 'A',
      reflector: new ReflectorA()
    }, {
      value: 'B',
      label: 'B',
      reflector: new ReflectorB()
    }, {
      value: 'C',
      label: 'C',
      reflector: new ReflectorC()
    }, {
      value: 'BETA',
      label: 'Beta',
      reflector: new ReflectorBeta()
    }, {
      value: 'GAMMA',
      label: 'Gamma',
      reflector: new ReflectorGamma()
    }];
  },

  render: function () {
    let reflectorTypes = this.getReflectorTypes();
    return <Reflector {...this.props} choices={reflectorTypes}/>;
  }
});
