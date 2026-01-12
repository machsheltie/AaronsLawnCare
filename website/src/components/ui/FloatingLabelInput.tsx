import { InputHTMLAttributes, forwardRef, useState } from 'react';
import { motion } from 'framer-motion';

interface FloatingLabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  isRequired?: boolean;
}

export const FloatingLabelInput = forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  ({ label, error, isRequired, className = '', ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = props.value !== undefined && props.value !== '';

    const shouldFloat = isFocused || hasValue;

    return (
      <div className="relative">
        <input
          ref={ref}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={`
            peer w-full px-4 pt-6 pb-2
            border rounded-lg
            transition-all duration-300
            focus:ring-2 focus:ring-green-500 focus:border-green-500
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${className}
          `}
          {...props}
        />
        <motion.label
          initial={false}
          animate={{
            top: shouldFloat ? '8px' : '50%',
            fontSize: shouldFloat ? '0.75rem' : '1rem',
            translateY: shouldFloat ? '0%' : '-50%',
          }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className={`
            absolute left-4 pointer-events-none
            font-medium
            transition-colors duration-200
            ${shouldFloat
              ? isFocused
                ? 'text-green-600'
                : 'text-gray-500'
              : 'text-gray-500'
            }
          `}
          htmlFor={props.id}
        >
          {label} {isRequired && <span className="text-red-500">*</span>}
        </motion.label>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="mt-1 text-sm text-red-500"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

FloatingLabelInput.displayName = 'FloatingLabelInput';
