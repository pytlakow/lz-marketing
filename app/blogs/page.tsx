import React from 'react';
import blogs from '../../public/blogs_data';

export default function BlogsPage() {
  return (
    <>
         <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">Our latest  blog</h2>
          <div className="flex justify-center  gap-y-8 flex-wrap">
        {blogs.map((blog) => (
        <div key={blog.slug} className="group w-full max-lg:max-w-xl lg:w-[32%] border border-gray-300 rounded-2xl mx-2 mb-4" >
          <div className="flex items-center">
            <img src={`/blogs/${blog.slug}/${blog.banner_image}`} alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover"/>
          </div>
          <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
            <span className="text-orange-600 font-medium mb-3 block">{blog.updated_date}</span>
            <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">{blog.meta_title}</h4>
            <p className="text-gray-500 leading-6 mb-10">{blog.meta_description}</p>
            <a href={`/blogs/${blog.slug}`} className="cursor-pointer text-lg text-orange-600 font-semibold">Read more..</a>
          </div>
        </div>
        ))}
        </div>
        </div>
      </section>
    </>

  );
}