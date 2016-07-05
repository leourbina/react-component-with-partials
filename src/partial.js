import { List } from 'immutable';

export default function partial(func, ...args) {
  const key = List.of(func, ...args);
  if (!this.__partials__.has(key)) {
    this.__partials__ = this.__partials__.set(key, () => func.apply(this, ...args));
  }

  return this.__partials__.getIn(key);
}
