import React from 'react';
import { addEllipsis } from '../../../utils/common-utils';

const Post = ({ post }) => {
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';

    return (
        <div className="border border-gray-300 rounded-lg m-2.5 flex items-center flex-col h-96 overflow-hidden transition-transform duration-300 hover:scale-105">
            <img 
                src={url} 
                alt="post" 
                className="w-full object-cover rounded-t-lg h-40 transition-transform duration-300 hover:scale-105"
            />
            <p className="text-gray-500 text-xs px-1.5 pb-1.5">
                {post.categories}{post.fileUp ? " (File Uploaded)" : ""}
            </p>
            <h3 className="text-lg font-semibold px-1.5 pb-1.5">
                {addEllipsis(post.title, 20)}
            </h3>
            <p className="text-gray-500 text-xs px-1.5 pb-1.5">
                Author: {post.username}
            </p>
            <p className="text-sm text-center break-words px-1.5 pb-1.5">
                {addEllipsis(post.description, 100)}
            </p>
        </div>
    );
};

export default Post;
