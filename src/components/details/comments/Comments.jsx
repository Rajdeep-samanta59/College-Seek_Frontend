import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../../context/DataProvider';
import { API } from '../../../service/api';
import Comment from './Comment';

const initialValue = {
    name: '',
    postId: '',
    date: new Date(),
    comments: '',
};

const Comments = ({ post }) => {
    const url = 'https://static.thenounproject.com/png/12017-200.png'; //dummy user image

    const [comment, setComment] = useState(initialValue);
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [loading, setLoading] = useState(false);

    const { account } = useContext(DataContext);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await API.getAllComments(post._id);
                if (response.isSuccess) {
                    setComments(response.data);
                }
            } catch (error) {
                console.error('Error getting the comment data ', error);
            }
        };
        getData();
    }, [toggle, post]);

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: account.username,
            postId: post._id,
            comments: e.target.value,
        });
    };

    const addComment = async () => {
        try {
            if (!comment.comments.trim()) {
                console.warn('Comment is empty. Not Echoing.');
                return;
            }

            setLoading(true); // Set loading state to true during posting
            let response = await API.newComment(comment);

            if (response.isSuccess) {
                setComment(initialValue);
            }

            setToggle((prevState) => !prevState);
        } catch (error) {
            console.error('Error on adding the comments ', error);
        } finally {
            setLoading(false); // Set loading state back to false after posting attempt
        }
    };

    return (
        <div>
            <div className="mt-24 flex">
                <img 
                    src={url} 
                    alt="dp" 
                    className="w-12 h-12 rounded-full"
                />
                <textarea
                    rows={5}
                    placeholder="Want to Echo something?"
                    onChange={(e) => handleChange(e)}
                    value={comment.comments}
                    className="h-24 w-full mx-5 resize-none border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded h-10 hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 flex items-center"
                    onClick={(e) => addComment(e)}
                    disabled={loading}
                >
                    {loading ? 'Echoing' : 'Echo'}
                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                </button>
            </div>
            <div>
                {comments &&
                    comments.length > 0 &&
                    comments.map((comment) => (
                        <Comment key={comment._id} comment={comment} setToggle={setToggle} />
                    ))}
            </div>
        </div>
    );
};

export default Comments;
