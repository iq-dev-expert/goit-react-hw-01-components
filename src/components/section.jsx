import PropTypes from 'prop-types';

export default function section({ className, children }) {
  return <section className={className}>{children}</section>;
}

section.propTypes = {
  children: PropTypes.node,
};
