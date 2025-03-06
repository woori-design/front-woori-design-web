'use client';

import { type InputHTMLAttributes, forwardRef, type ReactNode } from 'react';
import Image from 'next/image';

export interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  className?: string;
  inputClassName?: string;
  copyButton?: boolean;
  actionButton?: {
    text: string;
    onClick: () => void;
  };
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, className, inputClassName, copyButton, actionButton, ...props }, ref) => {
    const handleCopy = () => {
      if (props.value) {
        navigator.clipboard.writeText(props.value.toString());
      }
    };

    const combineClasses = (...classes: (string | undefined)[]) =>
      classes.filter(Boolean).join(' ');

    return (
      <div className={combineClasses('w-full', className)}>
        {label && <div className="mb-2 text-base font-medium">{label}</div>}
        <div className="relative flex items-center">
          <input
            className={combineClasses(
              'w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none',
              inputClassName,
              copyButton || actionButton ? 'pr-16' : '',
            )}
            ref={ref}
            {...props}
          />
          {(copyButton || actionButton) && (
            <div className="absolute right-0 flex h-full items-center space-x-2 pr-3">
              {copyButton && (
                <button
                  type="button"
                  onClick={handleCopy}
                  className="relative flex h-8 w-8 items-center justify-center hover:text-[#979797] group"
                >
                  <div className="relative w-5 h-5">
                    <Image
                      src="/Copy.svg"
                      alt="copy"
                      width={20}
                      height={20}
                      className="group-hover:opacity-70 transition-opacity duration-200"
                    />
                  </div>
                </button>
              )}
              {actionButton && (
                <button
                  type="button"
                  onClick={actionButton.onClick}
                  className="rounded-md bg-[#ABABAB] px-4 py-2 text-sm font-medium text-white hover:bg-[#979797]"
                >
                  {actionButton.text}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  },
);

CustomInput.displayName = 'CustomInput';

export { CustomInput };
