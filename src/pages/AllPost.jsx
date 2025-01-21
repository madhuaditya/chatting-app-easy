import React ,{useEffect, useState} from 'react'
import service from "../appwrite/config.js";
import {Container, PostCard} from '../components'

const AllPost = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
     service.getPosts().then((posts)=>{
         if(posts){
             setPosts(posts.documents)
         }
     })
    },[])

    return (
        <div>
            <Container>
                <div className={'flex flex-wrap'}>
                    {posts.map((post) =>
                        (
                            <div key = {post.$id}>
                                <PostCard post={post}/>
                            </div>
                        )
                    )}
                </div>
                </Container>
        </div>
    )
}
export default AllPost
