import React from 'react';
import PropTypes from 'prop-types';

const UVSButton = ({ children, outline, icon }) => {
  const renderIcon = () => {
    if (icon) {
      return <img src={icon} alt="icon" />;
    }

    return null;
  };

  return (
    <button type="button" className={`UVSButton ${outline ? 'outline' : ''} ${icon ? 'icon' : ''}`}>
      { renderIcon() }
      { children }
    </button>
  );
};

UVSButton.propTypes = {
  children: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  icon: PropTypes.symbol,
};

UVSButton.defaultProps = {
  outline: false,
  icon: undefined,
};

export default UVSButton;
