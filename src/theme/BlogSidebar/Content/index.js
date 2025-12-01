/**
 * Custom blog sidebar content that groups posts by tag instead of year.
 */
import React, {memo, useMemo} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

// Webpack-only helper to access every generated blog metadata file.
// eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
const blogPostContext = require.context(
  '@generated/docusaurus-plugin-content-blog/default',
  false,
  /site-blog-.*\.json$/,
);

const blogPostMetadata = blogPostContext
  .keys()
  .map((key) => blogPostContext(key));

const permalinkToTags = new Map(
  blogPostMetadata.map((metadata) => [
    metadata.permalink,
    metadata.tags ?? [],
  ]),
);

function groupItemsByTag(items) {
  const groups = new Map();

  items.forEach((item) => {
    const tags = permalinkToTags.get(item.permalink);

    if (tags && tags.length > 0) {
      tags.forEach((tag) => {
        const key = tag.permalink ?? tag.label;
        const current = groups.get(key);
        if (current) {
          current.items.push(item);
        } else {
          groups.set(key, {tag, items: [item]});
        }
      });
    } else {
      const key = '__untagged';
      const current = groups.get(key);
      if (current) {
        current.items.push(item);
      } else {
        groups.set(key, {
          tag: {label: 'Other posts'},
          items: [item],
        });
      }
    }
  });

  return Array.from(groups.values()).sort((a, b) =>
    a.tag.label.localeCompare(b.tag.label),
  );
}

function TagHeading({tag, className}) {
  if (tag.permalink) {
    return (
      <Heading as="h3" className={className}>
        <Link to={tag.permalink}>{tag.label}</Link>
      </Heading>
    );
  }

  return (
    <Heading as="h3" className={className}>
      {tag.label}
    </Heading>
  );
}

function BlogSidebarContent({items, yearGroupHeadingClassName, ListComponent}) {
  const groups = useMemo(() => groupItemsByTag(items), [items]);

  return (
    <>
      {groups.map(({tag, items: tagItems}) => (
        <div role="group" key={tag.permalink ?? tag.label}>
          <TagHeading tag={tag} className={yearGroupHeadingClassName} />
          <ListComponent items={tagItems} />
        </div>
      ))}
    </>
  );
}

export default memo(BlogSidebarContent);
