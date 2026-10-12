# Pixgen

Pixgen is a modern Next.js application for generating and exploring images with a clean, intuitive interface.

## Features

- Fast, responsive Next.js application
- Simple image-generation workflow
- Modern UI optimized for desktop and mobile
- Automatic font optimization with `next/font`

## Tech Stack

- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- JavaScript
- CSS

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, pnpm, or Bun

### Installation

Clone the repository, install dependencies, and start the development server:

```bash
git clone <repository-url>
cd pixgen
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run the linter
```

## Project Structure

```text
app/             Application routes and UI
public/           Static assets
```

Start customizing the application in `app/page.js`.

## Environment Variables

If the application requires external services, create a `.env.local` file in the project root and add the required variables:

```env
# Example
NEXT_PUBLIC_API_URL=your-api-url
```

Do not commit secrets or private credentials to version control.

## Deployment

The recommended deployment platform is [Vercel](https://vercel.com/new). Connect the repository, configure any required environment variables, and deploy.

For other deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)
- [Vercel Documentation](https://vercel.com/docs)

## License

This project is for personal and educational use unless otherwise specified.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
