'use client'
import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useThemeContext } from '@/context/theme-data-provider'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

const availableThemeColors = [
  { name: 'Zinc', light: 'bg-primary', dark: 'bg-zinc-700' },
  { name: 'Pink', light: 'bg-pink-600', dark: 'bg-pink-700' },
  { name: 'Blue', light: 'bg-blue-600', dark: 'bg-blue-700' },
  { name: 'Green', light: 'bg-green-600', dark: 'bg-green-500' },
  { name: 'Purple', light: 'bg-purple-500', dark: 'bg-purple-700' },
  { name: 'Yellow', light: 'bg-yellow-400', dark: 'bg-yellow-600' },
  { name: 'Red', light: 'bg-red-500', dark: 'bg-red-700' },
  { name: 'Wine', light: 'bg-rose-600', dark: 'bg-rose-800' },
  { name: 'Orange', light: 'bg-orange-400', dark: 'bg-orange-500' },
]

export function ThemeColorToggle() {
  const { themeColor, setThemeColor } = useThemeContext()
  const { theme } = useTheme()

  const createSelectItems = () => {
    return availableThemeColors.map(({ name, light, dark }) => (
      <SelectItem key={name} value={name}>
        <div className='item-center flex space-x-3'>
          <div
            className={cn(
              'rounded-full',
              'w-[20px]',
              'h-[20px]',

              theme === 'light' ? light : dark
            )}
          ></div>
          <div className='text-sm'>{name}</div>
        </div>
      </SelectItem>
    ))
  }

  return (
    <Select
      onValueChange={(value) => setThemeColor(value as ThemeColors)}
      defaultValue={themeColor}
    >
      <SelectTrigger className='w-[150px] ring-offset-transparent focus:ring-transparent'>
        <SelectValue placeholder='Select Color' />
      </SelectTrigger>
      <SelectContent className='border-border'>{createSelectItems()}</SelectContent>
    </Select>
  )
}
