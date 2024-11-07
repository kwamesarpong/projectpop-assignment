import { useUser } from "@/context/UserContext";

export default function Workspace() {
    const { userName } = useUser();

    return (
        <h1>Manage Workspace Settings for {userName || 'Guest'}</h1>
    )
}