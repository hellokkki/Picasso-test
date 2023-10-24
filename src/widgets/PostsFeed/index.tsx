import React from 'react'
import PostsList from '../../features/postsList/PostsList'
import { postApi } from '../../shared/postsApi'
import { PostSerializer } from '../../entities/PostSerializer'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

function PostsFeed(): React.ReactElement {
  const { data, error, isLoading } = postApi.useGetPostsQuery({ limit: 20 })
  console.log(postApi)
  console.log(error as FetchBaseQueryError)
  const serializer = new PostSerializer()

  console.log(data)

  if (error)
  return(
    <div>
      error
    </div> 
    )

    if (!isLoading && data)
  return (
    <div>
      <PostsList posts={serializer.serializePosts(data)}/>
    </div>
  )

  return(
    <div>
      loading 
    </div>   //make it fallback spinner
    )
}

export default PostsFeed
