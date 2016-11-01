import React, { Component } from 'react';
import { Map } from 'immutable';
import partial from './partial';

export default function withPartials(Target) {
  class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.__partials__ = Map();
      this.partial = partial.bind(this);
    }

    render() {
      return (
        <Target partial={this.partial} {...this.props} />
      );
    }
  }

  return Wrapper;
}
