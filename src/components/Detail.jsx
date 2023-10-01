import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AppConstant from '../utils/AppConstant';

function Detail() {

    const [postData, setPostData] = React.useState({})
    const params = useParams()

    React.useEffect(() => {
        console.log(`🌎: ${AppConstant.getDetail}${params.postId}.json`)
        axios.get(`${AppConstant.getDetail}${params.postId}.json`)
            .then(response => {
                let data = response.data
                setPostData({ ...data, 'joined': data.content.join(', ') })
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])

    return (
        <>
            <div className="bg-white">
                <div className="relative isolate px-12 pt-14 lg:px-4">
                    <div
                        className="absolute inset-x-0 -top-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-10"
                        aria-hidden="true"
                    >
                    </div>
                    <div className="mx-auto max-w-3xl py-16 sm:py-16 lg:py-16">
                        <div className="sm:mb-6 flex">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                <a href="/" className="font-semibold text-indigo-600">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    {AppConstant.appMoveToHome}
                                </a>
                            </div>
                        </div>
                        <br />
                        <div className="text-left">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                {postData.title}
                            </h1>
                            <br />
                            <h3 className="text-2xl font-semibold tracking-tight text-gray-600 sm:text-1xl">
                                {postData.subtitle}
                            </h3>
                            <br />
                            
                            {
                                postData.content && postData.content.map((item) => (
                                    <section className="text-lg font-medium leading-8 text-gray-600">
                                        {item} <br />
                                    </section>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail