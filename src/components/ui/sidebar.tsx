import { useLocation, Link } from "react-router-dom";

export function Sidebar() {
    const location = useLocation();
    
    const links = [
        { href: "/", label: "Profile" },
        { href: "/workspace", label: "Workspace" },
        { href: "/billing", label: "Billing" }
    ];

    return (
        <div className="fixed top-0 left-0 flex flex-col w-64 h-screen bg-gray-100 p-4">
            <nav className="space-y-2">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        to={link.href}
                        className={`block px-4 py-2 rounded-md transition-colors ${
                            location.pathname === link.href
                                ? "bg-black text-white hover:bg-black hover:text-white"
                                : "text-gray-600 hover:bg-gray-200 hover:text-black"
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
}