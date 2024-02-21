import React, { useState } from 'react';
import LoadingBar from "react-top-loading-bar";
const MyToyLoading = () => {
    const [progress, setProgress] = useState(0);
    return (
        <div>

            <LoadingBar color='red' progress={10}
            // onLoaderFinished={() => setProgress(0)}
            />
        </div>
    );
};

export default MyToyLoading;