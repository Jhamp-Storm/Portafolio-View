// =========================================================
// PORTAFOLIO VIRTUAL DINAMICO — LOGICA DE APLICACION
// Requiere @supabase/supabase-js (cargado en index.html)
// =========================================================

// --- 1. CONEXION A SUPABASE -------------------------------
// Reemplaza estos dos valores por los de tu proyecto:
// Supabase Dashboard > Project Settings > API
const SUPABASE_URL = "https://TU-PROYECTO.supabase.co";
const SUPABASE_ANON_KEY = "TU-ANON-KEY-PUBLICA";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const BUCKET = "portfolio-files";

// --- 2. DATOS DE TEMATIZACION POR CARRERA -----------------
const CAREERS = {
  ingenieria: {
    title: "Ingeniería y Tecnología",
    subtitle: "Proyectos, documentación técnica y recursos de la carrera.",
  },
  salud: {
    title: "Medicina y Ciencias de la Salud",
    subtitle: "Casos clínicos, guías y material audiovisual de la carrera.",
  },
  derecho: {
    title: "Derecho",
    subtitle: "Jurisprudencia, ensayos y recursos normativos de la carrera.",
  },
  humanidades: {
    title: "Arte y Humanidades",
    subtitle: "Obras, ensayos y producciones culturales de la carrera.",
  },
