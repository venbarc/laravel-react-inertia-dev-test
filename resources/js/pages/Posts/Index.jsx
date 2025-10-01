import { Link } from '@inertiajs/react';

export default function Index({ posts }) {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Posts</h1>

            <Link
                href="/posts/create"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                Create New Post
            </Link>

            {posts.length === 0 ? (
                <div className="mt-8 text-center text-gray-500">
                    <p className="text-lg mb-2">No posts available.</p>
                    <p>
                        Run the seeder: <code>php artisan db:seed</code>
                    </p>
                </div>
            ) : (
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col"
                        >
                            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                            <p className="text-sm text-gray-400 mb-4">
                                Author : <span className="font-medium">{post.user.name}</span> |{' '}
                                {new Date(post.created_at).toLocaleDateString()}
                            </p>
                            <p className="text-gray-500 flex-grow">{post.content}</p>

                            <Link
                                href={`/posts/${post.id}`}
                                className="mt-4 inline-block text-blue-500 hover:underline"
                            >
                                View Post 
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
