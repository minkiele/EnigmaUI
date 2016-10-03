import React from 'react';
import AbstractReflector from '../Reflector';
import assign from 'object-assign';

export default class Reflector extends AbstractReflector {}

Reflector.defaultProps = assign({}, AbstractReflector.defaultProps, {
  choices: [{
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
  }]
});
