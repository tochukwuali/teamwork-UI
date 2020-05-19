import React from 'react'

export const PostItem = ({post}) => {
        return (
            <div>
                <li>{post.text}</li>
            </div>
        )
    }

export default PostItem
