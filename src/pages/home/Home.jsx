import "./home.css";
import Topbar from "../../components/topbar/Topbar";
import StudentTopBar from "../../components/StudentTopBar";
import StudentTable from "../../components/studentTable";

export default function Home() {
  return (
    <div className="home">
      <Topbar />
      <StudentTopBar />
      <StudentTable />
    </div>
  );
}
