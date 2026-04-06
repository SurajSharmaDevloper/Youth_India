import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-center items-center gap-2 mt-10">
            <button 
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded-lg bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                Previous
            </button>
            
            <div className="flex gap-1">
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg border text-sm font-medium transition-colors ${
                            currentPage === page
                                ? 'bg-primary text-white border-primary'
                                : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                        }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button 
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded-lg bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
