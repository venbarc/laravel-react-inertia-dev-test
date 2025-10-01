import { Link } from "@inertiajs/react";

export default function Show({ post }) {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <Link
                href="/posts"
                className="inline-block mb-6 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            >
                Back to Posts
            </Link>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

                <p className="text-sm text-gray-400 mb-4">
                    By <span className="font-medium">{post.user.name}</span> |{" "}
                    {new Date(post.created_at).toLocaleString()}
                </p>

                <div className="prose prose-sm dark:prose-invert text-gray-700">
                    <p>{post.content}</p>
                </div>
            </div>
        </div>
    );
}
