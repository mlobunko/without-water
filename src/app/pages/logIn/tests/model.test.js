import { init, validator } from '../model';

describe('init', () => {
  it('return object', () => {
    const objBody = {
      a: '1',
      b: '2'
    };
    const expectedObject = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objBody)
    };
    expect(init(objBody)).toEqual(expectedObject);
  });
});

describe('validator', () => {
  it('should validate', () => {
    const email = 'fawf@fa.com';
    const password = '123456';
    const expectedObject = {
      email: true,
      password: true
    };
    expect(validator(email, password)).toEqual(expectedObject);
  });

  it('should not validate', () => {
    const email = 'fawf@fa';
    const password = '123';
    const expectedObject = {
      email: false,
      password: false
    };
    expect(validator(email, password)).toEqual(expectedObject);
  });
});
