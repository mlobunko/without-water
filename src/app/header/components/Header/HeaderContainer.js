import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import HeaderComponent from './HeaderComponent';

import authorized from 'shared/authorized';

export class HeaderContainer extends React.Component {
  state = {
    isOpen: false
  };

  handleAddRemoveEventListener = () => {
    if (this.state.isOpen) {
      document.addEventListener('click', this.handleDocumentClick);
    } else {
      document.removeEventListener('click', this.handleDocumentClick);
    }
  };

  toggle = () => {
    this.setState(
      {
        isOpen: !this.state.isOpen
      },
      this.handleAddRemoveEventListener
    );
  };

  handleDocumentClick = e => {
    const container = this.element;
    if (e.target !== container && !container.contains(e.target)) {
      this.toggle();
    }
  };

  componentWillUnmount = () => {
    document.removeEventListener('click', this.handleDocumentClick);
  };

  render() {
    return (
      <div ref={element => (this.element = element)}>
        <HeaderComponent
          isOpen={this.state.isOpen}
          logOut={this.props.logOut}
          toggle={this.toggle}
          authorized={this.props.authorized}
          authorizedActionsLogOut={this.props.authorizedActionsLogOut}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authorized: authorized.selectors.getAll(state)
});

const mapDispatchToProps = {
  authorizedActionsLogOut: authorized.actions.logOut
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeaderContainer)
);

HeaderContainer.propTypes = {
  authorized: PropTypes.bool
};
