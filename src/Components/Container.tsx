import { twMerge } from 'tailwind-merge'

export function ContainerGrid({ children, className }) {
  const defaultClass =
    'w-full max-w-grid h-[calc(100vh-10rem)] mx-auto my-20 p-10 bg-gray-800 rounded-lg flex flex-col'
  const combinedClasses = twMerge(defaultClass, className)

  return <div className={combinedClasses}>{children}</div>
}
