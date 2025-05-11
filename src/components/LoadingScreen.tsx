import React from 'react';

interface LoadingScreenProps {
    message?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ message = 'Loading...' }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-white dark:bg-gray-900">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            <h2 className="text-xl font-semibold mt-4">
                {message}
            </h2>
        </div>
    );
};

export default LoadingScreen;