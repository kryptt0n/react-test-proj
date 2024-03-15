import { useAuth } from "./security/AuthContext";

export default function LogoutComponent() {
    const context = useAuth();
    context.logout();
    return (
        <div className="logout">
            <div>Thank yoy for using my App! See you soon</div>
        </div>
    )
}