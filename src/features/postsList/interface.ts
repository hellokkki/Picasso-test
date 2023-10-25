import { TPost, TPostSerialized } from "../../shared/typing/types/TPost";

export interface IPostListProps {
   limit: number,
}
export interface IPostsListState {
   posts: TPost[],
   hasNextPage: boolean 
   isLoading: boolean | undefined
}