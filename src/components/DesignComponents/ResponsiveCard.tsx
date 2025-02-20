import clsx from "clsx";
import Spinner from "./Spinner";
import { ReactNode } from "react";

export function Card({children}:{children:ReactNode}) {
  return (
    <div className=" p-5 rounded-xs shadow-md bg-white">
      {children}
    </div>
  )
}

export function ResponsiveCard({ children, isLoading }: { children: ReactNode, isLoading?: boolean }) {
  return (
    <div className='bg-gray-100 p-5 rounded-md h-full'>
      <div className={clsx(isLoading && 'opacity-30')}>
        {children}
      </div>
      {isLoading && <div className='grid place-items-center'>
        <Spinner />
      </div>}
    </div>
  )
}
