import PropTypes from 'prop-types';

export default function section({ className, children }) {
  return <section className={className}>{children}</section>;
}

section.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};
