'use client';

import type React from 'react';
import './button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: React.ReactElement;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  icon,
  onClick,
  className = '',
}) => {
  return (
    <button className={`button ${variant} ${className}`} onClick={onClick}>
      {icon && <span className="button-icon">{icon}</span>}
      <span className="button-label">{children}</span>
    </button>
  );
};

export default Button;
