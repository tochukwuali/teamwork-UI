import React from 'react'
import PostItem from './PostItem'

const Posts = () => {

   const state = {
    posts: [
      {
        id: 1,
        text: 'dummy text that is Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum asperiores quas laudantium sed molestiae magni facere id veritatis delectus atque!'
      },
      {
        id: 2,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, corporis'
      }
    ]
  }

    return (
      <div>
      <ul>
        {state.posts.map((post)=>(
          <PostItem key={post.id} post={post}/>
        ))}
      </ul>

      </div>
    );
}

export default Posts
