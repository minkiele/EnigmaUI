import React from 'react';
import AbstractRotor from '../Rotor';
import assign from 'object-assign';

export default class Rotor extends AbstractRotor {}

Rotor.defaultProps = assign({}, AbstractRotor.defaultProps, {
  choices: [{
    value: 'I',
    label: 'I'
  }, {
    value: 'II',
    label: 'II'
  }, {
    value: 'III',
    label: 'III'
  }, {
    value: 'IV',
    label: 'IV'
  }, {
    value: 'V',
    label: 'V'
  }, {
    value: 'VI',
    label: 'VI'
  }, {
    value: 'VII',
    label: 'VII'
  }, {
    value: 'VIII',
    label: 'VIII'
  }]
});
