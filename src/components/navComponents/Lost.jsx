import React from "react";
import { fb } from "../../firebase_config";
import PostForm from "./PostForm";

const db = fb.firestore();

class Lost extends React.Component {
    state = { posts: null };

    componentDidMount() {
        db.collection("posts")
            .where("found", "==", false)
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
                <div className="lost">
                    {this.state.posts && this.state.posts.map((p, i) => {
                            return <PostForm key={i} post={p} />;
                        })}
                </div>
            </ul>
        );
    }
}

export default Lost;
