import {h} from 'preact';
import BlockContent from '@sanity/block-content-to-react';

const serializers = {
  types: {
    code: ({node}) => <code-block code={node.code} language={node.language}></code-block>
  }
}

export default function SanityBlockContent({blocks}) {
  return (
    <BlockContent blocks={blocks} serializers={serializers} />
  )
}