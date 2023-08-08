import React from "react";
import { CategoryProvider } from "../../../Context/GlobalDatas";
import Categories from "./Categories";
import NewPosts from "./NewPosts";

const Posts = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto">
                <div className="flex gap-24">
                    <main className="w-3/4 pr-40">
                        <article className="flex flex-col gap-10">
                            <NewPosts />
                        </article>
                    </main>

                    <aside className="w-1/4">
                        <div className="title text-xl font-semibold">
                            <h3>
                                Kategoriler
                            </h3>
                        </div>
                        <div className="categories">
                            <CategoryProvider>
                                <Categories />
                            </CategoryProvider>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default Posts;