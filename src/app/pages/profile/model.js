import * as icons from './icons';

export const getProfile = id =>
  `https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`;

export const placeWebIconFirst = arr => {
  return arr.sort(el => {
    return el.label === 'web' ? -1 : 1;
  });
};

export const getIconByName = iconName => {
  switch (iconName) {
    case 'telegram':
      return icons.IconTelegram;
    case 'vk':
      return icons.IconVk;
    case 'twitch':
      return icons.IconTwitch;
    case 'twitter':
      return icons.IconTwitter;
    case 'web':
      return icons.IconGlobe;
    case 'youtube':
      return icons.IconYoutube;
    default:
      return undefined;
  }
};
