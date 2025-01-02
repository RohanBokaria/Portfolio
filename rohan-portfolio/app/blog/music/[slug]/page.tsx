export default function MusicPostPage({ params }: { params: { slug: string } }) {
    return (
      <article className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Post Title: {params.slug.replace('-', ' ')}</h1>
        <p>This is where the content for the post "{params.slug}" will go.</p>
      </article>
    );
  }