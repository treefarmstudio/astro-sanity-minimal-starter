import {h} from 'preact';
import BlockContent from '@sanity/block-content-to-react';

export default function SanityBlockContent({blocks}) {
  return (
    <BlockContent blocks={blocks} />
  )
}