import ReactDOM from 'react-dom';

export default class Frontend {

  constructor (mountNode) {
    this.mountNode = mountNode;
  }

  render (component) {
    ReactDOM.render(component, this.mountNode);
  }

}
