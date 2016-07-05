import React, { Component } from 'react';
import { Map } from 'immutable';
import partial from './partial';

export default function ComponentWithPartials(Target) {
  class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.__partials__ = Map();
    }

    render() {
      return (
        <Target {...this.props} partial={this.partial} />
      );
    }
  }

  Wrapper.prototype.partial = partial;

  return Wrapper;
}
