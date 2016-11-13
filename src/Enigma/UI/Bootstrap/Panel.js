import React from 'react';

export const DEFAULT_PANEL_TYPE = 'default';

export default class Panel extends React.Component {



  render () {
    return (
      <div className={`panel panel-${this.props.type}`}>
        {this.props.title ? (
          <div className="panel-heading">
            <h2 className="panel-title">
              {this.props.title}
            </h2>
          </div>
        ) : null}
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }

}

Panel.propTypes = {
  type: React.PropTypes.string.isRequired,
  title: React.PropTypes.string
};

Panel.defaultProps = {
  type: DEFAULT_PANEL_TYPE
};
