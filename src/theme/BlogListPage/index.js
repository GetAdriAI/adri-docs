/**
 * Custom blog list page that prioritizes posts with the primary tag.
 */
import React, {useMemo} from 'react';
import clsx from 'clsx';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import {PRIMARY_TAG} from '../blogConfig';

function sortByDateDesc(items) {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.content.metadata.date).getTime() || 0;
    const dateB = new Date(b.content.metadata.date).getTime() || 0;
    return dateB - dateA;
  });
}

function orderItems(items) {
  if (!PRIMARY_TAG) {
    return items;
  }

  const priorityTag = PRIMARY_TAG.toLowerCase();
  const priorityItems = [];
  const otherItems = [];

  items.forEach((item) => {
    const tags = item.content.metadata.tags ?? [];
    const hasPriorityTag = tags.some((tag) => {
      const labelMatch = tag.label?.toLowerCase() === priorityTag;
      const permalinkMatch =
        tag.permalink?.toLowerCase().endsWith(`/${priorityTag}`) ?? false;
      return labelMatch || permalinkMatch;
    });

    if (hasPriorityTag) {
      priorityItems.push(item);
    } else {
      otherItems.push(item);
    }
  });

  return [...sortByDateDesc(priorityItems), ...sortByDateDesc(otherItems)];
}

function BlogListPageMetadata(props) {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props) {
  const {metadata, items, sidebar} = props;
  const orderedItems = useMemo(() => orderItems(items), [items]);

  return (
    <BlogLayout sidebar={sidebar}>
      <BlogPostItems items={orderedItems} />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
