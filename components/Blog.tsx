import { PostType } from "../types/PostType";
import Post from "./Post";
import Title from "./Title";
import { FC } from "react";

interface Props {
  Posts: [PostType];
}

const Blog: FC<Props> = ({ Posts }) => {
  return (
    <div id="blog" className="mt-20 md:mx-20">
      <Title num={5} title="Blog" />

      <div className="flex flex-wrap justify-between mt-10">
        {Posts.slice(0, 3).map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
