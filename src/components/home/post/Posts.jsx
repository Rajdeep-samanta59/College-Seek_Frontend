import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { API } from '../../../service/api';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => { 
            try {
                let response = await API.getAllPosts({ category : category || '' });
                if (response.isSuccess) {
                    setPosts(response.data);
                }
            } catch (error) {
                console.error("Error in fetching the getallpost API: ",error);
            }
        }
        fetchData();
    }, [category]);

    return(
        <div className="p-4">
            {posts?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {posts.map(post => (
                        <div key={post._id} className="w-full">
                            <Link className="block no-underline text-inherit" to={`details/${post._id}`}>
                                <Post post={post} />
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-8">
                    <div className="text-red-500 text-lg mb-4">
                        No SEEK is Available for Selected Category
                    </div>
                    <div className="text-green-500 text-lg">
                        Create SEEK To See
                    </div>
                </div>
            )}
        </div>
    )
}

export default Posts;