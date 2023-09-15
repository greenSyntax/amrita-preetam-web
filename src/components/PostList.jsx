import React from 'react'
import Footer from './Footer';
import axios from 'axios';

export default function PostList() {

  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    axios.get("https://mocki.io/v1/65289720-258e-4217-a1c1-7f8f7bda5976")
      .then(response => {
        setPosts(response.data.post_data)
      })
      .catch(error => {
        console.log(error.message)
      })
  }, [])

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">📕 Yours Amrita Preetam,</h2>
            <p className="mt-2 text-lg leading-10 text-gray-600">
              Poet • Essayist • Novelist • Progressive
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.uid && console.log(post)} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                    {post.date_formatted}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">                    
                      {post.title}
                  </h3>
                  <h5>
                    {post.subtitle}
                  </h5>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.thumbnail_image} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {post.author_name}
                    </p>
                    <p className="text-gray-600">{post.author_subtext}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}