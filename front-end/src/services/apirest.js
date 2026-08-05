// URL base de la API.
// En desarrollo usa el backend local; en producción se define
// REACT_APP_API_URL en el panel del hosting (Netlify / Vercel / Render).
const base = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// Se normaliza para que siempre termine en "/" y las concatenaciones
// del tipo urlApi + "usuarios" sigan funcionando igual que antes.
export const urlApi = base.endsWith("/") ? base : base + "/";

// Credenciales de la cuenta de demostración que se muestran en el login
// para que cualquiera pueda probar el sistema.
export const demoCredenciales = {
  cedula: process.env.REACT_APP_DEMO_CEDULA || "1000000000",
  contrasena: process.env.REACT_APP_DEMO_PASSWORD || "Demo1234"
};
