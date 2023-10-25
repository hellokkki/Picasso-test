import React from 'react'
import PostsList from '../../features/postsList/PostsList'
import { postApi } from '../../shared/postsApi'

function PostsFeed(): React.ReactElement {
  const { data, error, isLoading } = postApi.useGetPostsQuery({ limit: 20, start: 1 })
  console.log(postApi)

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
      <PostsList limit={20} />
    </div>
  )

  return(
    <div>
      loading 
    </div>  
    )
}

export default PostsFeed
