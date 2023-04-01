import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  label: string;
  backgroundColor: string;
}

const Button: React.FC<ButtonProps> = ({ primary, label, backgroundColor }) => {
  const style = primary
    ? `bg-slate-500 hover:bg-slate-700 text-white`
    : `bg-slate-50 hover:bg-slate-100 text-black`;
  return (
    <button
      type="button"
      className={['cursor-pointer font-bold py-2 px-4 rounded', style].join(
        ' ',
      )}
    >
      {label}
    </button>
  );
};

export default Button;
