import React, {useEffect, useState} from 'react'
import service from '../appwrite/config.js'
import {Container, PostCard, WaitingPage} from "../components";
import {useSelector} from "react-redux";
const Home = () => {
    const [posts, setPosts] = useState([])
        const user = useSelector((state) => state.auth.userData)
    useEffect( () => {
        async  function fetdata() {
           await service.getPosts().then((posts) => {
                if (posts) {

                    setPosts(posts.documents)
                }
            })
        }
    fetdata()
    },[  ])


    return ( posts?.length > 0 ? <div> <Container>
                <div className={'flex flex-wrap'}>
                    {posts.map((post) =>(
                        <div key = {post.$id}>
                            <PostCard post={post}>
                                {post.content}
                            </PostCard>
                        </div>
                    ))}

                </div>
            </Container></div> :
        <div className={'flex bg-gray-500 flex-col items-center justify-center h-screen'}>
           <h2>
               Login to see posts
           </h2>
        </div>
    )
}
export default Home
