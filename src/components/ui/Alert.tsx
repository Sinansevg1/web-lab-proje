import React from 'react';

interface AlertProps {
    children: React.ReactNode;
    variant?: 'info' | 'success' | 'warning' | 'error';
    title?: string;
    dismissible?: boolean;
    onDismiss?: () => void;
    className?: string;
}

export default function Alert({
    children,
    variant = "info",
    title,
    dismissible = false,
    onDismiss,
    className = "",
}: AlertProps) {
    const variants = {
        info: `bg-blue-50 border-blue-500 text-blue-800 dark:bg-blue-950 dark:text-blue-200`,
        success: `bg-success/10 border-success text-success dark:text-success/90`,
        warning: `bg-amber-50 border-amber-500 text-amber-800 dark:bg-amber-950 dark:text-amber-200`,
        error: `bg-error/10 border-error text-error dark:text-error/90`,
    };

    return (
        <div role="alert" className={`border-l-4 rounded-r-lg p-4 ${variants[variant]} ${className}`}>
            <div className="flex justify-between items-start">
                <div>
                    {title && (
                        <p className="font-semibold mb-1">
                            {title}
                        </p>
                    )}
                    <p className="text-sm">{children}</p>
                </div>
                {dismissible && (
                    <button
                        onClick={onDismiss}
                        className="ml-4 opacity-60 hover:opacity-100"
                        aria-label="Kapat"
                    >
                        &#10005;
                    </button>
                )}
            </div>
        </div>
    );
}
