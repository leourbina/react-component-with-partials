# react-component-with-partials

Partials for your react components callbacks.

## Usage

This library exposes a high order component which passes down `partial` as a prop. `partial` maintains an internal cache of your partial'd functions, instead of creating a new partial function on every render, forcing re-renders downstream every time. Using this component alongside [`PureRenderMixin`](https://facebook.github.io/react/docs/pure-render-mixin.html) may yield a performance boost in some cases. YMMV.

``` javascript
import React, { Component } from 'react';
import ComponentWithPartials from 'react-component-with-partials';

@ComponentWithPartials
class MyComponent extends Component {
  render() {
    const { partial } = this.props;
    return(
      <div>
        <div onClick={partial(this.handler, "yellow")}>
          Click for yellow!
        </div>
        <div onClick={partial(this.handler, "blue")}>
          Click for blue!
        </div>
      </div>
    );
  }

  handler(color) {
    window.alert(`You clicked ${color}`);
  }
}

```
