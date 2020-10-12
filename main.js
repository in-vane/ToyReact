import { createElement, Component, render } from './toy-react';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>
          <div>my conponent</div>
          {this.children}
        </h1>
      </div>
    );
  }
}

render(
  <MyComponent id='a' class='c'>
    <div>abc</div>
    <div></div>
    <div></div>
  </MyComponent>,
  document.body
);
