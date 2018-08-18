import * as icons from '../icons';
import { getProfile, placeWebIconFirst, getIconByName } from '../model';

describe('getProfile', () => {
  it('return url', () => {
    const id = 1;
    const expectedUrl =
      'https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/1';
    expect(getProfile(id)).toEqual(expectedUrl);
  });
});

describe('placeWebIconFirst', () => {
  const initialArray = [
    { link: '123', label: 'fan' },
    { link: '124', label: 'web' }
  ];
  const filteredArray = placeWebIconFirst(initialArray);
  expect(filteredArray[0].label).toEqual('web');
});

describe('getIconByName', () => {
  it('return default', () => {
    const expectedIcon = undefined;
    const iconName = '';
    expect(getIconByName(iconName)).toEqual(expectedIcon);
  });

  it('return icon telegram', () => {
    const expectedIcon = icons.IconTelegram;
    const iconName = 'telegram';
    expect(getIconByName(iconName)).toEqual(expectedIcon);
  });

  it('return icon vk', () => {
    const expectedIcon = icons.IconVk;
    const iconName = 'vk';
    expect(getIconByName(iconName)).toEqual(expectedIcon);
  });

  it('return icon twitch', () => {
    const expectedAnswer = icons.IconTwitch;
    const iconName = 'twitch';
    expect(getIconByName(iconName)).toEqual(expectedAnswer);
  });

  it('return icon twitch', () => {
    const expectedIcon = icons.IconTwitter;
    const iconName = 'twitter';
    expect(getIconByName(iconName)).toEqual(expectedIcon);
  });

  it('return icon web', () => {
    const expectedIcon = icons.IconGlobe;
    const iconName = 'web';
    expect(getIconByName(iconName)).toEqual(expectedIcon);
  });

  it('return icon youtube', () => {
    const expectedIcon = icons.IconYoutube;
    const iconName = 'youtube';
    expect(getIconByName(iconName)).toEqual(expectedIcon);
  });
});
