import PropTypes from 'prop-types';
import { Button as LoadMoreBtn } from './Button.styled';

export const Button = ({ onClick }) => (
  <LoadMoreBtn type="button" onClick={onClick}>
    Load more
  </LoadMoreBtn>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
