import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import PostCard from '../../shared/UI/PostCard';
import { IPostsListProps } from './interface';

const PostsList: React.FC<IPostsListProps> = ({ posts }) => {
  // const [scrollY, setScrollY] = useState(0);
  // const scrollElementRef = useRef<HTMLDivElement>(null);
  // useLayoutEffect(() => {
  //   const scrollElement = scrollElementRef.current;
  //   if (!scrollElement) return;
  //   const handleScroll = () => {
  //       const scrollTop = scrollElement.scrollTop;
  //       console.log(scrollTop)
  //       setScrollY(scrollTop);
  //   }
  //   handleScroll();
  //   console.log(scrollElement
  //   scrollElement.addEventListener('scroll', handleScroll);
  //   return () => scrollElement.removeEventListener('scroll', handleScroll);
  // }, [])
  // useEffect(() => {
  //    console.log(scrollY)
  // }, [scrollY])


 const handleScroll = (e: React.UIEvent<HTMLElement>): void => {
  e.stopPropagation()
  console.log({
    event: e,
    target: e.target,
    scrollTop: e.currentTarget.scrollTop
  })
 }

 console.log(scrollY)

 if(posts)
  return (
    <ol>
     {posts.map((post) => {
      return(
        <li>
          <PostCard 
           number={post.number}
           title={post.title}
           description={post.description}
          />
        </li>
      )
     })}
    </ol>
  )
}

export default PostsList
