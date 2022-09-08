import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostsView = () => {
    const {isLoading,posts,error} = useSelector((state)=>state.posts);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPosts());
    },[])
    return(
        <div style={{marginTop:"10%"}}>
            <h1>Post view</h1>
            {
                isLoading && <h3>Loading...</h3>
            }
            {
                error && <h3>{error}</h3>
            }
            <section>
            {
                posts && posts.map((post,index)=>{
                    return <article key={index}>
                        <h1>{post.title}</h1>
                    </article>
                })
            }
            </section>


        </div>
    );
};

export default PostsView;