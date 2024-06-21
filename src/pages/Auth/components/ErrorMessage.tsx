import React from "react"

interface Children {
    children: React.ReactNode
}


export const ErrorMessage = ({ children }: Children) => {
    return (
        <div className="text-center my-4 bg-red-100 text-red-600 font-bold p-3 text-sm">
            {children}
        </div>
    )
}
