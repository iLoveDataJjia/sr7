This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on Github Pages

For Github Pages:

```bash
git worktree add gh-pages && cd gh-pages
cd frontend && npm run build && cd ..
mv frontend/dist .
ls -A | grep -Ev "^(\.git|dist)$" | xargs rm -rf
mv dist/* . && rm -rf dist
touch .nojekyll
git add .
git commit -m "DONE: Add 'Deployment for Github Pages'"
git push --set-upstream origin gh-pages --force

cd frontend
npm run build
git branch -D gh-pages 2>/dev/null
git checkout --orphan gh-pages
git branch -D gh-pages
cd ..
```

_Note: The image supports Windows, Linux, and MacOS, specifically amd64 and arm64._
