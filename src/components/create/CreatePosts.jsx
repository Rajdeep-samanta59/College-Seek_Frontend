import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/api';

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date(),
    fileUp: '',
};

const CreatePosts = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // New error state

    const { account } = useContext(DataContext);

    const url = post.picture
        ? post.picture
        : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append('file', file);

                try {
                    const response = await API.uploadFile(data);
                    setPost((prevPost) => ({ ...prevPost, picture: response.data.url }));
                } catch (error) {
                    console.error('Error occurred while uploading the image', error);
                }
            }
        };

        getImage();
        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file, post.categories, location.search, account.username]);

    const handleImageClick = () => {
        window.open(post.picture, '_blank');
    };

    const handleCloudUploadIconClick = () => {
        window.open('https://college-seek.vercel.app/', '_blank');
    };

    const savePost = async () => {
        try {
            if (!post.title || !post.description) {
                setError('Title and Description Both are required to create a Seek');
                return;
            }

            setLoading(true);
            let response = await API.createPost(post);
            if (response.isSuccess) {
                navigate('/');
            }
        } catch (error) {
            console.error('ERROR IN POSTING:: CreatePost', error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setPost((prevPost) => ({ ...prevPost, [e.target.name]: e.target.value }));
        setError(null); // Clear the error when the user starts typing
    };

    return (
        <div className="mx-12 my-12 md:mx-0">
            <img 
                src={url} 
                alt="post" 
                onClick={handleImageClick}
                className="w-full h-96 object-cover cursor-pointer"
            />
            
            <div className="mt-2.5 flex flex-row">
                <label htmlFor="fileInput" className="cursor-pointer">
                    <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                    </svg>
                </label>
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <input
                    type="text"
                    onChange={(e) => handleChange(e)} 
                    name="title" 
                    placeholder="Title"
                    className="flex-1 text-2xl border-none outline-none"
                />
                {loading ? (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50" disabled>
                        Uploading...
                    </button>
                ) : (
                    <button 
                        onClick={() => savePost()} 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                    >
                        Publish
                    </button>
                )}
            </div>
            
            {error && <p className="text-red-500 mt-2">{error}</p>}
            
            <div className="mt-2.5 flex flex-row">
                <button 
                    onClick={handleCloudUploadIconClick} 
                    className="cursor-pointer"
                >
                    <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
                    </svg>
                </button>
                <input
                    type="text"
                    onChange={(e) => handleChange(e)} 
                    name="fileUp" 
                    placeholder="File Upload Link"
                    className="flex-1 mx-8 text-lg border-none outline-none"
                />
            </div>
            
            <textarea 
                rows={5} 
                placeholder="Space you Seek..." 
                name="description" 
                onChange={(e) => handleChange(e)}
                className="w-full border-none mt-12 text-lg focus:outline-none resize-none"
            />
        </div>
    );
};

export default CreatePosts;
