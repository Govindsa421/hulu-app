import React from "react";

const SkeletonCard = () => {
  return (
    <div className="lg:px-16 md:px-8 px-4 lg:py-8 py-4">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {Array(3)
          .fill(0)
          .map((_, id) => (
            <div key={id} className="w-full">
              <div className="animate-pulse">
                <div className="rounded bg-gray-900 w-full h-60"></div>
                <div className="space-y-2 mt-4">
                  <div className="h-4 bg-gray-900 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-900 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-900 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SkeletonCard;
