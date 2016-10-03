import React from 'react';
import AbstractReflector from '../Reflector';
import assign from 'object-assign';

export default class ThinReflector extends AbstractReflector {}

ThinReflector.defaultProps = assign({}, AbstractReflector.defaultProps, {
  choices: [{
    value: 'THINB',
    label: 'Thin B'
  }, {
    value: 'THINC',
    label: 'Thin C'
  }]
});
