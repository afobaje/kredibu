import { InputType } from '@/Types/Type'
import clsx from 'clsx'

export default function InputField({ type = "text", inputName, onChange,className, value, placeholder }: InputType) {
  return (
    <div className={clsx(className)}>
      <input value={value} name={inputName} id={inputName} placeholder={placeholder} className={clsx('m-2 outline-none p-2 w-5/6 bg-white global-input rounded-md')} onChange={onChange} type={type} />
    </div>
  )
}


export function SignUpInput({ type = "text", onChange,className,inputName, value, placeholder }: InputType) {
  return (
    <div className={clsx(className,'flex flex-col  m-2 items-start')}>
      <label htmlFor={inputName} className='mx-2 mb-2 text-sm'>{placeholder}</label>
      <input id={inputName} value={value} name={inputName} placeholder={placeholder} className={clsx('mx-2 outline-none p-2 w-5/6 bg-gray-200 global-input rounded-md')} onChange={onChange} type={type} />
    </div>
  )
}