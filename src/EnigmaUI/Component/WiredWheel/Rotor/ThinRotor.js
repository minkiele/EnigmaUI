import React from 'react';
import AbstractRotor from '../Rotor';
import assign from 'object-assign';

export default class ThinRotor extends AbstractRotor {}

ThinRotor.defaultProps = assign({}, AbstractRotor.defaultProps, {
  choices: [{
    value: 'BETA',
    label: 'Beta'
  }, {
    value: 'GAMMA',
    label: 'Gamma'
  }]
});
