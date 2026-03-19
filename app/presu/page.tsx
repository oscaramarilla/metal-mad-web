"use client";

import { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Presupuestador() {
  const pdfRef = useRef<HTMLDivElement>(null);
  const [cargando, setCargando] = useState(false);

  // 👑 MODO DIOS: Interruptor de Identidad B2B
  const [isCorporate, setIsCorporate] = useState(true);

  // Variables dinámicas
  const emisorNombre = isCorporate ? "Metal Mad E.A.S." : "Óscar Amarilla";
  const emisorRUC = isCorporate ? "80135751-9" : "4499507-5"; 
  const emisorSubtitulo = isCorporate ? "Industria de Mobiliario Escolar Inyectado" : "Proyectos B2B y Mobiliario Educativo";
  const emisorSiglas = isCorporate ? "MM" : "OA"; 

  // Estado del Cliente
  const [cliente, setCliente] = useState({
    institucion: "",
    contacto: "",
    ruc: "",
    telefono: "",
    fecha: new Date().toLocaleDateString('es-PY'),
  });

  // Base de datos rápida
  const baseProductos = [
    { id: 1, nombre: "Pupitre Iso ORIPLAST (Línea MEC)", precio: 285000 },
    { id: 2, nombre: "Conjunto STUDENT (Nivel Medio)", precio: 450000 },
    { id: 3, nombre: "Mesa de Trabajo Grupal Hexagonal", precio: 850000 },
    { id: 4, nombre: "Silla Escolar Inyectada (Sola)", precio: 127000 }, 
  ];

  // 🪄 ESTADOS DEL ÍTEM MÁGICO
  const [itemMagicoNombre, setItemMagicoNombre] = useState("");
  const [itemMagicoPrecio, setItemMagicoPrecio] = useState("");

  // Estado de los items en el presupuesto
  const [items, setItems] = useState<{ id: number; nombre: string; cantidad: number; precioUnitario: number }[]>([]);

  // Funciones del carrito
  const agregarItem = (producto: any) => {
    const existe = items.findIndex(item => item.id === producto.id);
    if (existe >= 0) {
      actualizarCantidad(existe, items[existe].cantidad + 1);
    } else {
      setItems([...items, { ...producto, cantidad: 1, precioUnitario: producto.precio }]);
    }
  };

  const eliminarItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const actualizarCantidad = (index: number, cantidad: number) => {
    if (cantidad < 1) return; 
    const nuevosItems = [...items];
    nuevosItems[index].cantidad = cantidad;
    setItems(nuevosItems);
  };

  const totalPresupuesto = items.reduce((acc, item) => acc + item.cantidad * item.precioUnitario, 0);

  // 🚀 Motor de Generación PDF (Blindado contra errores Lab/CORS)
  const generarPDF = async () => {
    if (!pdfRef.current) return;
    setCargando(true);
    try {
      const canvas = await html2canvas(pdfRef.current, { 
        scale: 2, 
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff", 
        windowWidth: pdfRef.current.scrollWidth,
        windowHeight: pdfRef.current.scrollHeight
      });
      
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Presupuesto_${isCorporate ? 'MetalMad' : 'OscarAmarilla'}_${cliente.institucion || 'Cliente'}.pdf`);
    } catch (error) {
      console.error("Error al generar PDF:", error);
      alert("Error al procesar el documento. Intenta de nuevo.");
    }
    setCargando(false);
  };

  return (
    <div className="min-h-screen bg-zinc-100 p-4 md:p-8 font-sans flex justify-center pb-32">
      
      {/* 🎛️ PANEL DE CONTROL (ÚNICA INTERFAZ VISIBLE) */}
      <div className="w-full max-w-lg bg-white p-6 rounded-3xl shadow-lg border border-zinc-200 flex flex-col gap-6">
        
        <div className="text-center mb-2">
          <h2 className="text-2xl font-black text-blue-950">Terminal de Ventas B2B</h2>
          <p className="text-sm text-zinc-500">Sistema Interno de Cotizaciones</p>
        </div>

        {/* PANEL DE CONTROL B2B */}
        <div className="flex flex-col items-center justify-center gap-2 bg-zinc-950 p-4 rounded-2xl border border-zinc-800 shadow-inner">
          <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Facturar a nombre de:</p>
          <div className="flex items-center gap-4">
            <span className={`text-sm font-black transition-colors ${!isCorporate ? 'text-blue-500' : 'text-zinc-600'}`}>
              Óscar Amarilla
            </span>
            <button 
              type="button"
              onClick={() => setIsCorporate(!isCorporate)}
              className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none shadow-inner ${isCorporate ? 'bg-green-600' : 'bg-blue-600'}`}
            >
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${isCorporate ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm font-black transition-colors ${isCorporate ? 'text-green-500' : 'text-zinc-600'}`}>
              Metal Mad
            </span>
          </div>
        </div>

        {/* Datos del Cliente */}
        <div className="space-y-3">
          <h3 className="font-bold text-zinc-800 border-b pb-2">1. Datos del Cliente</h3>
          <input type="text" placeholder="Institución / Colegio" className="w-full p-2 text-sm border rounded-lg bg-zinc-50" 
            value={cliente.institucion} onChange={e => setCliente({...cliente, institucion: e.target.value})} />
          <input type="text" placeholder="Nombre del Contacto" className="w-full p-2 text-sm border rounded-lg bg-zinc-50" 
            value={cliente.contacto} onChange={e => setCliente({...cliente, contacto: e.target.value})} />
          <div className="flex gap-2">
            <input type="text" placeholder="RUC" className="w-1/2 p-2 text-sm border rounded-lg bg-zinc-50" 
              value={cliente.ruc} onChange={e => setCliente({...cliente, ruc: e.target.value})} />
            <input type="text" placeholder="Teléfono" className="w-1/2 p-2 text-sm border rounded-lg bg-zinc-50" 
              value={cliente.telefono} onChange={e => setCliente({...cliente, telefono: e.target.value})} />
          </div>
        </div>

        {/* Agregar Productos */}
        <div className="space-y-3">
          <h3 className="font-bold text-zinc-800 border-b pb-2">2. Agregar Productos</h3>
          <div className="flex flex-col gap-2">
            {baseProductos.map(prod => (
              <button key={prod.id} onClick={() => agregarItem(prod)} className="text-left p-2 text-sm border border-blue-200 hover:bg-blue-50 rounded-lg text-blue-800 font-medium">
                + {prod.nombre}
              </button>
            ))}
          </div>

          {/* 🪄 ÍTEM MÁGICO (Personalizado) */}
          <div className="mt-4 p-3 bg-gradient-to-br from-zinc-50 to-zinc-100 border border-zinc-300 rounded-xl shadow-sm space-y-2">
            <p className="text-xs font-black text-zinc-600 uppercase flex items-center gap-1">✨ Ítem Personalizado</p>
            <input 
              type="text" 
              placeholder="Ej: Flete, Silla especial, Reparación..." 
              className="w-full p-2 text-sm border border-zinc-300 rounded-lg bg-white" 
              value={itemMagicoNombre} 
              onChange={e => setItemMagicoNombre(e.target.value)} 
            />
            <div className="flex gap-2">
              <input 
                type="number" 
                placeholder="Precio Unit. (Gs)" 
                className="w-2/3 p-2 text-sm border border-zinc-300 rounded-lg bg-white" 
                value={itemMagicoPrecio} 
                onChange={e => setItemMagicoPrecio(e.target.value)} 
              />
              <button
                onClick={() => {
                  if(itemMagicoNombre && itemMagicoPrecio) {
                    agregarItem({ id: Date.now(), nombre: itemMagicoNombre, precio: Number(itemMagicoPrecio) });
                    setItemMagicoNombre("");
                    setItemMagicoPrecio("");
                  }
                }}
                className="w-1/3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-lg text-sm transition"
              >
                Añadir
              </button>
            </div>
          </div>
        </div>

        {/* 🛒 CARRITO MÓVIL */}
        {items.length > 0 && (
          <div className="space-y-3 bg-zinc-50 p-3 rounded-xl border border-zinc-200">
            <h3 className="font-bold text-zinc-800 text-sm border-b pb-2">3. Resumen de Cantidades</h3>
            {items.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm mb-2">
                <span className="truncate w-[45%] text-zinc-700 font-medium">{item.nombre}</span>
                <span className="w-[20%] text-right font-mono text-xs text-zinc-500 border-b border-dashed border-zinc-300">{(item.precioUnitario).toLocaleString('es-PY')}</span>
                <div className="flex items-center gap-2 w-[35%] justify-end">
                  <button onClick={() => actualizarCantidad(index, item.cantidad - 1)} className="w-7 h-7 bg-white border rounded shadow-sm text-red-600 font-bold flex items-center justify-center">-</button>
                  <span className="w-6 text-center font-bold">{item.cantidad}</span>
                  <button onClick={() => actualizarCantidad(index, item.cantidad + 1)} className="w-7 h-7 bg-white border rounded shadow-sm text-green-600 font-bold flex items-center justify-center">+</button>
                </div>
              </div>
            ))}
            
            <div className="mt-4 pt-3 border-t border-zinc-300 flex justify-between items-center">
              <span className="font-bold text-zinc-600 uppercase text-xs">Total:</span>
              <span className="text-xl font-black text-blue-900">Gs. {totalPresupuesto.toLocaleString('es-PY')}</span>
            </div>
          </div>
        )}

        {/* Botón de Descarga */}
        <button 
          onClick={generarPDF} 
          disabled={cargando || items.length === 0}
          className="w-full mt-2 bg-red-600 hover:bg-red-700 disabled:bg-zinc-400 text-white font-black py-4 rounded-xl shadow-lg flex justify-center items-center gap-2 transition-all active:scale-95 z-50 relative"
        >
          {cargando ? "Generando Documento..." : "📥 Descargar PDF Oficial"}
        </button>
      </div>

      {/* 👻 EL FANTASMA (El PDF puro de errores. Usamos puros HEX Codes inline) */}
      <div className="absolute top-0 left-0 opacity-0 pointer-events-none -z-50 overflow-hidden" aria-hidden="true">
        <div 
          ref={pdfRef} 
          style={{ width: '210mm', minHeight: '297mm', padding: '15mm', backgroundColor: '#ffffff', color: '#18181b', fontFamily: 'sans-serif' }}
        >
          {/* Header del Presupuesto */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '2px solid #1e3a8a', paddingBottom: '24px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: '#eff6ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #bfdbfe' }}>
                <span style={{ fontSize: '36px', color: '#1e3a8a', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-0.05em' }}>{emisorSiglas}</span>
              </div>
              <div>
                <h1 style={{ fontSize: '30px', fontWeight: '900', color: '#172554', fontStyle: 'italic', margin: 0, letterSpacing: '-0.05em' }}>{emisorNombre}</h1>
                <p style={{ fontSize: '12px', color: '#52525b', fontWeight: '500', margin: '4px 0' }}>{emisorSubtitulo}</p>
                <p style={{ fontSize: '10px', color: '#71717a', margin: 0 }}>RUC: {emisorRUC} | Asunción, Paraguay</p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '900', color: '#d4d4d8', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Presupuesto</h2>
              <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#27272a', marginTop: '4px', marginBottom: 0 }}>Fecha: {cliente.fecha}</p>
              <p style={{ fontSize: '12px', color: '#71717a', margin: 0 }}>Validez: 15 días</p>
            </div>
          </div>

          {/* Datos del Cliente */}
          <div style={{ backgroundColor: '#fafafa', padding: '16px', borderRadius: '12px', border: '1px solid #e4e4e7', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '12px', fontWeight: 'bold', color: '#1e3a8a', textTransform: 'uppercase', marginBottom: '8px', marginTop: 0 }}>Preparado para:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '14px' }}>
              <p style={{ margin: 0 }}><span style={{ fontWeight: 'bold', color: '#3f3f46' }}>Institución:</span> {cliente.institucion || "___________________"}</p>
              <p style={{ margin: 0 }}><span style={{ fontWeight: 'bold', color: '#3f3f46' }}>RUC:</span> {cliente.ruc || "___________________"}</p>
              <p style={{ margin: 0 }}><span style={{ fontWeight: 'bold', color: '#3f3f46' }}>Atención:</span> {cliente.contacto || "___________________"}</p>
              <p style={{ margin: 0 }}><span style={{ fontWeight: 'bold', color: '#3f3f46' }}>Teléfono:</span> {cliente.telefono || "___________________"}</p>
            </div>
          </div>

          {/* Tabla de Productos */}
          <table style={{ width: '100%', fontSize: '14px', marginBottom: '32px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#172554', color: '#ffffff', textAlign: 'left' }}>
                <th style={{ padding: '12px', width: '60px', textAlign: 'center', borderTopLeftRadius: '8px' }}>Cant.</th>
                <th style={{ padding: '12px' }}>Descripción del Producto</th>
                <th style={{ padding: '12px', textAlign: 'right' }}>Precio Unit. (Gs)</th>
                <th style={{ padding: '12px', textAlign: 'right', borderTopRightRadius: '8px' }}>Total (Gs)</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #f4f4f5' }}>
                  <td style={{ padding: '8px', textAlign: 'center', fontWeight: 'bold', color: '#27272a' }}>{item.cantidad}</td>
                  <td style={{ padding: '8px', fontWeight: '500', color: '#27272a' }}>{item.nombre}</td>
                  <td style={{ padding: '8px', textAlign: 'right', color: '#3f3f46' }}>{item.precioUnitario.toLocaleString('es-PY')}</td>
                  <td style={{ padding: '8px', textAlign: 'right', fontWeight: 'bold', color: '#18181b' }}>{(item.cantidad * item.precioUnitario).toLocaleString('es-PY')}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totales */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '48px' }}>
            <div style={{ width: '50%', backgroundColor: '#fafafa', padding: '16px', borderRadius: '12px', border: '1px solid #e4e4e7', textAlign: 'right' }}>
              <p style={{ fontSize: '14px', color: '#52525b', marginBottom: '4px', marginTop: 0 }}>Total IVA Incluido (10%)</p>
              <p style={{ fontSize: '30px', fontWeight: '900', color: '#172554', margin: 0 }}>Gs. {totalPresupuesto.toLocaleString('es-PY')}</p>
            </div>
          </div>

          {/* Condiciones Comerciales Legales */}
          <div style={{ paddingTop: '32px', borderTop: '1px solid #e4e4e7', marginTop: 'auto' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '900', color: '#27272a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', marginTop: 0 }}>Términos y Condiciones Comerciales</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', fontSize: '11px', color: '#52525b', lineHeight: '1.6' }}>
              <div>
                <p style={{ fontWeight: 'bold', color: '#27272a', marginBottom: '4px', marginTop: 0 }}>Forma de Pago:</p>
                <ul style={{ paddingLeft: '16px', marginBottom: '12px', marginTop: 0 }}>
                  <li>50% de anticipo para confirmación de orden y producción.</li>
                  <li>50% saldo contra entrega e instalación de la mercadería.</li>
                  <li>Transferencias a la cuenta a nombre de {emisorNombre} (RUC: {emisorRUC}).</li>
                </ul>
                <p style={{ fontWeight: 'bold', color: '#27272a', marginBottom: '4px', marginTop: 0 }}>Plazo de Entrega:</p>
                <p style={{ margin: 0 }}>15 a 20 días hábiles a partir de la recepción del anticipo.</p>
              </div>
              <div>
                <p style={{ fontWeight: 'bold', color: '#27272a', marginBottom: '4px', marginTop: 0 }}>Garantía de Fábrica:</p>
                <p style={{ marginBottom: '12px', marginTop: 0 }}>Muebles con garantía contra defectos de fabricación en estructuras y plásticos.</p>
                <p style={{ fontWeight: 'bold', color: '#27272a', marginBottom: '4px', marginTop: 0 }}>Validez de Oferta:</p>
                <p style={{ margin: 0 }}>Presupuesto con validez de 15 días calendario.</p>
              </div>
            </div>
          </div>

          {/* Firma */}
          <div style={{ marginTop: '64px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', width: '256px', borderTop: '1px solid #a1a1aa', paddingTop: '8px' }}>
              <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#27272a', margin: 0 }}>Dpto. Comercial</p>
              <p style={{ fontSize: '12px', color: '#71717a', margin: 0 }}>{emisorNombre}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
