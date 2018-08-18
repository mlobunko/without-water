import { NAME } from '../constants';
import { getAll } from '../selectors';

describe('selector getAll', () => {
  it('should return part of state', () => {
    const state = {
      [NAME]: 'true'
    };
    expect(getAll(state)).toEqual('true');
  });
});
