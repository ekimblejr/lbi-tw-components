import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  label: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ primary, label, color }) => {
  const style = primary
    ? `bg-${color}-500 hover:bg-${color}-700 text-white`
    : `bg-${color}-50 hover:bg-${color}-100 text-black`;
  return (
    <button
      className={['cursor-pointer font-bold py-2 px-4 rounded', style].join(
        ' ',
      )}
    >
      {label}
    </button>
  );
};

export default Button;
