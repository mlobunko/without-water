import React from 'react';
import { shallow } from 'enzyme';

import { SocialComponent } from '../SocialComponent';
import { NAME } from '../../../../constants';
import social from '../../../social';
import * as model from '../../../../model';
import { getSocialWebFirst } from '../../../../selectors';

describe('render', () => {
  const state = {
    [NAME]: {
      [social.constants.NAME]: [
        { label: 'vk', link: '123' },
        { label: 'web', link: '321' }
      ]
    }
  };
  it('renders correctly', () => {
    const wrapper = shallow(
      <SocialComponent
        getIconByName={model.getIconByName}
        social={getSocialWebFirst(state)}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
