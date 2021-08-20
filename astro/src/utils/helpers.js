import { client } from '../lib/sanityClient.js';
import imageUrlBuilder from '@sanity/image-url';
import BlocksToMarkdown from '@sanity/block-content-to-markdown';

const builder = imageUrlBuilder(client);

export function sanityGraphqlQuery(query) {
    return `${process.env.SANITY_GRAPHQL_URL}?query=${query}`;
}

export function getSanityImageUrl(source) {
    return builder.image(source);
}

export function convertPortableTextToMarkdown (postBody) {
    return BlocksToMarkdown(postBody);
  }