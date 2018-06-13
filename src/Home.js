import React, { Fragment } from "react";

import Posts from "./Posts";
import Comments from "./Comments";
import Like from "./Like";
import Comment from "./Comment";
import Share from "./Share";

class Home extends React.Component {

  render() {
    const styles = {
      fontSize: '12px'
    }
    return(
      <div>
        <Posts/>
        <div>
          <Like/> . <Comment/> . <Share/>
        </div>
        <Comments/>
        <p style={styles}>
          [Dev Comments:: Printing async responses in console for now.]
        </p>
      </div>
    );
  }
}

export default Home;
