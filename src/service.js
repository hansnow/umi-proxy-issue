export const getPosts = () => fetch("/api/posts").then(resp => resp.json());

export const createPost = () =>
  fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(resp => resp.json());
