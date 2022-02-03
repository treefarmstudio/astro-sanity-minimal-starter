import { parseISO, format } from 'date-fns';
import { client } from '../lib/sanityClient.js';
import imageUrlBuilder from '@sanity/image-url';
import BlocksToMarkdown from '@sanity/block-content-to-markdown';

const builder = imageUrlBuilder(client);

export function formatBlogPostDate(date) {
  const dateString = parseISO(date, 'YYYY/MM/Do');
  const formattedDateString = format(dateString, 'MMMM do, yyyy');
  return `${formattedDateString}`;
}

export function getSanityImageUrl(source) {
  return builder.image(source);
}

export async function convertBlockContentToMarkdown(postBody) {
  return BlocksToMarkdown(postBody);
}
