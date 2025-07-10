import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({
  href,
  src,
  alt,
  ...attributes
}) => (
  <a href={href} className="logo" {...attributes}>
    <img className="d-block" src={'https://edx-cdn.org/v3/default/logo.svg'} alt={alt} />
  </a>
);

export const logoDataShape = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Logo.propTypes = logoDataShape;

export default Logo;
