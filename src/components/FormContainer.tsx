import React from "react";

interface FormContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function FormContainer({ children, className = "" }: FormContainerProps) {
    return (
      <div className={`border border-blue-400 rounded-md p-8 w-full max-w-md
        shadow-sm bg-white ${className}`}> 
        {children}
      </div>
    );
}