import Link from 'next/link';

export default function BlogPage() {
  const categories = [
    { name: 'Music', href: '/blog/music' },
    { name: 'Books', href: '/blog/books' },
    { name: 'Tech', href: '/blog/tech' },
  ];

  return (
    <section className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Categories</h1>
      <ul className="space-y-4">
        {categories.map((category) => (
          <li key={category.name}>
            <Link href={category.href}>
              <a className="text-blue-500 hover:underline text-lg">{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}