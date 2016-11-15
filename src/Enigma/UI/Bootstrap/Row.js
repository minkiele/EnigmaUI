import React from 'react';

const ROW_CLASS = 'row';

export default class Row extends React.Component {

  getClassName () {
    let classNames = this.props.className.split(/\s+/);
    if(classNames.indexOf(ROW_CLASS) === -1) {
      classNames.push(ROW_CLASS);
    }
    return classNames.join(' ');
  }

  render () {
    return (
      <div className={this.getClassName()}>
        {this.props.children}
      </div>
    );
  }

}

Row.propTypes = {
  className: React.PropTypes.string.isRequired
};

Row.defaultProps = {
  className: ROW_CLASS
};
