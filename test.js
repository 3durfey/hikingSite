const value = {
  id: 30,
  date: "2024-01-26T19:51:22",
  date_gmt: "2024-01-26T19:51:22",
  guid: {
    rendered: "http://localhost/testsite/?p=30",
  },
  modified: "2024-01-31T19:34:15",
  modified_gmt: "2024-01-31T19:34:15",
  slug: "test2",
  status: "publish",
  type: "post",
  link: "http://localhost/testsite/test2/",
  title: {
    rendered: "test2",
  },
  content: {
    rendered: "\n<p>sdfdsfgdsgfsdf</p>\n",
    protected: false,
  },
  excerpt: {
    rendered: "<p>sdfdsfgdsgfsdf</p>\n",
    protected: false,
  },
  author: 1,
  featured_media: 0,
  comment_status: "open",
  ping_status: "open",
  sticky: false,
  template: "",
  format: "standard",
  meta: {
    footnotes: "",
  },
  categories: [1],
  tags: [],
  _links: {
    self: [
      {
        href: "http://localhost/testsite/wp-json/wp/v2/posts/30",
      },
    ],
    collection: [
      {
        href: "http://localhost/testsite/wp-json/wp/v2/posts",
      },
    ],
    about: [
      {
        href: "http://localhost/testsite/wp-json/wp/v2/types/post",
      },
    ],
    author: [
      {
        embeddable: true,
        href: "http://localhost/testsite/wp-json/wp/v2/users/1",
      },
    ],
    replies: [
      {
        embeddable: true,
        href: "http://localhost/testsite/wp-json/wp/v2/comments?post=30",
      },
    ],
    "version-history": [
      {
        count: 2,
        href: "http://localhost/testsite/wp-json/wp/v2/posts/30/revisions",
      },
    ],
    "predecessor-version": [
      {
        id: 34,
        href: "http://localhost/testsite/wp-json/wp/v2/posts/30/revisions/34",
      },
    ],
    "wp:attachment": [
      {
        href: "http://localhost/testsite/wp-json/wp/v2/media?parent=30",
      },
    ],
    "wp:term": [
      {
        taxonomy: "category",
        embeddable: true,
        href: "http://localhost/testsite/wp-json/wp/v2/categories?post=30",
      },
      {
        taxonomy: "post_tag",
        embeddable: true,
        href: "http://localhost/testsite/wp-json/wp/v2/tags?post=30",
      },
    ],
    curies: [
      {
        name: "wp",
        href: "https://api.w.org/{rel}",
        templated: true,
      },
    ],
  },
};
console.log(value.date);
