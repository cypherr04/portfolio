import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function WriterDashboardReport() {
    return (
        <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
            <div className="container mx-auto px-4 py-16">
                <Link
                    href="/"
                    className="inline-flex items-center text-[hsl(var(--primary))] hover:text-[hsl(var(--primary)_/_0.8)] mb-8"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Portfolio
                </Link>

                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Writer's Dashboard</h1>
                    <div className="flex items-center gap-3 mb-6">
            <span className="inline-block bg-[hsl(var(--primary)_/_0.2)] text-[hsl(var(--primary-foreground))] border-[hsl(var(--primary)_/_0.3)] px-3 py-1 rounded-md text-sm font-medium">
              Private Project
            </span>
                        <span className="inline-block text-[hsl(var(--muted-foreground))]">Work in Progress</span>
                    </div>
                    <p className="text-lg text-[hsl(var(--foreground)_/_0.9)] max-w-3xl">
                        A sophisticated content management platform designed to streamline the creation, management, and publication
                        of both blog posts and articles.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="col-span-2">
                        <img
                            src="/img_1.png?height=400&width=800"
                            alt="Writer Dashboard Screenshot"
                            className="w-full h-auto rounded-lg border border-[hsl(var(--border))]"
                        />
                    </div>
                    <div className="bg-[hsl(var(--secondary)_/_0.5)] p-6 rounded-lg border border-[hsl(var(--border)_/_0.5)]">
                        <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                        <div className="space-y-3">
                            <div>
                                <span className="text-[hsl(var(--muted-foreground))]">Role:</span>
                                <span className="ml-2">Full-Stack Developer</span>
                            </div>
                            <div>
                                <span className="text-[hsl(var(--muted-foreground))]">Client:</span>
                                <span className="ml-2">Almindhar</span>
                            </div>
                            <div>
                                <span className="text-[hsl(var(--muted-foreground))]">Timeline:</span>
                                <span className="ml-2">Ongoing</span>
                            </div>
                            <div>
                                <span className="text-[hsl(var(--muted-foreground))]">Tech Stack:</span>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="px-2 py-1 bg-[hsl(var(--secondary))] text-xs rounded">Next.js</span>
                                    <span className="px-2 py-1 bg-[hsl(var(--secondary))] text-xs rounded">TypeScript</span>
                                    <span className="px-2 py-1 bg-[hsl(var(--secondary))] text-xs rounded">Supabase</span>
                                    <span className="px-2 py-1 bg-[hsl(var(--secondary))] text-xs rounded">Quill</span>
                                    <span className="px-2 py-1 bg-[hsl(var(--secondary))] text-xs rounded">Tailwind CSS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Executive Summary */}
                    <section className="mb-16">
                        <div className="relative mb-8">
                            <h2 className="text-3xl font-bold inline-block pb-2 border-b-2 border-[hsl(var(--primary))]">
                                Executive Summary
                            </h2>
                        </div>
                        <p className="text-base leading-relaxed text-[hsl(var(--foreground)_/_0.9)]">
                            The Writer's Dashboard is a sophisticated content management platform designed to streamline the creation,
                            management, and publication of both blog posts and articles. This report provides a detailed overview of
                            the dashboard's architecture, features, development process, and future directions based on the current
                            implementation.
                        </p>
                        <div className="mt-8 mb-4 border border-[hsl(var(--border)_/_0.5)] rounded-lg overflow-hidden">
                            <div className="bg-[hsl(var(--secondary)_/_0.5)] p-3 border-b border-[hsl(var(--border)_/_0.5)]">
                                <span className="text-sm font-medium">Dashboard Overview</span>
                            </div>
                            <div className="p-4 bg-[hsl(var(--background))] flex justify-center">
                                <img
                                    src="/img.png?height=300&width=800"
                                    alt="Dashboard Overview Screenshot"
                                    className="rounded border border-[hsl(var(--border)_/_0.5)]"
                                />
                            </div>
                            <div className="bg-[hsl(var(--secondary)_/_0.3)] p-3 text-sm text-[hsl(var(--muted-foreground))] italic text-center">
                                Fig 1: Complete dashboard view showing content statistics, recent drafts, and navigation
                            </div>
                        </div>
                    </section>

                    {/* System Architecture */}
                    <section className="mb-16">
                        <div className="relative mb-8">
                            <h2 className="text-3xl font-bold inline-block pb-2 border-b-2 border-[hsl(var(--primary))]">
                                1. System Architecture
                            </h2>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold mb-5">1.1 Technology Stack</h3>
                            <p className="text-base leading-relaxed mb-6 text-[hsl(var(--foreground)_/_0.9)]">
                                The Writer's Dashboard is built on a modern web technology stack:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                                <div className="bg-[hsl(var(--secondary)_/_0.3)] border border-[hsl(var(--border)_/_0.5)] rounded-lg p-4 flex flex-col gap-2">
                                    <div className="text-sm font-medium text-[hsl(var(--muted-foreground))]">Frontend Framework</div>
                                    <div className="text-base font-medium">Next.js (App Router)</div>
                                </div>
                                <div className="bg-[hsl(var(--secondary)_/_0.3)] border border-[hsl(var(--border)_/_0.5)] rounded-lg p-4 flex flex-col gap-2">
                                    <div className="text-sm font-medium text-[hsl(var(--muted-foreground))]">UI Components</div>
                                    <div className="text-base font-medium">shadcn/ui component library</div>
                                </div>
                                <div className="bg-[hsl(var(--secondary)_/_0.3)] border border-[hsl(var(--border)_/_0.5)] rounded-lg p-4 flex flex-col gap-2">
                                    <div className="text-sm font-medium text-[hsl(var(--muted-foreground))]">Styling</div>
                                    <div className="text-base font-medium">Tailwind CSS</div>
                                </div>
                                <div className="bg-[hsl(var(--secondary)_/_0.3)] border border-[hsl(var(--border)_/_0.5)] rounded-lg p-4 flex flex-col gap-2">
                                    <div className="text-sm font-medium text-[hsl(var(--muted-foreground))]">State Management</div>
                                    <div className="text-base font-medium">React hooks and context</div>
                                </div>
                                <div className="bg-[hsl(var(--secondary)_/_0.3)] border border-[hsl(var(--border)_/_0.5)] rounded-lg p-4 flex flex-col gap-2">
                                    <div className="text-sm font-medium text-[hsl(var(--muted-foreground))]">Database</div>
                                    <div className="text-base font-medium">Supabase (PostgreSQL)</div>
                                </div>
                                <div className="bg-[hsl(var(--secondary)_/_0.3)] border border-[hsl(var(--border)_/_0.5)] rounded-lg p-4 flex flex-col gap-2">
                                    <div className="text-sm font-medium text-[hsl(var(--muted-foreground))]">Authentication</div>
                                    <div className="text-base font-medium">Supabase Auth</div>
                                </div>
                                <div className="bg-[hsl(var(--secondary)_/_0.3)] border border-[hsl(var(--border)_/_0.5)] rounded-lg p-4 flex flex-col gap-2">
                                    <div className="text-sm font-medium text-[hsl(var(--muted-foreground))]">Storage</div>
                                    <div className="text-base font-medium">Supabase Storage for image uploads</div>
                                </div>
                                <div className="bg-[hsl(var(--secondary)_/_0.3)] border border-[hsl(var(--border)_/_0.5)] rounded-lg p-4 flex flex-col gap-2">
                                    <div className="text-sm font-medium text-[hsl(var(--muted-foreground))]">API Layer</div>
                                    <div className="text-base font-medium">Next.js API routes with server components</div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold mb-5">1.2 Core Architecture</h3>
                            <p className="text-base leading-relaxed mb-6 text-[hsl(var(--foreground)_/_0.9)]">
                                The dashboard follows a modular architecture with clear separation of concerns:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    {
                                        title: "Service Layer",
                                        desc: "Dedicated services for blogs and articles (BlogService, ArticleService)",
                                    },
                                    { title: "API Routes", desc: "RESTful endpoints for data operations" },
                                    { title: "UI Components", desc: "Reusable components for consistent user experience" },
                                    { title: "Page Components", desc: "Feature-specific implementations" },
                                    { title: "Utilities", desc: "Helper functions for common operations" },
                                ].map((item, i) => (
                                    <li key={i} className="relative pl-6 leading-relaxed">
                                        <div className="absolute left-0 top-2 w-2 h-2 bg-[hsl(var(--primary))] rounded-full"></div>
                                        <span className="font-semibold text-[hsl(var(--foreground))]">{item.title}:</span>{" "}
                                        <span className="text-[hsl(var(--foreground)_/_0.9)]">{item.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-8 mb-4 border border-[hsl(var(--border)_/_0.5)] rounded-lg overflow-hidden">
                            <div className="bg-[hsl(var(--secondary)_/_0.5)] p-3 border-b border-[hsl(var(--border)_/_0.5)]">
                                <span className="text-sm font-medium">System Architecture Diagram</span>
                            </div>
                            <div className="p-4 bg-[hsl(var(--background))] flex justify-center">
                                <img
                                    src="https://mermaid.ink/img/pako:eNqdVm1v2jAQ_iuWpUqtRCteVlIyaRKFVZq0DwjafVizDyY5QtQkZnayrqX97zvbeXMIbBpf8J2fxz7f3XOwpz4PgLo0FGy3Jffzj15K8CPztfF4dBZHkGZkxpMdT3ElPWow6jNncrvmTASPHq3WZMFC8OiPGnYb81Des3UMiNMG0ZYFmoos8mOocKXdAV2Cj5HMeJrhF0KNTQqHBf0cRNkdF4lEmFoTbVQQSAMvPXjzCsQvEEfebDanebZVQeIXAiKfZRFPyVf2AsK6fwEiiaTEzdkW_Cek1B6iXRa8eMIdZP4WBKILByk8fwl8uvhSxmBnHzeK1BOFWfI8A9mVfgMsjGPYqtQGXVcebQv4IEEseXmqsogyLVz3S-YsY2smweq228fzVb7TflICLlp9tuAyk4_nxWO15dGLjj5TmHJtI8qoNaQKugFqhHx2piMhdzFvNp46G5eXn95Uc_7MAaMgftmeb60yG14tkjZxrXYUraikwVt6aVNY9bC3RmUN0VJPmyiMlBqxNottDqg0VZBX-TpBZQG69YWtni9TZT-64BpLkgCT2H1b67SC9w1EtImQuKu29d2NjjtFV7rlInqFoA7byu6_05rpNdx6QjRoxZSA7igPKCvwcwGHcZ0Ctgt9Cmvnue5ApXgDni0f5oRjevVoqyIxikrtkXGcUiksbc2DVv0Fj-3UyJaaaso0DAWEKpV119w29NgYsLUqD29eQpaLVJJIqn7WItrELDwmz87uLUX0HGGOW51YRf6ffEumXQUyP6Rd1HqUHClU9dvaxbYGC-3hf4MooG4mcujRBKFMmXSvjvYoNnaCQ9rFZcDEkxrX78jZsfQ750lJEzwPt9TdsFiile_wbjCPGA77pPIKnKogZjxPM-o6I30Gdff0N3UnwyvH6Y8m48FoPBr0x06PvlB3MBxfjQbDDzfOZHTdd8aT4XuPvupb-1c3zvX7H8vP6Ng"
                                    alt="System Architecture Diagram"
                                    className="rounded border border-[hsl(var(--border)_/_0.5)]"
                                />
                            </div>
                            <div className="bg-[hsl(var(--secondary)_/_0.3)] p-3 text-sm text-[hsl(var(--muted-foreground))] italic text-center">
                                Fig 2: Architectural diagram showing components and data flow
                            </div>
                        </div>
                    </section>

                    {/* Feature Implementation */}
                    <section className="mb-16">
                        <div className="relative mb-8">
                            <h2 className="text-3xl font-bold inline-block pb-2 border-b-2 border-[hsl(var(--primary))]">
                                2. Feature Implementation
                            </h2>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold mb-5">2.1 Content Management</h3>

                            <div className="mb-8">
                                <h4 className="text-xl font-semibold mb-4">Blog Management</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {[
                                        { title: "Blog Creation", desc: "Rich text editor with image upload capabilities" },
                                        { title: "Blog Drafts", desc: "Save and resume work on drafts" },
                                        { title: "Blog Publishing", desc: "Workflow for publishing and unpublishing content" },
                                        { title: "Blog Categories", desc: "Organization system with color-coding" },
                                        { title: "Blog Tags", desc: "Additional metadata for improved searchability" },
                                    ].map((feature, i) => (
                                        <div
                                            key={i}
                                            className="bg-[hsl(var(--secondary)_/_0.3)] border border-[hsl(var(--border)_/_0.5)] rounded-lg p-5 transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[hsl(var(--primary)_/_0.1)]"
                                        >
                                            <h5 className="text-lg font-semibold mb-2">{feature.title}</h5>
                                            <p className="text-sm text-[hsl(var(--foreground)_/_0.8)]">{feature.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-8 mb-4 border border-[hsl(var(--border)_/_0.5)] rounded-lg overflow-hidden">
                                <div className="bg-[hsl(var(--secondary)_/_0.5)] p-3 border-b border-[hsl(var(--border)_/_0.5)]">
                                    <span className="text-sm font-medium">Blog Management Interface</span>
                                </div>
                                <div className="p-4 bg-[hsl(var(--background))] flex justify-center">
                                    <img
                                        src="/img_2.png?height=300&width=800"
                                        alt="Blog Management Interface Screenshot"
                                        className="rounded border border-[hsl(var(--border)_/_0.5)]"
                                    />
                                </div>
                                <div className="bg-[hsl(var(--secondary)_/_0.3)] p-3 text-sm text-[hsl(var(--muted-foreground))] italic text-center">
                                    Fig 3: Blog management interface showing categories, drafts, and published content
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-xl font-semibold mb-4">Article Management</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {[
                                        { title: "Article Creation", desc: "Multi-chapter structure with sections" },
                                        { title: "Article Drafts", desc: "Save and resume work on drafts" },
                                        { title: "Article Publishing", desc: "Workflow for publishing and unpublishing content" },
                                        { title: "Article Categories", desc: "Organization by audience type (host, guest, common)" },
                                        { title: "FAQs", desc: "Support for frequently asked questions" },
                                    ].map((feature, i) => (
                                        <div
                                            key={i}
                                            className="bg-[hsl(var(--secondary)_/_0.3)] border border-[hsl(var(--border)_/_0.5)] rounded-lg p-5 transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[hsl(var(--primary)_/_0.1)]"
                                        >
                                            <h5 className="text-lg font-semibold mb-2">{feature.title}</h5>
                                            <p className="text-sm text-[hsl(var(--foreground)_/_0.8)]">{feature.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-8 mb-4 border border-[hsl(var(--border)_/_0.5)] rounded-lg overflow-hidden">
                                <div className="bg-[hsl(var(--secondary)_/_0.5)] p-3 border-b border-[hsl(var(--border)_/_0.5)]">
                                    <span className="text-sm font-medium">Article Management Interface</span>
                                </div>
                                <div className="p-4 bg-[hsl(var(--background))] flex justify-center">
                                    <img
                                        src="/img_3.png?height=300&width=800"
                                        alt="Article Management Interface Screenshot"
                                        className="rounded border border-[hsl(var(--border)_/_0.5)]"
                                    />
                                </div>
                                <div className="bg-[hsl(var(--secondary)_/_0.3)] p-3 text-sm text-[hsl(var(--muted-foreground))] italic text-center">
                                    Fig 4: Article management interface with chapter organization and publication status
                                </div>
                            </div>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold mb-5">2.2 Dashboard Features</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    {
                                        title: "Content Overview",
                                        desc: "Statistics on total content, drafts, and recently published items",
                                    },
                                    { title: "Recent Content", desc: "Quick access to recently modified content" },
                                    { title: "Draft Management", desc: "Consolidated view of all draft content" },
                                    { title: "Search & Filtering", desc: "Content discovery through search and category filters" },
                                    { title: "Image Management", desc: "Upload, compression, and storage of featured images" },
                                ].map((feature, i) => (
                                    <div
                                        key={i}
                                        className="bg-[hsl(var(--secondary)_/_0.3)] border border-[hsl(var(--border)_/_0.5)] rounded-lg p-5 transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[hsl(var(--primary)_/_0.1)]"
                                    >
                                        <h5 className="text-lg font-semibold mb-2">{feature.title}</h5>
                                        <p className="text-sm text-[hsl(var(--foreground)_/_0.8)]">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 mb-4 border border-[hsl(var(--border)_/_0.5)] rounded-lg overflow-hidden">
                            <div className="bg-[hsl(var(--secondary)_/_0.5)] p-3 border-b border-[hsl(var(--border)_/_0.5)]">
                                <span className="text-sm font-medium">Dashboard Analytics View</span>
                            </div>
                            <div className="p-4 bg-[hsl(var(--background))] flex justify-center">
                                <img
                                    src="/img_4.png?height=300&width=800"
                                    alt="Dashboard Analytics Screenshot"
                                    className="rounded border border-[hsl(var(--border)_/_0.5)]"
                                />
                            </div>
                            <div className="bg-[hsl(var(--secondary)_/_0.3)] p-3 text-sm text-[hsl(var(--muted-foreground))] italic text-center">
                                Fig 5: Dashboard analytics showing content statistics and recent activity
                            </div>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold mb-5">2.3 Editor Capabilities</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    { title: "Rich Text Editing", desc: "Quill-based editor with formatting options" },
                                    { title: "Image Embedding", desc: "Direct image uploads within the editor" },
                                    { title: "Content Structure", desc: "Support for headings, lists, quotes, and code blocks" },
                                    { title: "Draft Auto-saving", desc: "Automatic saving of content during editing" },
                                    { title: "Preview Mode", desc: "WYSIWYG preview of content before publishing" },
                                ].map((feature, i) => (
                                    <div
                                        key={i}
                                        className="bg-[hsl(var(--secondary)_/_0.3)] border border-[hsl(var(--border)_/_0.5)] rounded-lg p-5 transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[hsl(var(--primary)_/_0.1)]"
                                    >
                                        <h5 className="text-lg font-semibold mb-2">{feature.title}</h5>
                                        <p className="text-sm text-[hsl(var(--foreground)_/_0.8)]">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 mb-4 border border-[hsl(var(--border)_/_0.5)] rounded-lg overflow-hidden">
                            <div className="bg-[hsl(var(--secondary)_/_0.5)] p-3 border-b border-[hsl(var(--border)_/_0.5)]">
                                <span className="text-sm font-medium">Rich Text Editor Interface</span>
                            </div>
                            <div className="p-4 bg-[hsl(var(--background))] flex justify-center">
                                <img
                                    src="/img_5.png?height=300&width=800"
                                    alt="Rich Text Editor Screenshot"
                                    className="rounded border border-[hsl(var(--border)_/_0.5)]"
                                />
                            </div>
                            <div className="bg-[hsl(var(--secondary)_/_0.3)] p-3 text-sm text-[hsl(var(--muted-foreground))] italic text-center">
                                Fig 6: Rich text editor with formatting tools and image embedding
                            </div>
                        </div>
                    </section>

                    {/* Technical Challenges and Solutions */}
                    <section className="mb-16">
                        <div className="relative mb-8">
                            <h2 className="text-3xl font-bold inline-block pb-2 border-b-2 border-[hsl(var(--primary))]">
                                3. Technical Challenges and Solutions
                            </h2>
                        </div>

                        <div className="flex flex-col gap-6">
                            {[
                                {
                                    title: "Content Synchronization",
                                    challenge: "Ensuring draft content is correctly synchronized between client and server.",
                                    solution:
                                        "Implemented a change tracking system that monitors modifications and only sends changed data to the server, reducing unnecessary API calls and improving performance.",
                                },
                                {
                                    title: "Image Optimization",
                                    challenge: "Handling large image uploads that could impact performance.",
                                    solution:
                                        "Implemented client-side image compression and WebP conversion to reduce file sizes before upload, with progress indicators for user feedback.",
                                },
                                {
                                    title: "Rich Text Editing",
                                    challenge: "Providing a robust editing experience with image embedding.",
                                    solution:
                                        "Integrated Quill editor with custom image handling that supports direct uploads to Supabase storage and embeds the resulting URLs.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-[hsl(var(--secondary)_/_0.3)] border border-[hsl(var(--border)_/_0.5)] rounded-xl overflow-hidden"
                                >
                                    <div className="bg-[hsl(var(--secondary))] px-6 py-4 border-b border-[hsl(var(--border)_/_0.5)]">
                                        <h3 className="text-xl font-semibold">{item.title}</h3>
                                    </div>
                                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="md:col-span-1">
                                            <h4 className="text-base font-semibold mb-2 text-[hsl(var(--muted-foreground))]">Challenge</h4>
                                            <p className="text-[15px] leading-relaxed text-[hsl(var(--foreground)_/_0.9)]">
                                                {item.challenge}
                                            </p>
                                        </div>
                                        <div className="md:col-span-2">
                                            <h4 className="text-base font-semibold mb-2 text-[hsl(var(--muted-foreground))]">Solution</h4>
                                            <p className="text-[15px] leading-relaxed text-[hsl(var(--foreground)_/_0.9)]">{item.solution}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 mb-4 border border-[hsl(var(--border)_/_0.5)] rounded-lg overflow-hidden">
                            <div className="bg-[hsl(var(--secondary)_/_0.5)] p-3 border-b border-[hsl(var(--border)_/_0.5)]">
                                <span className="text-sm font-medium">Image Upload and Optimization</span>
                            </div>
                            <div className="p-4 bg-[hsl(var(--background))]">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <img
                                            src="/img_6.png?height=300&width=400"
                                            alt="Image Upload Interface Screenshot"
                                            className="rounded border border-[hsl(var(--border)_/_0.5)] w-full h-auto object-cover"
                                        />
                                        <p className="text-center mt-2 text-sm text-[hsl(var(--muted-foreground))]">Upload Interface</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <img
                                            src="/img_7.png?height=300&width=400"
                                            alt="Image Preview Functionality"
                                            className="rounded border border-[hsl(var(--border)_/_0.5)] w-full h-auto object-cover"
                                        />
                                        <p className="text-center mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                                            Preview Functionality
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[hsl(var(--secondary)_/_0.3)] p-3 text-sm text-[hsl(var(--muted-foreground))] italic text-center">
                                Fig 7: Image upload interface with compression and preview functionality
                            </div>
                        </div>
                    </section>

                    {/* Role-Based Access Control */}
                    <section className="mb-16">
                        <div className="relative mb-8">
                            <h2 className="text-3xl font-bold inline-block pb-2 border-b-2 border-[hsl(var(--primary))]">
                                4. Role-Based Access Control Implementation
                            </h2>
                        </div>

                        <p className="text-base leading-relaxed mb-6 text-[hsl(var(--foreground)_/_0.9)]">
                            We successfully implemented a permission system in the writer's dashboard that respects content ownership
                            while maintaining administrative oversight. The system:
                        </p>

                        <ul className="mb-8 space-y-3">
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] mt-2"></div>
                                <p className="text-[hsl(var(--foreground)_/_0.9)]">
                                    Uses an <code className="bg-[hsl(var(--secondary))] px-1.5 py-0.5 rounded text-sm">isEditable</code>{" "}
                                    flag to determine user permissions for each content item
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] mt-2"></div>
                                <p className="text-[hsl(var(--foreground)_/_0.9)]">
                                    Differentiates between admin users viewing others' content vs. their own content
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] mt-2"></div>
                                <p className="text-[hsl(var(--foreground)_/_0.9)]">
                                    Preserves editing capabilities for content owners regardless of role
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] mt-2"></div>
                                <p className="text-[hsl(var(--foreground)_/_0.9)]">
                                    Restricts editing of content to original authors while allowing admins to view all content
                                </p>
                            </li>
                        </ul>

                        <p className="text-base leading-relaxed text-[hsl(var(--foreground)_/_0.9)]">
                            This implementation ensures proper data governance while maintaining flexibility for administrative users
                            to monitor all content in the system.
                        </p>
                        <div className="mt-8 mb-4 border border-[hsl(var(--border)_/_0.5)] rounded-lg overflow-hidden">
                            <div className="bg-[hsl(var(--secondary)_/_0.5)] p-3 border-b border-[hsl(var(--border)_/_0.5)]">
                                <span className="text-sm font-medium">Permission System Interface</span>
                            </div>
                            <div className="p-4 bg-[hsl(var(--background))] flex justify-center">
                                <div className="grid grid-cols-2 gap-4 w-full">
                                    <div className="flex flex-col">
                                        <img
                                            src="/img_9.png?height=200&width=400"
                                            alt="Admin View Screenshot"
                                            className="rounded border border-[hsl(var(--border)_/_0.5)]"
                                        />
                                        <p className="text-center mt-2 text-sm">Admin View</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <img
                                            src="/img_10.png?height=200&width=400"
                                            alt="User View Screenshot"
                                            className="rounded border border-[hsl(var(--border)_/_0.5)]"
                                        />
                                        <p className="text-center mt-2 text-sm">Writer View</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[hsl(var(--secondary)_/_0.3)] p-3 text-sm text-[hsl(var(--muted-foreground))] italic text-center">
                                Fig 8: Side-by-side comparison of admin and writer permission views
                            </div>
                        </div>
                    </section>

                    {/* Consistent Navigation Experience */}
                    <section className="mb-16">
                        <div className="relative mb-8">
                            <h2 className="text-3xl font-bold inline-block pb-2 border-b-2 border-[hsl(var(--primary))]">
                                5. Consistent Navigation Experience
                            </h2>
                        </div>

                        <p className="text-base leading-relaxed mb-6 text-[hsl(var(--foreground)_/_0.9)]">
                            To provide a clear and intuitive user experience, we standardized the navigation patterns across the
                            dashboard:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-[hsl(var(--secondary)_/_0.3)] border border-[hsl(var(--border)_/_0.5)] rounded-lg p-5">
                                <h4 className="text-lg font-semibold mb-3 text-[hsl(var(--foreground))]">Conditional Button Text</h4>
                                <p className="text-[hsl(var(--foreground)_/_0.9)]">
                                    "Continue Editing" for editable content vs. "View" for read-only content
                                </p>
                            </div>

                            <div className="bg-[hsl(var(--secondary)_/_0.3)] border border-[hsl(var(--border)_/_0.5)] rounded-lg p-5">
                                <h4 className="text-lg font-semibold mb-3 text-[hsl(var(--foreground))]">Appropriate Routing</h4>
                                <p className="text-[hsl(var(--foreground)_/_0.9)]">
                                    Users are directed to edit pages or view-only pages based on permissions
                                </p>
                            </div>

                            <div className="bg-[hsl(var(--secondary)_/_0.3)] border border-[hsl(var(--border)_/_0.5)] rounded-lg p-5">
                                <h4 className="text-lg font-semibold mb-3 text-[hsl(var(--foreground))]">Visual Consistency</h4>
                                <p className="text-[hsl(var(--foreground)_/_0.9)]">
                                    Maintained consistent UI patterns across blogs and articles
                                </p>
                            </div>

                            <div className="bg-[hsl(var(--secondary)_/_0.3)] border border-[hsl(var(--border)_/_0.5)] rounded-lg p-5">
                                <h4 className="text-lg font-semibold mb-3 text-[hsl(var(--foreground))]">Type-Safe Implementation</h4>
                                <p className="text-[hsl(var(--foreground)_/_0.9)]">
                                    Ensured all navigation links have required properties (
                                    <code className="bg-[hsl(var(--secondary))] px-1.5 py-0.5 rounded text-sm">slug</code>) for proper
                                    routing
                                </p>
                            </div>
                        </div>

                        <div className="bg-[hsl(var(--primary)_/_0.1)] border border-[hsl(var(--primary)_/_0.2)] rounded-lg p-6">
                            <h4 className="text-xl font-semibold mb-4 text-[hsl(var(--foreground))]">Benefits</h4>
                            <ol className="list-decimal pl-5 space-y-2">
                                <li className="text-[hsl(var(--foreground)_/_0.9)]">
                                    <span className="font-medium">Clear User Expectations:</span> Users immediately understand what
                                    actions they can take on content
                                </li>
                                <li className="text-[hsl(var(--foreground)_/_0.9)]">
                                    <span className="font-medium">Reduced Error States:</span> Prevents users from attempting to edit
                                    content they don't have permission for
                                </li>
                                <li className="text-[hsl(var(--foreground)_/_0.9)]">
                                    <span className="font-medium">Streamlined Workflow:</span> Admins can efficiently review all content
                                    while respecting ownership boundaries
                                </li>
                                <li className="text-[hsl(var(--foreground)_/_0.9)]">
                                    <span className="font-medium">Consistent Experience:</span> Users encounter the same patterns
                                    regardless of content type
                                </li>
                            </ol>
                        </div>
                        <div className="mt-8 mb-4 border border-[hsl(var(--border)_/_0.5)] rounded-lg overflow-hidden">
                            <div className="bg-[hsl(var(--secondary)_/_0.5)] p-3 border-b border-[hsl(var(--border)_/_0.5)]">
                                <span className="text-sm font-medium">Navigation Flow</span>
                            </div>
                            <div className="p-4 bg-[hsl(var(--background))] flex justify-center">
                                <img
                                    src={
                                        "https://mermaid.ink/img/pako:eNqdVl1v2jAU_SuWq2ovoVoSAiVIk7oyaQ9TW637kLbswSQOWA02sp22rPS_z3acYJLQloEEvvicc-37RZ5gyjIMY7jgaL0E32bThAL1miGxnDPEs98JbNbgBi1wAv9UkI8FW4gvREgFMWugjWb7gkuSFrhG1OY-SPNmHOVSWBFQWW2VBmPtNkxTP2WkPgrQ6_3TWqIF1TJdnKb_IPihVtLrXiULqpW6uOrz9BR8F5gDztTlrUC2IlRT9bfZbTg_OZGYq71LRiWmElw_UGf7Wi4xbzDGspSu1yt0TxZIEkbBGkkFoaKVWjAYfNgm0Jz8oiiqhCZwu8vsK4Q6p5rjpvsF2l6Ot07-X3LVyvl2vypa9zY_Anro9juP1sVepGOgTULLqjQIXdSn1OYBBZPH2FRAjTbrbgG_3aVTrod1Wo6dwmzF5CtOtb_U-t0Fpz_qR4fkPwQ6F2xrvBjVV8CHI3GD-YoIoa4-mCOBs04sqnaysp-RAHmpKh3rOYHSFAvRvf2bKN2Emu7flfmA0WIDcsYB030t3tXp6qmpY6idWDhDxGpcMXtQIFkjkTXd1gS7FUuVVqG6XSd6XkrZ22pmwFZebtG97eG-zm-Bb8p5QcSyZxo5gewV7pkNXYoj3x1czQVv5abQ5WrstEBCzHAOsqb2clIU8Uk-0W9PSM7ucHwShqFdDx5IJpexv36ctiSUb2nZ2M-jHB_FrjJTe8_zSTo8im8q03o_zyN83Nnv9Ui2vkMc5dFR7FL_F9Ynx3P88s3rH3TIEedoE4MIRFM3TUbZmQdNdlzPuxry3HSbPHRwVeV4-wO3inkHq0vKc8tLx7aD0r3nOX1oYriHMh3tVU3puQ2q4zWFnno8IxmMJS-xB1dqhiFtwietkUCFX6nnjlgtM8TvEpjQZ8VZI_qLsVVN46xcLGGco0Ioq1xnSOIZQerBbwfBNMP8kpVUwjgY-kYDxk_wEcaD4PxsMoxG4cgfD8fvJ6PAgxsY-2Fw5g_H0Sjy_XDoR-H42YN_jVv_LAhGURCNzkfDQFEn_vM_-R11mw"
                                    }
                                    alt="Navigation Flow Diagram"
                                    className="rounded border border-[hsl(var(--border)_/_0.5)]"
                                />
                            </div>
                            <div className="bg-[hsl(var(--secondary)_/_0.3)] p-3 text-sm text-[hsl(var(--muted-foreground))] italic text-center">
                                Fig 9: Diagram showing the consistent navigation patterns across different sections
                            </div>
                        </div>
                    </section>

                    {/* Future Enhancements - Update section number */}
                    <section className="mb-16">
                        <div className="relative mb-8">
                            <h2 className="text-3xl font-bold inline-block pb-2 border-b-2 border-[hsl(var(--primary))]">
                                6. Future Enhancements
                            </h2>
                        </div>
                        <div className="flex flex-col gap-6 mt-6">
                            {[
                                { title: "Analytics Integration", desc: "Content performance metrics and reader insights" },
                                { title: "Collaboration Tools", desc: "Multi-user editing and commenting" },
                                { title: "Content Scheduling", desc: "Future publishing date scheduling" },
                                { title: "SEO Optimization Tools", desc: "Keyword analysis and optimization suggestions" },
                                { title: "Content Templates", desc: "Pre-defined templates for faster content creation" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="pt-1">
                                        <div className="w-4 h-4 bg-[hsl(var(--primary))] rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                                        <p className="text-[15px] text-[hsl(var(--foreground)_/_0.8)]">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

