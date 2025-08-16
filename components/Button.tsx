'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  icon,
  iconPosition = 'left'
}: ButtonProps) => {
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium rounded-lg
    transition-all duration-200 ease-in-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-50
    relative overflow-hidden group
  `;

  const variantClasses = {
    primary: `
      bg-primary text-primary-foreground
      hover:bg-primary/90 active:bg-primary/80
      focus-visible:ring-primary
      shadow-lg hover:shadow-xl
    `,
    secondary: `
      bg-secondary text-secondary-foreground
      hover:bg-secondary/80 active:bg-secondary/70
      focus-visible:ring-secondary
      shadow-md hover:shadow-lg
    `,
    outline: `
      border-2 border-primary text-primary
      hover:bg-primary hover:text-primary-foreground
      focus-visible:ring-primary
      shadow-sm hover:shadow-md
    `,
    ghost: `
      text-primary hover:bg-primary/10
      focus-visible:ring-primary
      hover:shadow-sm
    `
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm h-9',
    md: 'px-4 py-2 text-base h-10',
    lg: 'px-6 py-3 text-lg h-12'
  };

  const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      aria-disabled={disabled || loading}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {/* Loading Spinner */}
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-inherit rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}

      {/* Content Container */}
      <motion.div
        className={`flex items-center gap-2 ${loading ? 'opacity-0' : 'opacity-100'}`}
        initial={false}
        animate={{ opacity: loading ? 0 : 1 }}
      >
        {/* Left Icon */}
        {icon && iconPosition === 'left' && (
          <motion.div
            className="flex-shrink-0"
            initial={{ x: -5, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {icon}
          </motion.div>
        )}

        {/* Button Text */}
        <motion.span
          className="font-medium"
          initial={{ y: 1, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {children}
        </motion.span>

        {/* Right Icon */}
        {icon && iconPosition === 'right' && (
          <motion.div
            className="flex-shrink-0"
            initial={{ x: 5, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {icon}
          </motion.div>
        )}
      </motion.div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.3 }}
      />

      {/* Ripple Effect on Click */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-lg pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default Button;
