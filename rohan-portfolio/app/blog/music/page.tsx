import Link from 'next/link';

export default function MusicBlogPage() {
  const posts = [
    { title: 'My Favorite Albums of 2024', slug: 'favorite-albums-2024' },
    { title: 'How Music Inspires My Coding Journey', slug: 'music-in-coding' },
  ];

  return (
    <section className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Music Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/music/${post.slug}`}>
              <a className="text-blue-500 hover:underline text-lg">{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}