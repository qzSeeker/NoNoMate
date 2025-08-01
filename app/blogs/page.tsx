"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const blogs = [
    {
        slug: "how-to-land-your-first-internship",
        title: "How to Land Your First Internship in Tech",
        description:
        "A beginner’s guide to finding, applying, and succeeding in your first tech internship with no prior experience.",
        date: "July 30, 2025",
        author: "Arpit Yadav",
    },
    {
        slug: "startups-find-interns-fast",
        title: "How Startups Find Better Interns in 24 Hrs",
        description:
        "Startups often waste time on irrelevant applications. Here's how Nonomate solves it in just a few clicks.",
        date: "July 28, 2025",
        author: "Team Nonomate",
    },
    {
        slug: "why-tier2-students-need-exposure",
        title: "Why Tier 2/3 Students Struggle Without Exposure",
        description:
        "Talent is everywhere, but opportunity isn't. Here's why Tier 2 and 3 college students deserve more visibility.",
        date: "July 26, 2025",
        author: "Arpit Yadav",
    },
    {
        slug: "importance-of-skill-over-degree",
        title: "Why Skills Matter More Than Your Degree in 2025",
        description:
        "Degrees don’t write code — people do. Let’s talk about skills-first hiring and equal opportunities.",
        date: "July 25, 2025",
        author: "Team Nonomate",
    },
    {
        slug: "power-of-community-learning",
        title: "The Power of Learning in Public and Community Growth",
        description:
        "Sharing your journey can change everything. Here's why 'learning in public' works — and how to do it right.",
        date: "July 23, 2025",
        author: "Arpit Yadav",
    },
    {
        slug: "redefining-internship-hiring",
        title: "Redefining Internship Hiring with AI",
        description:
        "Intern hiring is broken. Nonomate uses AI to fix it — making hiring faster, smarter, and more human.",
        date: "July 22, 2025",
        author: "Team Nonomate",
    },
];

export default function BlogsPage() {
    const [visibleCount, setVisibleCount] = useState(4);
    const [loadingMore, setLoadingMore] = useState(false);

    const handleLoadMore = () => {
        setLoadingMore(true);
        setTimeout(() => {
        setVisibleCount(blogs.length);
        setLoadingMore(false);
        }, 1200); // simulate loading
    };

    const visibleBlogs = blogs.slice(0, visibleCount);

return (
        <section className="w-full mx-auto pt-10">
        <div className="text-center max-w-5xl mx-auto mt-20 mb-12 md:mb-28 md:mt-28 px-4 md:px-0">
            <Badge
            className="bg-text-light_green text-xs md:text-base text-background-light mb-8 shadow-text-light_green overflow-hidden shadow-2xl"
            variant="secondary"
            >
            Insights from Nonomate
            <span className="bg-background-light text-text-light_green ml-2 p-2 md:p-3 shadow-sm">
                Latest Blogs & Stories
            </span>
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-2 py-4 text-center bg-gradient-to-r from-text-green to-text-light_green text-transparent bg-clip-text">
            Insights, Hustles & Everything In-Between
            </h1>
            <p className="text-lg text-text-green mt-2">
            {`Whether you’re a student hustling for that first internship or a startup founder looking to build your team, our blog is here to help you navigate the journey with real insights and practical advice.`}
            </p>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap w-full relative gap-6 items-stretch justify-center bg-text-light_green/20 p-4 py-12 md:p-12">
            {visibleBlogs.map((blog) => (
            <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="w-full md:w-[500px]"
            >
                <div className="flex flex-col justify-between h-[280px] p-6 bg-gradient-to-tl from-text-light_green/30 to-transparent backdrop-blur-sm border-2 border-text-light_green/50 rounded-xl hover:shadow-lg transition duration-300 cursor-pointer">
                <div>
                    <h2 className="text-xl font-semibold mb-2 line-clamp-2 text-text-green">
                    {blog.title}
                    </h2>
                    <p className="text-text-green mb-4 line-clamp-3">
                    {blog.description}
                    </p>
                </div>
                <div className="text-sm text-text-green">
                    {blog.date} • {blog.author}
                </div>
                </div>
            </Link>
            ))}

            {loadingMore &&
            Array.from({ length: 2 }).map((_, i) => (
                <div
                key={i}
                className="w-full md:w-[500px] h-[280px] p-6 animate-pulse bg-white/30 rounded-xl border border-text-light_green/30"
                >
                <div className="h-6 bg-text-light_green/30 rounded w-3/4 mb-4" />
                <div className="h-4 bg-text-light_green/20 rounded w-full mb-2" />
                <div className="h-4 bg-text-light_green/20 rounded w-5/6 mb-6" />
                <div className="h-4 bg-text-light_green/20 rounded w-1/2 mt-auto" />
                </div>
            ))}
        </div>

        {visibleCount < blogs.length && (
            <div className="text-center mt-12">
            <button
                onClick={handleLoadMore}
                className="px-6 py-3 rounded-lg bg-text-light_green text-background-light hover:bg-text-light_green transition"
            >
                {loadingMore ? "Loading..." : "View More Blogs"}
            </button>
            </div>
        )}

        <div className="max-w-5xl mx-auto mt-12 md:mb-12 rounded-b-none md:rounded-b-[3rem] bg-gradient-to-t from-text-light_green/50 to-transparent p-4 md:p-16 flex flex-col items-center text-center pb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-green mb-4">
                Ready to Land Your Dream Internship?
            </h2>
            <p className="text-md md:text-lg text-text-green mb-6 max-w-2xl">
                Join <span className="font-semibold">Nonomate</span> and get matched with top startups across India — based on your skills, not just your resume.
            </p>
            <a
                href="/login"
                className="text-text-green text-md md:text-lg border-2 border-text-green font-semibold px-8 py-3 rounded-xl transition duration-300"
            >
                Get Started for Free
            </a>
        </div>
        </section>
    );
}
