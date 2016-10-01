import React from 'react';
import Rotor from '../Rotor';
import RotorI from 'enigma-minkiele/src/Component/WiredWheel/Rotor/RotorI';
import RotorII from 'enigma-minkiele/src/Component/WiredWheel/Rotor/RotorII';
import RotorIII from 'enigma-minkiele/src/Component/WiredWheel/Rotor/RotorIII';
import RotorIV from 'enigma-minkiele/src/Component/WiredWheel/Rotor/RotorIV';
import RotorV from 'enigma-minkiele/src/Component/WiredWheel/Rotor/RotorV';
import RotorVI from 'enigma-minkiele/src/Component/WiredWheel/Rotor/RotorVI';
import RotorVII from 'enigma-minkiele/src/Component/WiredWheel/Rotor/RotorVII';
import RotorVIII from 'enigma-minkiele/src/Component/WiredWheel/Rotor/RotorVIII';

export default React.createClass({

  getRotorTypes: function () {
    return [{
      value: 'I',
      label: 'I',
      rotor: new RotorI()
    }, {
      value: 'II',
      label: 'II',
      rotor: new RotorII()
    }, {
      value: 'III',
      label: 'III',
      rotor: new RotorIII()
    }, {
      value: 'IV',
      label: 'IV',
      rotor: new RotorIV()
    }, {
      value: 'V',
      label: 'V',
      rotor: new RotorV()
    }, {
      value: 'VI',
      label: 'VI',
      rotor: new RotorVI()
    }, {
      value: 'VII',
      label: 'VII',
      rotor: new RotorVII()
    }, {
      value: 'VIII',
      label: 'VIII',
      rotor: new RotorVIII()
    }];
  },

  render: function () {
    let rotorTypes = this.getRotorTypes();
    return <Rotor {...this.props} choices={rotorTypes} />;
  }
});
