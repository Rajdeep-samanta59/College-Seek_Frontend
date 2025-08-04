import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import Comments from './comments/Comments';

const DetailView = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  const { account } = useContext(DataContext);
  const navigate = useNavigate();
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const url =
    'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await API.getPostById(id);
        if (response.isSuccess) {
          setPost(response.data);
        }
      } catch (error) {
        console.error('Error displaying the post details', error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteBlog = async () => {
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    try {
      let response = await API.deletePost(post._id);
      if (response.isSuccess) {
        navigate('/');
      }
    } catch (error) {
      console.error('Error while deleting the post', error);
    }
  };

  const handleImageClick = () => {
    window.open(post.picture, '_blank');
  };

  const handleFileClick = () => {
    window.open(post.fileUp, '_blank');
  };

  return (
    <div className="mx-12 my-12 md:mx-0">
      <img 
        src={post.picture || url} 
        alt="post" 
        onClick={handleImageClick}
        className="w-full h-96 object-cover cursor-pointer"
      />
      
      <div className="float-right">
        {account.username === post.username && (
          <>
            <Link to={`/update/${post._id}`}>
              <button className="m-1.5 p-1.5 border border-gray-500 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-green-500 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </button>
            </Link>
            <button 
              onClick={deleteBlog} 
              className="m-1.5 p-1.5 border border-gray-500 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-red-500 hover:text-white"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
              </svg>
            </button>
          </>
        )}
      </div>
      
      <h1 className="text-4xl font-semibold text-center my-12 break-words">
        {post.title}
      </h1>
      
      <div className="text-gray-500 flex my-5 sm:block">
        <Link to={`/?username=${post.username}`} className="no-underline text-inherit">
          <p>
            Author: <span className="font-semibold">{post.username}</span>
          </p>
          <p>
            Download File: 
            <button onClick={handleFileClick} className="ml-1">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM12 17l-5-5h3V9h4v3h3l-5 5z"/>
              </svg>
            </button>
          </p>
        </Link>
        <p className="ml-auto sm:ml-0">{new Date(post.createdDate).toDateString()}</p>
      </div>
      
      <p className="break-words">{post.description}</p>
      
      <Comments post={post} />

      {/* Delete confirmation dialog */}
      {isDeleteDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-medium mb-4">Delete Confirmation</h3>
            <p className="mb-6">Are you sure you want to delete this Seek?</p>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setDeleteDialogOpen(false)} 
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete} 
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailView;
