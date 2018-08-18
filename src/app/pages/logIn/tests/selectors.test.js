import { NAME } from '../constants';
import { getAll } from '../selectors';

describe('getAll', () => {
  it('should return right state', () => {
    const state = {
      [NAME]: 'true'
    };
    expect(getAll(state)).toEqual(state[NAME]);
  });
});
