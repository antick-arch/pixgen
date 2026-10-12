# Pixgen

Pixgen is a Next.js application for generating and exploring images with a
clean, responsive interface.

## Features

- Image-generation and image-exploration pages
- Responsive UI for desktop and mobile
- Email/password authentication
- Google sign-in
- Protected profile and photo routes
- Profile updates for a user's name and image URL
- Automatic font optimization with `next/font`

## Tech Stack

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Better Auth](https://www.better-auth.com/)
- [MongoDB](https://www.mongodb.com/)
- [HeroUI](https://www.heroui.com/)
- JavaScript and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, pnpm, or Bun
- A MongoDB database
- Google OAuth credentials if Google sign-in is enabled

### Installation

Clone the repository, install dependencies, and start the development server:

```bash
git clone <repository-url>
cd pixgen
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

`MONGODB_URI` is required for Better Auth's MongoDB adapter. The Google
variables are required when using Google sign-in. Never commit `.env.local` or
any other file containing credentials.

### Authentication

Better Auth is exposed through the Next.js route at
`/api/auth/[...all]`. The client uses the same application origin, so local
development requests are sent to `http://localhost:3000`.

Users can:

1. Create an account from `/signup`.
2. Sign in from `/signin`.
3. Sign out from the navigation bar.
4. Open `/profile` to view and update their name and image URL.

Profile updates are submitted as a single object containing the `name` and
`image` fields, which matches Better Auth's `updateUser` API.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run ESLint
```

## Project Structure

```text
src/
  app/              Application routes and API handlers
  components/       Reusable UI components
  lib/              Better Auth server and client configuration
public/             Static assets and image data
```

## Deployment

The recommended deployment platform is
[Vercel](https://vercel.com/). Configure `MONGODB_URI`, `GOOGLE_CLIENT_ID`,
and `GOOGLE_CLIENT_SECRET` in the deployment environment before deploying.

For other deployment options, see the
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is for personal and educational use unless otherwise specified.
