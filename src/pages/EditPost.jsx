import React, {useEffect, useState} from 'react'
import {Container, WaitingPage, PostForm} from "../components";
import service from '../appwrite/config.js'
import {useParams, useNavigate} from "react-router-dom";
const EditPost = () => {
    const navigate = useNavigate()
    const {slug} = useParams();

    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState({})

    useEffect( () => {
        const data =  service.getPost(slug).then((post) => {
            if (post) {

                setPost(post)
                setLoading(false)

            } else {
                navigate('/')
            }
        })
    },[slug, navigate])

    return( !loading ? <Container>
            <div key = {post.$id}>
                <PostForm post = {post} />
            </div>
    </Container> : <WaitingPage />)
}
export default EditPost
