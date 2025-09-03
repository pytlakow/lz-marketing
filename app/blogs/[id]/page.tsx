"use client";
import { useParams } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function BlogPage() {
    const { id } = useParams();

    const [content, setContent] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        fetch(`/blogs/${id}/index.md`)
            .then((res) => res.text())
            .then((md) => {
                console.log(md);
                setContent(md);
                // const imageRegex = /!\[.*?\]\((.*?)\)/g;
                // const matches = Array.from(md.matchAll(imageRegex));
                // const imageUrls = matches.map(match => match[1]);
                // setImages(imageUrls);
            })
            .catch(() => setContent("Failed to load blog content."));
    }, [id]);

    return (
        <div>
            {content ? (
                <section className="container mx-auto max-w-7xl py-8 px-4 text-left">
                    <article>
                        {/* Simple markdown rendering */}

                        <div className="prose mx-auto p-4">
                            <ReactMarkdown
                                components={{
                                    h1: ({ node, ...props }) => (
                                        <h1
                                            className="text-4xl font-bold mb-4 mt-8 text-gray-900"
                                            {...props}
                                        />
                                    ),
                                    h2: ({ node, ...props }) => (
                                        <h2
                                            className="text-3xl font-semibold mb-3 mt-6 text-gray-800"
                                            {...props}
                                        />
                                    ),
                                    h3: ({ node, ...props }) => (
                                        <h3
                                            className="text-2xl font-semibold mb-2 mt-4 text-gray-700"
                                            {...props}
                                        />
                                    ),
                                    p: ({ node, ...props }) => (
                                        <p
                                            className="text-lg leading-relaxed mb-4 text-gray-600"
                                            {...props}
                                        />
                                    ),
                                }}
                            >
                                {content}
                            </ReactMarkdown>
                        </div>
                    </article>
                    {/* <div>
              {images.map(src => (
                <img key={src} src={src} alt="Blog image" style={{ maxWidth: '100%', margin: '8px 0' }} />
              ))}
            </div> */}
                </section>
            ) : (
                <section className="container mx-auto max-w-7xl py-8 px-4 text-left">
                    <p>Loading...</p>
                </section>
            )}
        </div>
    );
}
