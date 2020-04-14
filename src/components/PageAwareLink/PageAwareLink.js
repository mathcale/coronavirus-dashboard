import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const PageAwareLink = ({ href, children }) => {
  const router = useRouter();
  let className = children.props.className || '';

  if (router.pathname === href) {
    className = `${className} active`;
  }

  return (
    <Link href={href} passHref>
      {React.cloneElement(children, { className })}
    </Link>
  );
}
