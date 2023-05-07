import React from "react";
import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import { Content } from "@theme/BlogPostPage";
import PaginatorNavLink from "@theme/PaginatorNavLink";
import { BlogPostProvider } from "@docusaurus/theme-common/internal";

interface HomeProps {
    readonly recentPost: readonly { readonly content: Content}[];
}

export function Home({ recentPost }: HomeProps): JSX.Element {
    return (
        <Layout>
            <div className="hero hero--dark hero--home shadow--lw">
                <div className="container">
                    <div className="row">
                        <div className="col col--9 col--offset-1">
                            <h1 className="hero__title">
                                I'm Daniel
                            </h1>
                            <p className="hero__subtitle">
                                Welcome to my Technical Documentation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Home;