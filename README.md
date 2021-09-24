# Sanity Astro Minimal Starter

## What you have

- A blazing fast blog with [Astro](https://astro.build)
- Structured content using [Sanity.io](https://www.sanity.io)

## Quick start

I made a step-by-step tutorial on YouTube [HERE](https://www.youtube.com/watch?v=Jz3cxK1rztw)

Or follow the steps below:
1. Clone this repository
2. `cd sanity`
3. If you don't have the Sanity CLI already run `npm install -g @sanity/cli`
4. `sanity init` and follow the prompts (you will need to create a Sanity account if you haven't already)
5. `npm run graphql-deploy`
6. To run your Sanity Studio
   1. Open a terminal located at the sanity folder
   2. `sanity install`
   3. `sanity start`
   4. Your studio should be running on [http://localhost:3333](http://localhost:3333)
7.  Open [http://localhost:3333](http://localhost:3333) and copy the project ID from the Project info section
8.  Navigate to the astro folder
9.  Rename `.env.template` to `.env` and 
10. Replace the demo token ID `8hj1t7km` with your token ID
11. To run your Astro site
   5. Open a terminal located at the astro folder
   6. `npm install`
   7. `npm start`
   8. Your Astro site should be running on [http://localhost:3000](http://localhost:3000)
12. `npm run build` to build to production locally

## Enable real-time content preview on development

1. Go to your [project’s API settings on manage.sanity.io](https://manage.sanity.io/projects/adxlh59f/settings/api) and create a token with read rights.
2. Rename `.env.development.template` to `.env` and paste in the token: `SANITY_READ_TOKEN="yourTokenHere"`.
3. Restart the development server (`ctrl + C` and `npm run dev`).

## Stuck? Get help

[![Slack Community Button](https://slack.sanity.io/badge.svg)](https://slack.sanity.io/)

Join [Sanity’s developer community](https://slack.sanity.io) or ping us [on twitter](https://twitter.com/sanity_io).

