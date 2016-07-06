import { List } from 'immutable';
import _partial from 'lodash.partial';

export default function partial(func, ...args) {
  const key = List.of(func, ...args);
  if (!this.__partials__.has(key)) {
    this.__partials__ = this.__partials__.set(key, _partial(func, ...args));
  }

  return this.__partials__.get(key);
}
