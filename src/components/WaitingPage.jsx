import React from "react";

const WaitingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
                <p className="mt-6 text-lg font-medium text-gray-700">
                    Please wait, loading...
                </p>
            </div>
        </div>
    );
};

export default WaitingPage;
