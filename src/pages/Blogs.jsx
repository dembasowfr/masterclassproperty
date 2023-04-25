import React from "react";

import {Banner, Card, Detail, Related, Search} from '../components/blog/'

const Blogs = () => {

    return (
      <main className="bg-gray-100 dark:bg-gray-900">
        <Banner />
          <Search />
          <div className='flex flex-col md:flex-row mx-auto  px-8 py-8 bg-yellow-200 items-center justify-center w-full h-full'>
            <div className='flex flex-col md:w-1/2 w-full'>
              <Card />
            </div>
            <div className='flex flex-col md:w-1/2 w-full'>
              <Related />
            </div>
          </div>
      </main>
    );
};


export default Blogs;