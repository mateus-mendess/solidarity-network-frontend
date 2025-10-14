import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "delete";
    children: React.ReactNode;
}

export default function Button({
    variant = "primary",
    children,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyle =
      "border-3 border-black px-10 py-2 font-bold rounded-xl shadow-[6px_6px_0px_rgba(0,0,0,1)]";
    
    const variants = {
        primary: "bg-blue-400 text-white",
        secondary: "bg-white text-blue-400",
        delete: "bg-red-600 text-white"
    };

    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}