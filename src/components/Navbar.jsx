import { Link, useNavigate } from "react-router-dom";

export default function NavbarLayout({ children }) {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-r from-white via-white to-white text-black">
            {/* Navbar */}
            <nav className="bg-gradient-to-r from-white via-white to-white text-black shadow-md px-6 py-2 flex items-center justify-between select-none">
                {/* Logo clicável */}
                <div className="flex items-center">
                    <Link to="/">
                        <img
                            src="/logonova.png"
                            alt="Logo"
                            className="h-14 cursor-pointer"
                            draggable="false"
                        />
                    </Link>
                </div>
            </nav>

            {/* Conteúdo da página */}
            <div className="p-1 min-h-[calc(100vh-80px)]">
                {children}
            </div>
        </div>
    );
}

