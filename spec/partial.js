import { expect } from 'chai';
import { Map } from 'immutable';
import partial from '../src/partial';
import { placeholder as _ } from 'lodash.partial';

describe('partial', () => {
  class TestComponent {
    constructor() {
      this.__partials__ = Map();
      this.partial = partial.bind(this);
    }

    linear(a, b, c) {
      return a + b * c;
    }

    partialA(a) {
      return this.partial(this.linear, a);
    }

    partialB(b) {
      return this.partial(this.linear, _, b);
    }

    partialC(c) {
      return this.partial(this.linear, _, _, c);
    }

    partialAB(a, b) {
      return this.partial(this.linear, a, b);
    }

    partialAC(a, c) {
      return this.partial(this.linear, a, _, c);
    }

    partialABC(a, b, c) {
      return this.partial(this.linear, a, b, c);
    }
  }

  const t = new TestComponent();

  it('should return callables', () => {
    expect(t.partialA(3)(2, 3)).to.equal(9);
    expect(t.partialAB(3, 2)(3)).to.equal(9);
    expect(t.partialAC(3, 2)(3)).to.equal(9);
    expect(t.partialABC(3, 2, 3)()).to.equal(9);
  });

  it('should cache functions', () => {
    expect(t.partialA(1)).to.equal(t.partialA(1));
    expect(t.partialB(2)).to.equal(t.partialB(2));
    expect(t.partialC(3)).to.equal(t.partialC(3));

    expect(t.partialA(1)).to.not.equal(t.partialA(2));
    expect(t.partialA(1)).to.not.equal(t.partialB(1));
    expect(t.partialA(1)).to.not.equal(t.partialC(1));

    // technically same *mathematical* function, yet different objects
    expect(t.partialAB(1, 2)).to.not.equal(t.partialAC(1, 2));
  });
});
