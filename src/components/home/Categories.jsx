import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { categories } from '../../constants/data';

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    return (
        <div className="p-4">
            <Link to={`/create?category=${category || ''}`} className="block">
                <button className="w-full bg-blue-500 text-white py-3 px-4 rounded mb-5 hover:bg-blue-600 transition-colors duration-300 font-medium">
                    Create Seek
                </button>
            </Link>
            
            <div className="border border-gray-300 rounded">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-300">
                    <Link 
                        to="/" 
                        className={`block text-center hover:font-bold hover:text-blue-600 transition-all duration-300 ${
                            !category ? 'font-bold text-blue-600' : 'font-normal'
                        }`}
                    >
                        ALL SEEK
                    </Link>
                </div>
                
                <div className="divide-y divide-gray-300">
                    {categories.map((categoryItem) => (
                        <div key={categoryItem.id} className="px-4 py-3">
                            <Link
                                to={`/?category=${categoryItem.type}`}
                                className={`block text-center hover:font-bold hover:text-blue-600 transition-all duration-300 ${
                                    category === categoryItem.type ? 'font-bold text-blue-600' : 'font-normal'
                                }`}
                            >
                                {categoryItem.type}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
