import React from 'react';
import EnigmaPlugBoard from './Component/PlugBoard';

export default React.createClass({
  render: function () {
    return (
      <div className="enigmaUI">
        <h1>EnigmaUI</h1>
        <EnigmaPlugBoard/>
      </div>
    );
  }
});
