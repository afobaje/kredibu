import React, { FC, JSX } from 'react'

export default function withAuthentication<T extends JSX.IntrinsicAttributes>(Component: FC<T>) {

    const Wrapper: FC<T> = (props) => {

        return <Component {...props} />
    }
    Wrapper.displayName = Component.displayName;
    return Wrapper;
}


