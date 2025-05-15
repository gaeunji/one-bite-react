import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// App.jsx의 App 함수가 return 하는 요소를 화면에 렌더링
createRoot(document.getElementById("root")).render(<App />);
