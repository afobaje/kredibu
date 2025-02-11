'use client'
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useRouterReady() {
    const [isReady, setIsReady] = useState(false);
    const pathName=usePathname();

    useEffect(() => {
        if (pathName) {
            setIsReady(true)
        }
       
    }, [pathName])
    return isReady;
}