import merge from 'lodash/merge';
import { ObjectMap } from '@identity/type';

export const objectify = <T, U>(
  arr: Array<T>,
  mutator: (value: T, index: number) => ObjectMap<U>,
): ObjectMap<U> => {
  return arr.reduce(
    (acc, value, index) => ({
      ...acc,
      ...mutator(value, index),
    }),
    {},
  );
};

export const mergeObjectify = <T, U>(
  arr: Array<T>,
  mutator: (value: T, index: number) => ObjectMap<U> | void,
): ObjectMap<U> => {
  return arr.reduce((acc, value, index) => {
    const result = mutator(value, index);
    return merge(acc, result);
  }, {});
};
