import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AuthorLarge from '../../Components/Author/AuthorLarge';
import AuthorSmall from '../../Components/Author/AuthorSmall';
import NewPosts from '../../Components/Home/Posts/NewPosts';

export const BlogDetail = () => {

    const params = useParams();

    const [BlogData, setBlogData] = useState([]);

    useEffect(() => {

        console.log(params);
        fetch(`http://localhost:5000/singleblog?blogid=${params.blogid}`)
            .then((response) => response.json())
            .then((data) => {
                setBlogData(data);
            })
    }, []);

    return (
        <section>
            <div className='container mx-auto '>
                <div className="flex gap-14 p-3">
                    <article className='w-3/4 flex flex-col gap-48'>
                        <div className='flex flex-col gap-14'>
                            {
                                BlogData.length < 0 ?
                                    "loading"
                                    :
                                    BlogData.map((Data, index) => (

                                        <>
                                            <div className='flex justify-between items-end'>
                                                <AuthorLarge
                                                    AuthorImage={Data.AuthorImage}
                                                    AuthorName={Data.AuthorName}
                                                />
                                                <h3 className="date text-3xl font-medium">
                                                    {Data.Date}
                                                </h3>
                                            </div>
                                            <div className='flex flex-col gap-5'>
                                                <div className="blog-title text-4xl font-bold">
                                                    <h1>{Data.PostTitle}</h1>
                                                </div>
                                                <p>
                                                    {Data.ContentText}
                                                </p>
                                            </div>
                                        </>
                                    ))
                            }
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='border-b py-3'>
                                <h1 className='text-4xl font-bold'>Diğer Postlar</h1>
                            </div>
                            <div className='flex justify-center'>
                                <div className="w-2/4 flex flex-col gap-5 p-3 bg-gray-200">
                                    <NewPosts
                                        ClassName={"border-b border-black"}
                                    />
                                </div>
                            </div>
                        </div>
                    </article>
                    <aside className='w-1/4 bg-red-100'>

                    </aside>
                </div>
            </div>
        </section>
    )
}
