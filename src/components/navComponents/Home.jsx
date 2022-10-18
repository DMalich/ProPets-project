import React from "react";
import { fb } from "../../firebase_config";
import PostForm from "./PostForm";

const db = fb.firestore();

class Home extends React.Component {
  state = { posts: null };

  componentDidMount() {
    // console.log("mounted");
    db.collection("posts")
      .where("email", "!=", "")
      .get()
      .then((snapshot) => {
        const posts = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          posts.push(data);
        });
        this.setState({ posts: posts });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <ul>
        <div className="home">
          {this.state.posts &&
            this.state.posts.map((p, i) => {
              return <PostForm key={i} post={p} />;
            })}
        </div>
      </ul>
    );
  }
}

export default Home;
