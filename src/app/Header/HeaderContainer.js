import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import authorized from 'shared/authorized';
import { HeaderComponent } from './HeaderComponent';

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
  authorized: state.authorized
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
