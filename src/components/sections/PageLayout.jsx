import React from "react";
import RightSidebar from "../blocks/Rightsidebar";


/**
 * PageLayout — wraps all inner content pages with a consistent
 * two-column layout: main content (left) + RightSidebar (right).
 *
 * Usage:
 *   <PageLayout>
 *     <YourPageContent />
 *   </PageLayout>
 */
export default function PageLayout({ children }) {
    return (
        <div className="bg-blue-50/50 min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
                    {/* Main content — takes 2/3 width */}
                    <div className="lg:col-span-5 ">
                        {children}
                    </div>
                    {/* Right sidebar — takes 1/3 width */}
                    <div className="lg:col-span-2">
                        <div className="sticky top-24 space-y-6">
                            <RightSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
