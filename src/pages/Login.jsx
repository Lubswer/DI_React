import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

const SSOButtons = () => (
    <div className="flex gap-4 justify-center">
        <button type="button" disabled className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition opacity-50">
            <i className="fa-brands fa-facebook text-white" />
        </button>
        <button type="button" disabled className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition opacity-50">
            <i className="fa-brands fa-google text-white" />
        </button>
        <button type="button" disabled className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition opacity-50">
            <i className="fa-brands fa-github text-white" />
        </button>
    </div>
);

const Hero = ({ type, active, title, text, buttonText, onClick }) => (
    <div 
        className={`absolute inset-0 w-1/2 h-full flex flex-col items-center justify-center gap-4 text-white p-6 transition-transform duration-650 ${active ? 'z-20' : 'z-0'}`}
        style={{
            transform: 
                (type === "signup" && active) ? "translateX(0)" :
                (type === "signup" && !active) ? "translateX(-100%)" :
                (type === "signin" && active) ? "translateX(0)" :
                "translateX(100%)"
        }}
    >
        <h2 className="text-2xl md:text-3xl font-extrabold">{title}</h2>
        <p className="text-center text-sm md:text-base text-gray-300">{text}</p>
        <button 
            type="button" 
            onClick={onClick}
            className="mt-4 py-2 px-8 rounded-2xl bg-white text-black font-extrabold hover:bg-gray-200 transition-all uppercase tracking-wider text-sm"
        >
            {buttonText}
        </button>
    </div>
);

const AuthForm = ({ type, active, title, children }) => (
    <div 
        className={`absolute inset-0 w-1/2 h-full bg-[#050505] flex flex-col justify-center items-center p-6 md:p-8 transition-transform duration-650 ${active ? 'z-20' : 'z-5'}`}
        style={{
            transform: 
                (type === "signup" && active) ? "translateX(0)" :
                (type === "signup" && !active) ? "translateX(100%)" :
                (type === "signin" && active) ? "translateX(0)" :
                "translateX(-100%)",
            left: type === "signin" ? "50%" : "0"
        }}
    >
        <div className="w-full max-w-xs">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-white text-center">{title}</h2>
            <SSOButtons />
            <p className="text-center text-gray-400 text-xs md:text-sm my-4">usa tu correo electrónico:</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>{children}</form>
        </div>
    </div>
);

