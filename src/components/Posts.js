import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useApi } from "../contexts/ApiProvider";
import Post from './Post';

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export default function Posts({ content }) {

    const [posts, setPosts] = useState();
    const api = useApi();

    let url;
    switch (content) {
      case 'feed':
      case undefined:
        url = '/feed';
        break;
      case 'explore':
        url = '/posts';
        break;
      default:
        url = `/users/${content}/posts`;
    }

    useEffect(() => {
      (async () => {
        const response = await api.get(url);
        if (response.ok) {
          setPosts(response.body.data);
        } else {
          setPosts(null);
        }
      })();
    }, [api, url]);

    return (
        <>
            {posts === undefined ?
                <Spinner animation="border" />
            :
                <>
                    {posts === null ?
                        <p>Could not retrieve blog posts.</p>
                    :
                        posts.map(post => <Post key={post.id} post={post} />)                   
                    }
                </>
            }
        </>
    );

}