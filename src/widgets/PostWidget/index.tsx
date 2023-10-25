import React from 'react'
import { postApi } from '../../shared/postsApi'
import { IPostWidgetProps } from './interface'


const PostWidget: React.FC<IPostWidgetProps> = ({ title }) => {
    const data = postApi.useGetPostByTitleQuery({ title })
    
  return (
    <div>
      
    </div>
  )
}

export default PostWidget
