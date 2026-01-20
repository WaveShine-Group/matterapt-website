'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/cn'
import { Check } from 'lucide-react'

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <label
        htmlFor={id}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className="relative">
          <input
            type="checkbox"
            ref={ref}
            id={id}
            className={cn(
              'peer sr-only',
              className
            )}
            {...props}
          />
          <div
            className={cn(
              'w-5 h-5 border-2 border-matready-gray-dark rounded',
              'bg-matready-black-light',
              'peer-checked:bg-matready-red peer-checked:border-matready-red',
              'peer-focus:ring-2 peer-focus:ring-matready-red peer-focus:ring-offset-2 peer-focus:ring-offset-matready-black',
              'transition-all duration-200',
              'flex items-center justify-center'
            )}
          >
            <Check className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
          </div>
        </div>
        {label && (
          <span className="text-sm text-matready-gray group-hover:text-matready-white transition-colors">
            {label}
          </span>
        )}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export { Checkbox }
