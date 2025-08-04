import React, { useContext, useState } from 'react';
import { API } from '../../../service/api';
import { DataContext } from '../../../context/DataProvider';

const Comment = ({ comment, setToggle }) => {
  const { account } = useContext(DataContext);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const removeComment = async () => {
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await API.deleteComment(comment._id);
      if (response.isSuccess) {
        setToggle((prevState) => !prevState);
        setDeleteDialogOpen(false);
      }
    } catch (error) {
      console.error('Error on removing the comments ', error);
    }
  };

  return (
    <div className="mt-8 bg-gray-100 p-2.5 rounded">
      <div className="flex mb-1.5">
        <span className="font-semibold text-lg mr-5">{comment.name}</span>
        <span className="text-sm text-gray-500">{new Date(comment.date).toDateString()}</span>
        {comment.name === account.username && (
          <button 
            onClick={removeComment} 
            className="ml-auto cursor-pointer hover:text-red-500 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
            </svg>
          </button>
        )}
      </div>
      <p>{comment.comments}</p>

      {/* Delete confirmation dialog */}
      {isDeleteDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-medium mb-4">Delete Confirmation</h3>
            <p className="mb-6">Are you sure you want to delete this comment?</p>
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

export default Comment;
