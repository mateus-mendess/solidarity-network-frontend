import React from "react";

interface FormContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function FormContainer({ children, className = "" }: FormContainerProps) {
    return (
      <div
        className={`border border-gray-300 rounded-md p-8 w-full max-w-md
        shadow-sm bg-white ${className}`}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Junte-se à Rede Solidária
        </h2>

        {children}
      </div>
    );
}