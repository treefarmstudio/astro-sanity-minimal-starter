# Astro Sanity Minimal Starter

## [Demo Site](https://astro-minimal-starter.netlify.app/)

If you haven't heard about [Astro](https://astro.build) yet you're missing out. This starter repo gives you a blog website with posts written in Markdown, all powered by Astro.

Don't be fooled by the simplicity of this starter either. With excellent SEO built in, Astro's excellent developer environment, and performance best practices you're getting one of the best foundations for a personal blog with posts written in markdown. The reason for making such a bare bones starter in terms of styles is that it has what you need out of the box for SEO and site structure but it makes no assumptions about how you want it look and behave. 

Sometimes starters can feel like they are giving us way too much and you'll spend a day picking apart half of the code to get to the setup you actually wanted. Want to vanilla CSS instead of Tailwind or Scss? No problem!

## Features

- A full headless CMS with [Sanity.io](https://sanity.io)
- Excellent SEO Built In
  - Open Graph Tags (Twitter, Facebook, etc.)
  - User Declared Canonical URLs
  - RSS Feed
  - XML Sitemap
  - Robots.txt
  - JSON LD Schema
- Extremely minimal styles
- Performant Google Fonts Setup

## Get Started

Watch my [step-by-step tutorial on YouTube]()

**Or** 

Follow the manual steps below:
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
    1.  . Open a terminal located at the astro folder
    2.  `npm install`
    3.  `npm start`
    4.  Your Astro site should be running on [http://localhost:3000](http://localhost:3000)
12. `npm run build` to build to production locally

## Enable real-time content preview on development

1. Go to your [project’s API settings on manage.sanity.io](https://manage.sanity.io/projects/adxlh59f/settings/api) and create a token with read rights.
2. Rename `.env.development.template` to `.env` and paste in the token: `SANITY_READ_TOKEN="yourTokenHere"`.
3. Restart the development server (`ctrl + C` and `npm run dev`).

## Stuck? Get help

[![Slack Community Button](https://slack.sanity.io/badge.svg)](https://slack.sanity.io/)

Join [Sanity’s developer community](https://slack.sanity.io) or ping us [on twitter](https://twitter.com/sanity_io).

