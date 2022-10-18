import React from "react";
import { fb } from "../../firebase_config";
import PostForm from "./PostForm";

const db = fb.firestore();

class Favorites extends React.Component {
    state = { posts: null };

    componentDidMount() {
        db.collection("posts")
            .where('isFavorite', '==', true)
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
                <div className="favorites">
                    {this.state.posts && this.state.posts.map((p, i) => {
                        return <PostForm key={i} post={p} />;
                    })}
                </div>
            </ul>
        )
    }
}

export default Favorites;