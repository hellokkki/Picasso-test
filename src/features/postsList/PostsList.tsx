import React, {
  useEffect,
  useState,
} from "react";
import PostCard from "../../shared/UI/PostCard";
import { postApi } from "../../shared/postsApi";
import generateUniqueId from "generate-unique-id";

const PostsList: React.FC<{ limit: number }> = ({
  limit,
}): React.ReactElement => {
  const [currentPost, setCurrentPost] = useState(0);
  const { data, isLoading } = postApi.useGetPostsQuery({ limit: 20, start: currentPost });
  const [isMyFetching, setIsFetchingDown] = useState(false);
  const [isMyFetchingUp, setIsMyFetchingUp] = useState(false);

  useEffect(() => {
    if (isMyFetching) {
      setCurrentPost((prev) => {
        return prev < 93 ? prev + 1 : prev;
      });
      setIsFetchingDown(false);
      // fetchNextPagePosts()
    }
  }, [isMyFetching]);

  useEffect(() => {
    if (isMyFetchingUp) {
      setCurrentPost((prev) => {
        return prev > 0 ? prev - 1 : prev;
      });
      setIsMyFetchingUp(false);
    }
  }, [isMyFetchingUp]);

  const fetchNextPagePosts = () => {
    const { data } = postApi.endpoints.getPosts.useQuery({
      limit: limit,
      start: currentPost,
    });
  return data
};


  const scrollHandler = (e: any): void => {
    if (e.target.documentElement.scrollTop < 50) {
      setIsMyFetchingUp(true);
    }
    if (
      e.target.documentElement.scrollHeight -
        e.target.documentElement.scrollTop -
        window.innerHeight <
      50
    ) {
      setIsFetchingDown(true);
      window.scrollTo(
        0,
        e.target.documentElement.scrollHeight +
          e.target.documentElement.scrollTop
      );
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <ul id="scrollable">
      {!isLoading && data ? (
        data.map((post) => {
          return (
            <li key={generateUniqueId()}>
              <PostCard
                number={post.id.toString()}
                title={post.title}
                description={post.body}
              />
            </li>
          );
        })
      ) : (
        <></>
      )}
    </ul>
  );
};

export default PostsList;
