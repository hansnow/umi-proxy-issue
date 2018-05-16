import { Button } from "antd";
import { getPosts, createPost } from "../service";

export default () => (
  <div>
    <Button type="primary" onClick={getPosts}>
      get posts
    </Button>
    <Button type="danger" onClick={createPost}>
      create post
    </Button>
  </div>
);
