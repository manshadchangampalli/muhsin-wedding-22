'use client'

import React from "react";

const ToTopButton = () => {
    return (
        <p
            onClick={() =>
                window?.scrollTo(0, 0)
            }
            className="text-basic text-white ml-auto font-normal cursor-pointer"
        >
            Back to top
        </p>
    );
};

export default ToTopButton;
