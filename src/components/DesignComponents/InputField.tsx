import { InputType } from '@/Types/ComponentType'





export default function InputField({type="text",onChange,value,placeholder}:InputType) {
  return (
    <div>
        <input value={value} placeholder={placeholder} className='m-2 outline-none p-2 rounded-md' onChange={onChange} type={type} />
    </div>
  )
}
