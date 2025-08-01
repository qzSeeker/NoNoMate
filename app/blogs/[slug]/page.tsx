import { notFound } from 'next/navigation';

const blogPosts: Record<
    string,
    {
        title: string;
        content: string;
        author: string;
        date: string;
    }
> = {
    "how-to-land-your-first-internship": {
        title: "How to Land Your First Internship in Tech",
        content: `Landing your first internship might feel overwhelming — especially if you don’t have prior experience.

    Here’s the good news: companies care more about your curiosity, consistency, and projects than your GPA. At Nonomate, we guide you from resume building to interview prep. Start by showcasing a few projects, stay active in communities, and apply confidently. You don’t need to be perfect — you just need to show up.`,
        author: "Arpit Yadav",
        date: "July 30, 2025",
    },

    "startups-find-interns-fast": {
        title: "How Startups Find Better Interns in 24 Hrs",
        content: `Tired of sorting through hundreds of irrelevant resumes? Nonomate is built for startups like yours.

    Our platform filters candidates based on your preferences — skills, availability, tech stack — and connects you with verified, eager interns in just a few hours. Say goodbye to wasted time and hello to quality interns who can actually deliver. Focus on building, let us handle the hiring.`,
        author: "Team Nonomate",
        date: "July 28, 2025",
    },

    "why-tier2-students-need-exposure": {
        title: "Why Tier 2/3 Students Struggle Without Exposure",
        content: `In India, students from Tier 2 and 3 colleges often have skills equal to — or even better than — top-tier grads. But what they lack is **exposure**.

    No alumni network, no startup connections, no mentorship. That’s why platforms like Nonomate are crucial — they bring visibility and real opportunities to students who deserve to be seen. Talent is everywhere, opportunity isn’t. We're here to fix that.`,
        author: "Arpit Yadav",
        date: "July 26, 2025",
    },

    "importance-of-skill-over-degree": {
        title: "Why Skills Matter More Than Your Degree in 2025",
        content: `The hiring landscape is evolving. Companies now care less about where you studied and more about what you can actually do.

    That’s why Nonomate focuses on **skills-first hiring**. Our platform ensures that a self-taught developer from a small town gets the same chance as someone from a big-name college — as long as they have the right skills. Degrees don’t write code, people do.`,
        author: "Team Nonomate",
        date: "July 25, 2025",
    },

    "power-of-community-learning": {
        title: "The Power of Learning in Public and Community Growth",
        content: `Learning in public is no longer just a trend — it’s a game changer.

    When you share your learning journey on platforms like X (formerly Twitter) or LinkedIn, you attract opportunities, mentors, and even job offers. Nonomate encourages students to be loud about their growth. Build in public, document your journey, and let the right people find you.`,
        author: "Arpit Yadav",
        date: "July 23, 2025",
    },

    "redefining-internship-hiring": {
        title: "Redefining Internship Hiring with AI",
        content: `At Nonomate, we’re reimagining how internships are offered and accepted.

    Using AI to understand what both parties want — we minimize mismatch and maximize satisfaction. For students, it's not just about *getting an internship*; it’s about getting the *right one*. For startups, it’s about hiring fast, without compromise.`,
        author: "Team Nonomate",
        date: "July 22, 2025",
    },
};


export default function BlogDetailPage({ params }: { params: { slug: string } }) {
    const blog = blogPosts[params.slug];

    if (!blog) return notFound();

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
            {blog.date} • {blog.author}
        </p>
        <article className="prose prose-lg">
            <p>{blog.content}</p>
        </article>
        </div>
    );
}
