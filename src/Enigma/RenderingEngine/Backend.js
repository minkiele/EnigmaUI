import ReactDOMServer from 'react-dom/server';
import EventEmitter from 'events';

export default class Backend extends EventEmitter {

  render (component) {
    let rendering = ReactDOMServer.renderToString(component);
    this.emit('render', rendering);
  }

}
