import React from 'react';
import Rotor from '../Rotor';

import ThinRotorBeta from 'enigma-minkiele/src/Component/WiredWheel/Rotor/ThinRotor/ThinRotorBeta';
import ThinRotorGamma from 'enigma-minkiele/src/Component/WiredWheel/Rotor/ThinRotor/ThinRotorGamma';

export default React.createClass({

  getRotorTypes: function () {
    return [{
      value: 'BETA',
      label: 'Beta',
      rotor: new ThinRotorBeta()
    }, {
      value: 'GAMMA',
      label: 'Gamma',
      rotor: new ThinRotorGamma()
    }];
  },

  render: function () {
    let rotorTypes = this.getRotorTypes();
    return <Rotor {...this.props} choices={rotorTypes} />;
  }
});
