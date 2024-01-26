import { ReactNode } from 'react';
import React from 'react';


interface Props {
    children: ReactNode;
    className?: string;
}

const Card = ({ children, className }: Props) => {
    return (
        <div className={`px-8 py8 ${className}`}>
            {children}
        </div>
    );
}

export default Card;