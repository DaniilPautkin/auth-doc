import React, { Suspense } from 'react'
import { Spin } from 'antd'

export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    return (props: WCP) => {
        return (
            <Suspense fallback={<Spin />}>
                <WrappedComponent {...props} />
            </Suspense>
        )
    }
}
