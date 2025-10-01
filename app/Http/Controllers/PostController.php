<?php

namespace App\Http\Controllers;

use App\Http\Requests\Post\StoreRequest;
use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('user:id,name')
            ->latest()
            ->get()
            ->map(function ($post) {
                return [
                    'id' => $post->id,
                    'title' => $post->title,
                    'content' => Str::limit($post->content, 120),
                    'created_at' => $post->created_at->toDateTimeString(),
                    'user' => [
                        'id' => $post->user->id,
                        'name' => $post->user->name,
                    ],
                ];
            });

        return Inertia::render('Posts/Index', [ 
            'posts' => $posts
        ]);
    }

    public function show(Post $post)
    {
        $post->load('user:id,name');

        return Inertia::render('Posts/Show', [
            'post' => [
                'id' => $post->id,
                'title' => $post->title,
                'content' => $post->content,
                'created_at' => $post->created_at->toDateTimeString(),
                'user' => [
                    'id' => $post->user->id,
                    'name' => $post->user->name,
                ],
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('Posts/Create');
    }

    public function store(StoreRequest $request)
    {
        Post::create($request->validated());

        return redirect()->route('posts.index');
    }
}