export const Login = ({ initialView = "signup" }) => {
    const navigate = useNavigate();
    const isMountedRef = useRef(true);
    const timeoutRef = useRef(null);
    
    const [view, setView] = useState(initialView === "login" ? "login" : "signup");
    const isSignup = view === "signup";
    
    // Estados para Sign Up
    const [signupData, setSignupData] = useState({
        nombre: "",
        email: "",
        password: ""
    });
    
    // Estados para Sign In
    const [signinData, setSigninData] = useState({
        email: "",
        password: ""
    });
    
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    
    const [toast, setToast] = useState({ message: "", type: "", visible: false });

    const showToast = (message, type = "success", duration = 3000) => {
        setToast({ message, type, visible: true });
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setToast(t => ({ ...t, visible: false }));
        }, duration);
    };

    // Limpiar al desmontar el componente y cancelar timeouts
    useEffect(() => {
        return () => {
            isMountedRef.current = false;
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const toggleView = () => setView(isSignup ? "login" : "signup");

    // Manejar cambios en Sign Up
    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Manejar cambios en Sign In
    const handleSigninChange = (e) => {
        const { name, value } = e.target;
        setSigninData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Manejar registro
    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");

        try {
            console.log("Iniciando registro...");
            const user = (await createUserWithEmailAndPassword(
                auth,
                signupData.email,
                signupData.password
            )).user;

            console.log("Usuario creado en Auth:", user.uid);

            // Mostrar éxito INMEDIATAMENTE
            setSuccess("¡Cuenta creada exitosamente!");
            showToast("Usuario registrado con éxito.", "success", 1200);
            setSignupData({ nombre: "", email: "", password: "" });
            
            // Limpiar mensaje de éxito después de 3 segundos
            setTimeout(() => {
                setSuccess("");
            }, 3000);

            // Hacer updateProfile y setDoc en background (sin await)
            updateProfile(user, { displayName: signupData.nombre })
                .then(() => console.log("Perfil actualizado"))
                .catch(err => console.error("Error en updateProfile:", err));

            setDoc(doc(db, "users", user.uid), {
                nombre: signupData.nombre,
                email: signupData.email,
                edad: "",
                semestre: "",
                carrera: "",
                descripcion: "Sin Descripción",
                puedoEnsenar: "",
                quieroAprender: "",
                proyectos: "",
                createdAt: new Date()
            })
                .then(() => console.log("Documento de usuario creado en Firestore"))
                .catch(err => console.error("Error en setDoc:", err));
        } catch (err) {
            console.error("Error en registro:", err);
            let message = "Ocurrió un error al crear la cuenta.";
            if (err && err.code === "auth/email-already-in-use") {
                message = "Este correo electrónico ya está registrado.";
            } else if (err && err.code === "auth/weak-password") {
                message = "La contraseña debe tener al menos 6 caracteres.";
            } else if (err && err.code === "auth/invalid-email") {
                message = "El correo electrónico no es válido.";
            }
            setError(message);
            showToast(message, "error", 3000);
        }
    };

    // Manejar inicio de sesión
    const handleSignin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signInWithEmailAndPassword(
                auth,
                signinData.email,
                signinData.password
            );
            
            showToast("Sesión iniciada con éxito.", "success", 1200);
            setSigninData({ email: "", password: "" });
            navigate("/home");
        } catch (err) {
            let message = "Ocurrió un error al iniciar sesión.";
            if (err && err.code === "auth/user-not-found") {
                message = "Usuario no encontrado.";
            } else if (err && err.code === "auth/wrong-password") {
                message = "Contraseña incorrecta.";
            } else if (err && err.code === "auth/invalid-email") {
                message = "El correo electrónico no es válido.";
            }
            setError(message);
            showToast(message, "error", 3000);
        }
    };

    return (
        <div className="min-h-screen font-['Outfit'] text-white bg-[#050505] bg-[radial-gradient(circle_at_top_center,_#1a1a1a,_#050505)] flex flex-col">
            {toast.visible && (
                <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-md text-sm ${toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
                    {toast.message}
                </div>
            )}
            {/* Botón Volver */}
            <button
                onClick={() => navigate("/")}
                className="fixed top-5 left-5 flex items-center gap-2 text-sm font-semibold uppercase text-[#888] hover:text-white transition-all z-50"
            >
                <i className="fa-solid fa-arrow-left" />
                Volver
            </button>

            {/* Card Container - Centro */}
            <div className="flex-1 flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-4xl">
                    <div className="relative overflow-hidden rounded-[25px] border border-white/10 bg-white/5 w-full" style={{ aspectRatio: "660/440" }}>
                    
                    {/* Background Toggle Color */}
                    <div
                        className="absolute inset-0 w-1/2 h-full bg-gradient-to-br from-purple-600 to-purple-800 z-5 transition-transform duration-650"
                        style={{
                            transform: isSignup ? "translateX(0)" : "translateX(100%)"
                        }}
                    />

                    {/* Hero Sections */}
                    <Hero
                        type="signup"
                        active={isSignup}
                        title={isSignup ? "¡Bienvenido!" : "¡Hola de Nuevo!"}
                        text={isSignup ? "Crea una cuenta para empezar" : "Inicia sesión para acceder a tu cuenta"}
                        buttonText="INICIA SESIÓN"
                        onClick={toggleView}
                    />

                    <Hero
                        type="signin"
                        active={!isSignup}
                        title={isSignup ? "¡Hola de Nuevo!" : "¡Bienvenido!"}
                        text={isSignup ? "Inicia sesión para acceder a tu cuenta" : "Crea una cuenta para empezar"}
                        buttonText={isSignup ? "INICIA SESIÓN" : "CREAR CUENTA"}
                        onClick={toggleView}
                    />

                    {/* Sign Up Form */}
                    <AuthForm type="signup" active={isSignup} title="CREAR CUENTA">
                        {error && <p style={{ color: "#ff6b6b", fontSize: "12px" }}>{error}</p>}
                        {success && <p style={{ color: "#4ade80", fontSize: "14px", fontWeight: "bold", padding: "8px", backgroundColor: "rgba(74, 222, 128, 0.1)", borderRadius: "6px", border: "1px solid #4ade80" }}>{success}</p>}
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre completo"
                            value={signupData.nombre}
                            onChange={handleSignupChange}
                            className="border-0 bg-[#1f1b2b] rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            value={signupData.email}
                            onChange={handleSignupChange}
                            className="border-0 bg-[#1f1b2b] rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            value={signupData.password}
                            onChange={handleSignupChange}
                            className="border-0 bg-[#1f1b2b] rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            required
                        />
                        <button 
                            type="button"
                            onClick={handleSignup}
                            className="w-40 py-2 rounded-full bg-white text-black font-extrabold hover:bg-gray-200 transition-all uppercase text-sm mx-auto mt-2"
                        >
                            REGISTRARSE
                        </button>
                    </AuthForm>

                    {/* Sign In Form */}
                    <AuthForm type="signin" active={!isSignup} title="INICIAR SESIÓN">
                        {error && <p style={{ color: "#ff6b6b", fontSize: "12px" }}>{error}</p>}
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            value={signinData.email}
                            onChange={handleSigninChange}
                            className="border-0 bg-[#1f1b2b] rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            value={signinData.password}
                            onChange={handleSigninChange}
                            className="border-0 bg-[#1f1b2b] rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            required
                        />
                        <div>
                            <a href="#" className="text-xs text-gray-500 hover:text-gray-300">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                        <button 
                            type="button"
                            onClick={handleSignin}
                            className="w-40 py-2 rounded-full bg-white text-black font-extrabold hover:bg-gray-200 transition-all uppercase text-sm mx-auto mt-2"
                        >
                            INICIAR SESIÓN
                        </button>
                    </AuthForm>
                </div>
                </div>
            </div>

            {/* FOOTER */}
            <footer className="w-full border-t border-white/10 px-[6%] py-6 flex flex-col gap-6 items-center md:flex-row md:justify-between bg-[#050505]">
                <div className="text-sm text-[#888]">
                    © Todos los derechos reservados por ALU
                </div>
                <div className="flex gap-10 text-[35px]">
                    <i className="fa-brands fa-instagram text-[35px] transition duration-700 hover:bg-[#ffffffc2] py-[10px] px-[15px] rounded-[50%] hover:text-black hover:shadow-[0_0_20px_rgb(255,255,255,0.3)] cursor-pointer" />
                    <i className="fa-brands fa-facebook-f text-[35px] transition duration-700 hover:bg-[#ffffffc2] py-[10px] px-[18px] rounded-[50%] hover:text-black hover:shadow-[0_0_20px_rgb(255,255,255,0.3)] cursor-pointer" />
                    <i className="fa-brands fa-x-twitter text-[35px] transition duration-700 hover:bg-[#ffffffc2] py-[10px] px-[13px] rounded-[50%] hover:text-black hover:shadow-[0_0_20px_rgb(255,255,255,0.3)] cursor-pointer" />
                </div>
            </footer>
        </div>
    );
};
