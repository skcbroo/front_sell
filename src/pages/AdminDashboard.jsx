import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavbarLayout from "../components/Navbar";

export default function AdminDashboard() {
    const [usuarios, setUsuarios] = useState(0);
    const [creditos, setCreditos] = useState(0);
    const [pedidos, setPedidos] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (!token || role !== "admin") {
            navigate("/");
            return;
        }

        axios
            .get(`${import.meta.env.VITE_API_URL}/api/admin/dashboard`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                setUsuarios(res.data.usuarios);
                setCreditos(res.data.creditos);
                setPedidos(res.data.pedidos);
            })
            .catch((err) => {
                console.error("Erro ao carregar dashboard:", err);
            });
    }, []);

    return (
        <NavbarLayout>
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 select-none cursor-default">
                    Painel Administrativo
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 select-none cursor-default">
                    <div
                        onClick={() => navigate("/admin/usuarios")}
                        className="bg-white border border-[#CBD5E1] p-6 rounded-xl shadow text-center cursor-pointer hover:shadow-lg transition text-gray-800"
                    >
                        <p className="text-lg font-semibold">Usuários</p>
                        <p className="text-4xl mt-2 font-bold text-blue-700">{usuarios}</p>
                    </div>

                    <div
                        onClick={() => navigate("/admin/creditos")}
                        className="bg-white border border-[#CBD5E1] p-6 rounded-xl shadow text-center cursor-pointer hover:shadow-lg transition text-gray-800"
                    >
                        <p className="text-lg font-semibold">Créditos</p>
                        <p className="text-4xl mt-2 font-bold text-green-700">{creditos}</p>
                    </div>

                    <div className="bg-white border border-[#CBD5E1] p-6 rounded-xl shadow text-center text-gray-800">
                        <p className="text-lg font-semibold">Pedidos</p>
                        <p className="text-4xl mt-2 font-bold text-yellow-600">{pedidos}</p>
                    </div>
                </div>
            </div>
        </NavbarLayout>
    );
}
