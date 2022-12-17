
export default function Posts() {

    const posts = [
        {
          id: 1,
          text: 'Hello, world',
          timestamp: 'just now',
          author: {
            username: 'bob',
          },
        },
        {
          id: 2,
          text: 'Nothing to say',
          timestamp: 'some time ago',
          author: {
            username: 'bob',
          }, 
        }
    
    ];

    return (
        <>
            {posts.length === 0 ?
                <p>There a no blog posts.</p>
            :
                posts.map(post => {
                    return (
                        <p key={post.id}>
                        <b>{post.author.username}</b> &mdash; {post.timestamp}
                        <br />
                        {post.text}
                        </p>
                    );
                })
            }
        </>
    );

}