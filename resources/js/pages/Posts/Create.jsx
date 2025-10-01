import { useState } from "react";
import { router } from "@inertiajs/react";

export default function Create({ authUser }) {
    const [form, setForm] = useState({
        title: "",
        content: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!form.title.trim()) newErrors.title = "Title is required.";
        if (!form.content.trim()) newErrors.content = "Content is required.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        router.post("/posts", form, {
            onError: (errors) => setErrors(errors),
        });
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Create New Post</h1>

            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-100">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={form.title}
                        onChange={handleChange}
                        className={`mt-1 block w-full border rounded p-2 ${
                            errors.title ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-100">
                        Content
                    </label>
                    <textarea
                        name="content"
                        id="content"
                        value={form.content}
                        onChange={handleChange}
                        rows={6}
                        className={`mt-1 block w-full border rounded p-2 ${
                            errors.content ? "border-red-500" : "border-gray-300"
                        }`}
                    ></textarea>
                    {errors.content && (
                        <p className="text-red-500 text-sm mt-1">{errors.content}</p>
                    )}
                </div>

                <div className="flex space-x-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition"
                    >
                        Save Post
                    </button>
                    <a
                        href="/posts"
                        className="bg-gray-600 hover:bg-gray-400 px-6 py-2 rounded transition text-gray-100"
                    >
                        Cancel
                    </a>
                </div>
            </form>
        </div>
    );
}
