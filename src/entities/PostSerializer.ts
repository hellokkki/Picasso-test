
import { TPost } from "../shared/typing/types/TPost";
import { Post } from "./Post";

export class PostSerializer {
   public serializePosts(posts: TPost[]) {
    if (posts)
     return posts.map(post => new Post(post.id.toString(), post.title, post.body)
     )
   }
   }
