type Post = {
  node: { title: string; id: string; content: string; uri: string; date: string };
};

export default async function TestBlog() {
  const query = `query NewQuery {
    posts(first: 3) {
      edges {
        node {
          title
          date
          content
          uri
        }
      }
    }
  }`;

  const posts = await fetch("http://wordpress:80/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("HTTPエラー " + res.status);
      }
      return res.json();
    })
    .then((json) => {
      return json.data.posts.edges;
    })
    .catch((error) => {
      console.error("エラー: " + error.message);
    });

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post: Post, i: number) => {
        // contentを最大20文字に制限
        const truncatedContent =
          post.node.content.length > 30
            ? post.node.content.substring(0, 30) + "..."
            : post.node.content;
        // 日付のフォーマットを調整して表示
        const dateObject = new Date(post.node.date);
        const formattedDate = `${dateObject.getFullYear()}/${dateObject.getMonth() + 1
          }/${dateObject.getDate()}`;
        return (
          <a href={post.node.uri} key={i}>
            <div>{post.node.title}</div>
            <div>{formattedDate}</div>
            <div dangerouslySetInnerHTML={{ __html: truncatedContent }}></div>
          </a>
        );
      })}
    </div>
  );
}
