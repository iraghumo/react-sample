import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {requestApiData} from "./actions";

class Posts extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  posts = (x,i) =>
    <div key={x.id}>
      <p>{x.title}</p>
      <p>{x.body}</p>
    </div>;

  render() {
    // const {results = []} = this.props.data;
    const results = this.props.data;
    console.log(results); //consoling response
    // return results.length
    //   ? <div>
    //     {results.map(this.posts)}
    //   </div>
    //   : <div>loading...</div>;
    return (
      <div>
        <p>Do you think people going through a divorce should be allowed to be on a worship team?</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({data: state.data});

const mapDispatchToProps = dispatch =>
  bindActionCreators({requestApiData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
