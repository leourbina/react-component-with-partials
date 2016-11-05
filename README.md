# react-component-with-partials

Partials for your react components callbacks. Because having `.bind` and arrow functions in your react components is an [antipattern](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md).

## Get it

``` shell
npm install --save react-component-with-partials
```

## Usage

Wrap your component with `withPartials` and it will inject the `partial` prop, which can be used exactly like [`lodash.partial`](https://www.npmjs.com/package/lodash.partial). You can either wrap it by hand or use it as a es7 decorator:

``` javascript
import React, { Component } from 'react';
import withPartials from 'react-component-with-partials';

@withPartials
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


## How it works

This library exposes a high order component which passes down `partial` as a prop. `partial` maintains an internal cache of your partial'd functions, instead of creating a new partial function on every render, forcing re-renders downstream every time. Using this with [`PureComponent`](https://facebook.github.io/react/docs/react-api.html#react.purecomponent) may yield help performance by avoiding unnecessary GC in your app. YMMV.
