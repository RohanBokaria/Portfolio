#!/usr/bin/env bash

# Creates folders
mkdir -p app/about
mkdir -p app/projects
mkdir -p app/work
mkdir -p app/contact
mkdir -p app/blog/music/[slug]
mkdir -p app/blog/books/[slug]
mkdir -p app/blog/tech/[slug]
mkdir -p components
mkdir -p public/images
mkdir -p styles

# Create key Next.js files
touch app/layout.tsx
touch app/page.tsx

# Create route pages
touch app/about/page.tsx
touch app/projects/page.tsx
touch app/work/page.tsx
touch app/contact/page.tsx

# Create blog landing page
touch app/blog/page.tsx

# Create category listing pages
touch app/blog/music/page.tsx
touch app/blog/books/page.tsx
touch app/blog/tech/page.tsx

# Create individual post pages
touch app/blog/music/[slug]/page.tsx
touch app/blog/books/[slug]/page.tsx
touch app/blog/tech/[slug]/page.tsx

# Create basic components
touch components/Navbar.tsx
touch components/Footer.tsx
touch components/HeroSection.tsx

# Create global stylesheet
touch styles/globals.css

# Optionally create a README
touch README.md

echo "Folder structure created successfully!"