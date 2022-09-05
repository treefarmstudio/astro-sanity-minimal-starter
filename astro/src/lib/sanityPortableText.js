import { toHTML } from '@portabletext/to-html';
import { getSanityImageURL } from '../utils/helpers.js';

const customComponents = {
  types: {
    mainImage: ({ value }) => {
      return `
        <picture>
          <source
            srcset="${getSanityImageURL(value.asset).format('webp').url()}"
            type="image/webp"
          />
          <img
            class="responsive__img"
            src="${getSanityImageURL(value.asset).url()}"
            alt="${value.alt}"
          />
        </picture>
      `;
    },
    image: ({ value }) => {
      return `
        <picture>
          <source
            srcset="${getSanityImageURL(value.asset).format('webp').url()}"
            type="image/webp"
          />
          <img
            class="responsive__img"
            src="${getSanityImageURL(value.asset).url()}"
            alt="${value.alt}"
          />
        </picture>
      `;
    },
    code: ({ value }) => {
      return `<code-block code='${value.code}' language='${value.language}'></code-block>`;
    },
  },
};

export function sanityPortableText(portabletext) {
  return toHTML(portabletext, { components: customComponents });
}