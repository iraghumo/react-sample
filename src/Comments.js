import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import TextInput from "./TextInput";
import {requestApiData} from "./actions";
import Like from "./Like";
import Reply from "./Reply";

class Comments extends React.Component {
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
    return(
      <div className="_commentsWrapper">
        <p>This is the most absurd question i've ever read. Should we allow any person to lead worship if we think they're sinners? Those saying no should take a long look in the minor and put down their stones. Worry about the plank in your own eye before pointing out the splinter in someone else's.</p>
        <div>
          <Like/> . <Reply/>
        </div>
        <TextInput type="text" placeholder="Write a reply..." />
      </div>);
  }
}

const mapStateToProps = state => ({data: state.data});

const mapDispatchToProps = dispatch =>
  bindActionCreators({requestApiData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
