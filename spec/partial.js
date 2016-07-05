import { expect } from 'chai';
import { Map } from 'immutable';
import partial from '../partial';

describe('partial', () => {
  describe('should cache functions', () => {
    class TestComponent {
      constructor() {
        this.__partials__ = Map();
        this.partial = partial.bind(this);
      }

      add(a, b) {
        return a + b;
      }

      makeAddFunction(a) {
        return this.partial(this.add, a);
      }
    }

    const t = new TestComponent();
    const f1 = t.makeAddFunction(3);
    const f2 = t.makeAddFunction(3);
    console.log(f1);
    console.log(f2);
    expect(f1).to.equal(f2);
  });
});
