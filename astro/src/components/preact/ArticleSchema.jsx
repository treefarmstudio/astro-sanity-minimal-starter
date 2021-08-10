function ArticleSchema({title, permalink, publishDate, ogImageUrl, description}) {
    const ldData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "publisher": {
            "@type": "Organization",
            "name": "Example Blog",
            "url": "https://example.com/blog/",
        },
        "author": {
            "@type": "Person",
            "name": "Example",
            "image": {
                "@type": "ImageObject",
                "url": "https://example.com/assets/img/favicon.png",
                "width": 512,
                "height": 512
            },
            "url": "https://example.com/about/",
            "sameAs": [
                "https://example.com",
                "https://instagram.com/example",
                "https://twitter.com/example"
            ]
        },
        "headline": `${title}`,
        "url": `${permalink}`,
        "datePublished": `${publishDate}`,
        "image": {
            "@type": "ImageObject",
            "url": `https://example.com${ogImageUrl}`,
            "width": 3600,
            "height": 1890
        },
        "description": `${description}`,
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://example.com/blog/"
            }
        }
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(ldData, null, 4)}} />
        </>
    );
}

export default ArticleSchema;