import Group from "../components/Group";
import { useNavigate } from "react-router-dom";
import "./styles/dashboard.views.css"

const Dashboard = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/dashboard/group/create")
    }
    return (
        <div className="dashboard-view-container">
            <button
                type="button"
                onClick={ e => handleClick()}
            >
                Create Group
            </button>
        </div>
    )
}

export default Dashboard;