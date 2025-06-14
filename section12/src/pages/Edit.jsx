import { useParams } from "react-router-dom";
const Edit = () => {
  const params = useParams();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Edit Page</h1>
      <p className="text-gray-700">This is the edit page.</p>
    </div>
  );
};

export default Edit;
