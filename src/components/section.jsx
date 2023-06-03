import PropTypes from 'prop-types';

export default function section({ children }) {
  return <section>{children}</section>;
}

section.propTypes = {
  children: PropTypes.node,
};
