# Semyon Katz's personal page

![Static Badge](https://img.shields.io/badge/status-in_progress-yellow) ![Static Badge](https://img.shields.io/badge/Next.js-gray?logo=Next.js) ![Static Badge](https://img.shields.io/badge/TypeScript-gray?logo=TypeScript) ![Static Badge](https://img.shields.io/badge/Framer_Motion-gray?logo=Framer) ![Static Badge](https://img.shields.io/badge/Imgix-gray)

A personal website with photography portfolio, powered by [Imgix](https://www.imgix.com). Project is deployed via Vercel: [semyon.io](https://semyon.io)

## Features

- Responsive design with rich animations
- Server-side static rendering of components with data
- Image optimization for different screen sizes with caching results on Imgix CDN
- Extracting photo metadata from IPTC fields directly from the images files

## Project launch

### env

To run the project you will need `.env.local` in the root directory. Here is an example:

```env
IMGIX_API_KEY=ABCDE12345
CLOUDFLARE_SOURCE_ID=AAAAABBBBB
IMAGES_API=https://api.imgix.com/api/v1
NEXT_PUBLIC_IMAGES_SRC=https://yourimgixaccount.imgix.net
NEXT_PUBLIC_IMAGES_SRC_SUBDOMAIN=yourimgixaccount.imgix.net
NEXT_PUBLIC_DOMAIN=yourdomainname.org
NEXT_PUBLIC_MEASUREMENT_ID=googleAnalyticsTag
```

### Running in development mode

```bash
## After cloning the repo, use clean install:
npm ci

## Next dev mode:
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Future plans

- Admin route for images management
- Authorization for this route
- UI and APIs to work with images loaded directly to source (edit, reorder etc)
- Single image uploading
- Multiple images uploading
