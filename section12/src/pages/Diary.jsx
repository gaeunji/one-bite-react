import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();

  return (
    <div>
      <h1>Diary</h1>
      <p>Diary ID: {params.id}</p>
    </div>
  );
};

export default Diary;
