import React from "react";
import { connect } from "react-redux";
import { setErrorsToNull } from "../redux/actions/settingErrorActions";
import { fetchNews } from "../saga/actions/fetchingActions";
import { Alert } from "reactstrap";
import { Articles } from "../components/Articles";
import { CounterNews } from "../components/CounterNews";
import { Loader } from "../components/Loader";

export class News extends React.Component {
  componentDidMount = () => {
    this.props.setErrorsToNull();
    if (!this.props.news.length) {
      this.props.fetchNews();
    } else {
      return;
    }
  };
  componentWillUnmount = () => {
    this.props.setErrorsToNull();
  };

  render() {
    return (
      <div className="container-news">
        <div>
          <h1>News</h1>
        </div>
        {this.props.fetching ? (
          <div className="container-vertical-60vh">
            <Loader />
          </div>
        ) : !this.props.isError ? (
          <React.Fragment>
            <div className="container-max-width container-articles">
              <Articles news={this.props.news} />
            </div>
            <CounterNews total={this.props.news.length} />
          </React.Fragment>
        ) : (
          <div className="container-vertical-60vh">
            <Alert color="danger">{this.props.serverError}</Alert>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.user.fetching,
  news: state.user.news,
  isError: state.user.isError,
  serverError: state.user.errors.serverError
});
export default connect(
  mapStateToProps,
  { fetchNews, setErrorsToNull }
)(News);
