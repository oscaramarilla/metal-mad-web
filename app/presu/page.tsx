"use client";

import { useState, useRef } from "react";
// Quitamos la importación de 'next/image' porque usaremos la etiqueta nativa para evitar el error del PDF
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

  // 🚀 Motor de Generación PDF (Corregido)
  const generarPDF = async () => {
    if (!pdfRef.current) return;
    setCargando(true);
    try {
      // Configuramos html2canvas para que no bloquee las imágenes
      const canvas = await html2canvas(pdfRef.current, { 
        scale: 2, 
        useCORS: true,
        allowTaint: true,
        logging: false
      });
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Presupuesto_${isCorporate ? 'MetalMad' : 'OscarAmarilla'}_${cliente.institucion || 'Cliente'}.pdf`);
    } catch (error) {
      console.error("Error al generar PDF:", error);
      alert("Hubo un error al generar el PDF. Revisa la consola.");
    }
    setCargando(false);
  };

  return (
    <div className="min-h-screen bg-zinc-100 p-4 md:p-8 font-sans flex flex-col lg:flex-row gap-8 pb-36 md:pb-8">
      
      {/* 🎛️ PANEL DE CONTROL (Izquierda) */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-3xl shadow-lg border border-zinc-200 flex flex-col gap-6 h-fit z-10">
        
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
                <span className="truncate w-1/2 text-zinc-700 font-medium">{item.nombre}</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => actualizarCantidad(index, item.cantidad - 1)} className="w-7 h-7 bg-white border rounded shadow-sm text-red-600 font-bold">-</button>
                  <span className="w-6 text-center font-bold">{item.cantidad}</span>
                  <button onClick={() => actualizarCantidad(index, item.cantidad + 1)} className="w-7 h-7 bg-white border rounded shadow-sm text-green-600 font-bold">+</button>
                </div>
              </div>
            ))}
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

      {/* 📄 VISTA PREVIA DEL PDF (Derecha) */}
      <div className="flex-1 flex justify-center overflow-x-auto">
        <div 
          ref={pdfRef} 
          className="bg-white shadow-2xl shrink-0 relative"
          style={{ width: '210mm', minHeight: '297mm', padding: '15mm' }}
        >
          {/* Header del Presupuesto Dinámico */}
          <div className="flex justify-between items-start border-b-2 border-blue-900 pb-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-zinc-100 rounded-lg flex items-center justify-center font-black text-xs text-zinc-500 overflow-hidden relative border border-zinc-200">
                {isCorporate ? (
                  // ¡LA SOLUCIÓN! Usamos la etiqueta img nativa en vez de next/image
                  <img src="/logo.webp" alt="Logo" crossOrigin="anonymous" className="w-full h-full object-contain p-1" />
                ) : (
                  <span className="text-2xl text-blue-900">OA</span>
                )}
              </div>
              <div>
                <h1 className="text-3xl font-black text-blue-950 tracking-tighter italic">{emisorNombre}</h1>
                <p className="text-xs text-zinc-600 font-medium">{emisorSubtitulo}</p>
                <p className="text-[10px] text-zinc-500">RUC: {emisorRUC} | Asunción, Paraguay</p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-black text-zinc-300 uppercase tracking-widest">Presupuesto</h2>
              <p className="text-sm font-bold text-zinc-800 mt-1">Fecha: {cliente.fecha}</p>
              <p className="text-xs text-zinc-500">Validez: 15 días</p>
            </div>
          </div>

          {/* Datos del Cliente */}
          <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-200 mb-8">
            <h3 className="text-xs font-bold text-blue-900 uppercase mb-2">Preparado para:</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p><span className="font-bold text-zinc-700">Institución:</span> {cliente.institucion || "___________________"}</p>
              <p><span className="font-bold text-zinc-700">RUC:</span> {cliente.ruc || "___________________"}</p>
              <p><span className="font-bold text-zinc-700">Atención:</span> {cliente.contacto || "___________________"}</p>
              <p><span className="font-bold text-zinc-700">Teléfono:</span> {cliente.telefono || "___________________"}</p>
            </div>
          </div>

          {/* Tabla de Productos */}
          <table className="w-full text-sm mb-8">
            <thead>
              <tr className="bg-blue-950 text-white text-left">
                <th className="p-3 rounded-tl-lg w-16 text-center">Cant.</th>
                <th className="p-3">Descripción del Producto</th>
                <th className="p-3 text-right">Precio Unit. (Gs)</th>
                <th className="p-3 text-right rounded-tr-lg">Total (Gs)</th>
                <th className="w-8 data-html2canvas-ignore"></th> 
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr><td colSpan={4} className="text-center py-8 text-zinc-400 italic">Agregue productos desde el panel izquierdo...</td></tr>
              ) : (
                items.map((item, index) => (
                  <tr key={index} className="border-b border-zinc-100">
                    <td className="p-2 text-center font-bold text-zinc-800">{item.cantidad}</td>
                    <td className="p-2 font-medium text-zinc-800">{item.nombre}</td>
                    <td className="p-2 text-right text-zinc-700">{item.precioUnitario.toLocaleString('es-PY')}</td>
                    <td className="p-2 text-right font-bold text-zinc-900">{(item.cantidad * item.precioUnitario).toLocaleString('es-PY')}</td>
                    <td className="p-2 text-center" data-html2canvas-ignore>
                      <button onClick={() => eliminarItem(index)} className="text-red-500 hover:text-red-700 font-bold">X</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Totales */}
          <div className="flex justify-end mb-12">
            <div className="w-1/2 bg-zinc-50 p-4 rounded-xl border border-zinc-200 text-right">
              <p className="text-sm text-zinc-600 mb-1">Total IVA Incluido (10%)</p>
              <p className="text-3xl font-black text-blue-950">Gs. {totalPresupuesto.toLocaleString('es-PY')}</p>
            </div>
          </div>

          {/* Condiciones Comerciales Legales */}
          <div className="mt-auto pt-8 border-t border-zinc-200">
            <h3 className="text-sm font-black text-zinc-800 uppercase tracking-widest mb-3">Términos y Condiciones Comerciales</h3>
            <div className="grid grid-cols-2 gap-6 text-[11px] text-zinc-600 leading-relaxed">
              <div>
                <p className="font-bold text-zinc-800 mb-1">Forma de Pago:</p>
                <ul className="list-disc pl-4 mb-3">
                  <li>50% de anticipo para confirmación de orden y producción.</li>
                  <li>50% saldo contra entrega e instalación de la mercadería.</li>
                  <li>Transferencias a la cuenta a nombre de {emisorNombre} (RUC: {emisorRUC}).</li>
                </ul>
                <p className="font-bold text-zinc-800 mb-1">Plazo de Entrega:</p>
                <p>15 a 20 días hábiles a partir de la recepción del anticipo.</p>
              </div>
              <div>
                <p className="font-bold text-zinc-800 mb-1">Garantía de Fábrica:</p>
                <p className="mb-3">Muebles con garantía contra defectos de fabricación en estructuras y plásticos.</p>
                <p className="font-bold text-zinc-800 mb-1">Validez de Oferta:</p>
                <p>Presupuesto con validez de 15 días calendario.</p>
              </div>
            </div>
          </div>

          {/* Firma */}
          <div className="mt-16 flex justify-center">
            <div className="text-center w-64 border-t border-zinc-400 pt-2">
              <p className="text-sm font-bold text-zinc-800">Dpto. Comercial</p>
              <p className="text-xs text-zinc-500">{emisorNombre}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
