import PropTypes from 'prop-types';

const Notify = ({ errorMessage, successMessage }) => {
  if (errorMessage) {
    return (
      <div style={{ color: 'red', marginBottom: '1em' }}>
        {errorMessage}
      </div>
    );
  }

  if (successMessage) {
    return (
      <div style={{ color: 'green', marginBottom: '1em' }}>
        {successMessage}
      </div>
    );
  }

  return null;
};

Notify.propTypes = {
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
};

export default Notify;