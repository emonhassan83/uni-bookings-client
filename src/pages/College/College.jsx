import { useLoaderData } from "react-router-dom";

const College = () => {
    const collegeData = useLoaderData();
    console.log(collegeData);
    return (
        <div>
            College Data.
        </div>
    );
};

export default College;