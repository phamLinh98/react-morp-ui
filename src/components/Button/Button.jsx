import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button Component - A versatile button component with multiple variants
 * Hoàn toàn được xây dựng bằng TailwindCSS
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  icon,
  iconPosition = 'left',
  loading = false,
  ...props 
}) => {
  
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 focus:ring-blue-400 shadow-blue-500/50',
    secondary: 'bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 text-white hover:from-purple-600 hover:via-purple-700 hover:to-indigo-700 focus:ring-purple-400 shadow-purple-500/50',
    success: 'bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 text-white hover:from-emerald-600 hover:via-green-700 hover:to-teal-700 focus:ring-green-400 shadow-green-500/50',
    danger: 'bg-gradient-to-r from-rose-500 via-red-600 to-pink-600 text-white hover:from-rose-600 hover:via-red-700 hover:to-pink-700 focus:ring-red-400 shadow-red-500/50',
    warning: 'bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-white hover:from-amber-500 hover:via-yellow-600 hover:to-orange-600 focus:ring-yellow-400 shadow-yellow-500/50',
    info: 'bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-600 text-white hover:from-cyan-600 hover:via-sky-700 hover:to-blue-700 focus:ring-cyan-400 shadow-cyan-500/50',
    
    // Outline variants
    'outline-primary': 'border-3 border-blue-600 text-blue-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-blue-700 focus:ring-blue-400 shadow-blue-300/30',
    'outline-secondary': 'border-3 border-purple-600 text-purple-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-600 hover:text-white hover:border-purple-700 focus:ring-purple-400 shadow-purple-300/30',
    'outline-success': 'border-3 border-green-600 text-green-700 hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-600 hover:text-white hover:border-green-700 focus:ring-green-400 shadow-green-300/30',
    'outline-danger': 'border-3 border-red-600 text-red-700 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-600 hover:text-white hover:border-red-700 focus:ring-red-400 shadow-red-300/30',
    'outline-warning': 'border-3 border-amber-500 text-amber-700 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 hover:text-white hover:border-amber-600 focus:ring-amber-400 shadow-amber-300/30',
    'outline-info': 'border-3 border-cyan-600 text-cyan-700 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-sky-600 hover:text-white hover:border-cyan-700 focus:ring-cyan-400 shadow-cyan-300/30',
    
    // Ghost variants
    'ghost-primary': 'text-blue-700 font-bold hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 focus:ring-blue-400 shadow-blue-200/40',
    'ghost-secondary': 'text-purple-700 font-bold hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-200 focus:ring-purple-400 shadow-purple-200/40',
    'ghost-success': 'text-green-700 font-bold hover:bg-gradient-to-r hover:from-green-100 hover:to-teal-200 focus:ring-green-400 shadow-green-200/40',
    'ghost-danger': 'text-red-700 font-bold hover:bg-gradient-to-r hover:from-red-100 hover:to-pink-200 focus:ring-red-400 shadow-red-200/40',
    
    // Gradient variants
    'gradient-blue': 'bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500 text-white hover:from-blue-500 hover:via-cyan-600 hover:to-teal-600 focus:ring-cyan-400 shadow-cyan-500/60 animate-gradient',
    'gradient-purple': 'bg-gradient-to-br from-purple-400 via-pink-500 to-rose-500 text-white hover:from-purple-500 hover:via-pink-600 hover:to-rose-600 focus:ring-pink-400 shadow-pink-500/60 animate-gradient',
    'gradient-green': 'bg-gradient-to-br from-lime-400 via-green-500 to-emerald-600 text-white hover:from-lime-500 hover:via-green-600 hover:to-emerald-700 focus:ring-green-400 shadow-green-500/60 animate-gradient',
    'gradient-orange': 'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 text-white hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 focus:ring-orange-400 shadow-orange-500/60 animate-gradient',
    
    // Soft variants
    'soft-primary': 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 hover:from-blue-200 hover:to-cyan-200 focus:ring-blue-400 shadow-blue-300/40',
    'soft-success': 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 hover:from-green-200 hover:to-emerald-200 focus:ring-green-400 shadow-green-300/40',
    'soft-danger': 'bg-gradient-to-r from-red-100 to-rose-100 text-red-800 hover:from-red-200 hover:to-rose-200 focus:ring-red-400 shadow-red-300/40',
    'soft-warning': 'bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 hover:from-yellow-200 hover:to-amber-200 focus:ring-yellow-400 shadow-yellow-300/40',
    
    // Dark variants
    dark: 'bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white hover:from-gray-800 hover:via-slate-800 hover:to-gray-900 focus:ring-gray-600 shadow-gray-900/60',
    light: 'bg-gradient-to-br from-white via-gray-50 to-slate-100 text-gray-900 hover:from-gray-50 hover:via-gray-100 hover:to-slate-200 focus:ring-gray-400 border-2 border-gray-300 shadow-gray-300/50',
    
    // Link variant
    link: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:underline focus:ring-purple-400 font-bold',
    
    // Neon variants
    'neon-pink': 'bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 text-white hover:from-pink-600 hover:via-rose-600 hover:to-fuchsia-700 focus:ring-pink-400 shadow-pink-500/80 shadow-2xl',
    'neon-cyan': 'bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-600 text-white hover:from-cyan-500 hover:via-teal-600 hover:to-blue-700 focus:ring-cyan-400 shadow-cyan-500/80 shadow-2xl',
    'neon-lime': 'bg-gradient-to-r from-lime-400 via-green-500 to-emerald-600 text-white hover:from-lime-500 hover:via-green-600 hover:to-emerald-700 focus:ring-lime-400 shadow-lime-500/80 shadow-2xl',
  };
  
  // Size styles
  const sizeStyles = {
    xs: 'px-2.5 py-1.5 text-xs rounded',
    sm: 'px-3 py-2 text-sm rounded-md',
    md: 'px-4 py-2.5 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-lg',
    xl: 'px-8 py-4 text-xl rounded-xl',
  };
  
  // Icon size based on button size
  const iconSizeStyles = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
  };
  
  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';
  
  // Loading spinner
  const LoadingSpinner = () => (
    <svg 
      className={`animate-spin ${iconSizeStyles[size]} ${iconPosition === 'right' ? 'ml-2' : 'mr-2'}`} 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
  
  // Combine all styles
  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant] || variantStyles.primary}
    ${sizeStyles[size]}
    ${widthStyles}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && iconPosition === 'left' && <LoadingSpinner />}
      {!loading && icon && iconPosition === 'left' && (
        <span className={`${iconSizeStyles[size]} ${children ? 'mr-2' : ''}`}>
          {icon}
        </span>
      )}
      {children}
      {loading && iconPosition === 'right' && <LoadingSpinner />}
      {!loading && icon && iconPosition === 'right' && (
        <span className={`${iconSizeStyles[size]} ${children ? 'ml-2' : ''}`}>
          {icon}
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    'primary', 'secondary', 'success', 'danger', 'warning', 'info',
    'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info',
    'ghost-primary', 'ghost-secondary', 'ghost-success', 'ghost-danger',
    'gradient-blue', 'gradient-purple', 'gradient-green', 'gradient-orange',
    'soft-primary', 'soft-success', 'soft-danger', 'soft-warning',
    'dark', 'light', 'link',
    'neon-pink', 'neon-cyan', 'neon-lime'
  ]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  loading: PropTypes.bool,
};

export default Button;
