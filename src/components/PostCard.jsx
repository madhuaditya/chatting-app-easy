import React from 'react'
import service from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard(post) {

    return (
        <Link to={`/post/${post.post.$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img  src={service.getFilePreview(post.post.featuredImage)} alt={post.post.title}
                         className='rounded-xl h-60  '/>

                </div>
                <h2
                    className='text-xl font-bold'
                >{post.post.title}</h2>
            </div>
        </Link>
    )
}


export default PostCard