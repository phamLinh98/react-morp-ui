import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Tabs Component - A versatile tabs component with multiple variants
 * Hoàn toàn được xây dựng bằng TailwindCSS, lấy cảm hứng từ Ant Design
 */
const Tabs = ({ 
  items = [],
  defaultActiveKey,
  activeKey,
  onChange,
  variant = 'line',
  size = 'md',
  position = 'top',
  centered = false,
  animated = true,
  className = '',
  tabBarClassName = '',
  contentClassName = '',
  ...props 
}) => {
  // State để quản lý tab active (controlled hoặc uncontrolled)
  const [internalActiveKey, setInternalActiveKey] = useState(
    defaultActiveKey || (items.length > 0 ? items[0].key : '')
  );

  // Xác định key hiện tại (ưu tiên activeKey từ props nếu có)
  const currentActiveKey = activeKey !== undefined ? activeKey : internalActiveKey;

  // Handle tab change
  const handleTabClick = (key) => {
    if (activeKey === undefined) {
      setInternalActiveKey(key);
    }
    if (onChange) {
      onChange(key);
    }
  };

  // Base styles cho tab bar container
  const tabBarBaseStyles = 'flex';
  
  // Position styles cho tab bar
  const tabBarPositionStyles = {
    top: 'flex-col',
    bottom: 'flex-col-reverse',
    left: 'flex-row',
    right: 'flex-row-reverse',
  };

  // Alignment styles
  const alignmentStyles = centered ? 'justify-center' : 'justify-start';

  // Tab list orientation
  const tabListOrientationStyles = {
    top: 'flex-row border-b',
    bottom: 'flex-row border-t',
    left: 'flex-col border-r min-w-[120px]',
    right: 'flex-col border-l min-w-[120px]',
  };

  // Variant styles for tab bar
  const tabBarVariantStyles = {
    line: '',
    card: 'bg-gradient-to-r from-gray-50 to-slate-100 p-1 rounded-lg',
    'rounded-card': 'bg-gradient-to-r from-gray-100 to-slate-200 p-2 rounded-2xl gap-2',
    pill: 'bg-gradient-to-r from-blue-50 to-indigo-50 p-1 rounded-full gap-1',
    'edged-card': 'bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 p-1.5 rounded-xl border-2 border-gray-300 shadow-inner',
  };

  // Size styles for tabs
  const tabSizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3.5 text-lg',
  };

  // Variant styles for individual tabs
  const getTabVariantStyles = (isActive) => {
    const variants = {
      line: {
        active: `border-b-3 border-blue-600 text-blue-700 font-bold bg-gradient-to-t from-blue-50 to-transparent`,
        inactive: `border-b-3 border-transparent text-gray-600 hover:text-blue-600 hover:bg-gradient-to-t hover:from-blue-50 hover:to-transparent`,
      },
      card: {
        active: `bg-gradient-to-br from-white via-blue-50 to-white text-blue-700 font-bold shadow-lg border-2 border-blue-200 rounded-lg transform scale-105`,
        inactive: `text-gray-600 hover:bg-gradient-to-br hover:from-gray-100 hover:to-slate-100 hover:text-blue-600 rounded-lg border-2 border-transparent hover:border-gray-300`,
      },
      'rounded-card': {
        active: `bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 text-white font-bold shadow-xl shadow-blue-500/50 rounded-xl transform scale-105`,
        inactive: `text-gray-700 hover:bg-gradient-to-br hover:from-gray-200 hover:to-slate-200 hover:text-blue-700 rounded-xl border-2 border-transparent hover:border-gray-400`,
      },
      pill: {
        active: `bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-600 text-white font-bold shadow-lg shadow-blue-500/40 rounded-full transform scale-105`,
        inactive: `text-gray-600 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 hover:text-blue-700 rounded-full border-2 border-transparent hover:border-blue-300`,
      },
      'edged-card': {
        active: `bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 text-white font-bold shadow-xl shadow-cyan-500/50 rounded-lg border-3 border-white transform scale-105`,
        inactive: `text-gray-700 bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-slate-50 hover:text-blue-700 rounded-lg border-2 border-gray-300 hover:border-blue-400 hover:shadow-md`,
      },
    };

    return isActive ? variants[variant].active : variants[variant].inactive;
  };

  // Animation classes
  const animationClasses = animated 
    ? 'transition-all duration-300 ease-in-out' 
    : '';

  // Get active tab content
  const activeItem = items.find(item => item.key === currentActiveKey);

  return (
    <div 
      className={`tabs-container ${tabBarPositionStyles[position]} ${className}`}
      {...props}
    >
      {/* Tab Bar */}
      <div 
        className={`
          tab-bar 
          ${tabListOrientationStyles[position]}
          ${tabBarVariantStyles[variant]}
          ${alignmentStyles}
          ${tabBarClassName}
        `.trim().replace(/\s+/g, ' ')}
        role="tablist"
      >
        {items.map((item) => {
          const isActive = item.key === currentActiveKey;
          const isDisabled = item.disabled;

          return (
            <button
              key={item.key}
              role="tab"
              aria-selected={isActive}
              aria-disabled={isDisabled}
              disabled={isDisabled}
              onClick={() => !isDisabled && handleTabClick(item.key)}
              className={`
                tab-item
                ${tabSizeStyles[size]}
                ${getTabVariantStyles(isActive)}
                ${animationClasses}
                ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:scale-105 active:scale-95'}
                focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2
              `.trim().replace(/\s+/g, ' ')}
            >
              {item.icon && (
                <span className={`inline-flex items-center ${item.label ? 'mr-2' : ''}`}>
                  {item.icon}
                </span>
              )}
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div 
        className={`
          tab-content 
          ${animated ? 'animate-fadeIn' : ''}
          ${contentClassName}
          ${position === 'left' || position === 'right' ? 'flex-1 p-4' : 'p-4'}
        `.trim().replace(/\s+/g, ' ')}
        role="tabpanel"
      >
        {activeItem?.children}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  /** Mảng các tab items với cấu trúc: { key, label, children, icon?, disabled? } */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
      children: PropTypes.node.isRequired,
      icon: PropTypes.node,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  /** Key của tab mặc định khi component mount (uncontrolled) */
  defaultActiveKey: PropTypes.string,
  /** Key của tab hiện tại (controlled) */
  activeKey: PropTypes.string,
  /** Callback khi tab thay đổi */
  onChange: PropTypes.func,
  /** Kiểu hiển thị của tabs */
  variant: PropTypes.oneOf(['line', 'card', 'rounded-card', 'pill', 'edged-card']),
  /** Kích thước của tabs */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Vị trí của tab bar */
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  /** Căn giữa các tabs */
  centered: PropTypes.bool,
  /** Bật/tắt animation */
  animated: PropTypes.bool,
  /** Custom className cho container */
  className: PropTypes.string,
  /** Custom className cho tab bar */
  tabBarClassName: PropTypes.string,
  /** Custom className cho content */
  contentClassName: PropTypes.string,
};

export default Tabs;
