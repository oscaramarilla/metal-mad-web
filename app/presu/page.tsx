"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Presupuestador() {
  const pdfRef = useRef<HTMLDivElement>(null);
  const [cargando, setCargando] = useState(false);

  // Estado del Cliente
  const [cliente, setCliente] = useState({
    institucion: "",
    contacto: "",
    ruc: "",
    telefono: "",
    fecha: new Date().toLocaleDateString('es-PY'),
  });

  // Base de datos rápida de productos Metal Mad
  const baseProductos = [
    { id: 1, nombre: "Pupitre Iso ORIPLAST (Línea MEC)", precio: 285000, imagen: "/productos/1.webp" },
    { id: 2, nombre: "Conjunto STUDENT (Nivel Medio)", precio: 450000, imagen: "/productos/2.webp" },
    { id: 3, nombre: "Mesa de Trabajo Grupal Hexagonal", precio: 850000, imagen: "" },
  ];

  // Estado de los items en el presupuesto
  const [items, setItems] = useState<{ id: number; nombre: string; cantidad: number; precioUnitario: number }[]>([]);

  // Funciones del carrito
  const agregarItem = (producto: any) => {
    setItems([...items, { ...producto, cantidad: 1, precioUnitario: producto.precio }]);
  };

  const eliminarItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const actualizarCantidad = (index: number, cantidad: number) => {
    const nuevosItems = [...items];
    nuevosItems[index].cantidad = cantidad;
    setItems(nuevosItems);
  };

  const actualizarPrecio = (index: number, precio: number) => {
    const nuevosItems = [...items];
    nuevosItems[index].precioUnitario = precio;
    setItems(nuevosItems);
  };

  const totalPresupuesto = items.reduce((acc, item) => acc + item.cantidad * item.precioUnitario, 0);

  // 🚀 Motor de Generación PDF
  const generarPDF = async () => {
    if (!pdfRef.current) return;
    setCargando(true);
    try {
      const canvas = await html2canvas(pdfRef.current, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Presupuesto_MetalMad_${cliente.institucion || 'Cliente'}.pdf`);
    } catch (error) {
      console.error("Error al generar PDF:", error);
      alert("Hubo un error al generar el PDF.");
    }
    setCargando(false);
  };

  return (
    <div className="min-h-screen bg-zinc-100 p-4 md:p-8 font-sans flex flex-col lg:flex-row gap-8">
      
      {/* 🎛️ PANEL DE CONTROL (Izquierda) - Solo para el vendedor */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-3xl shadow-lg border border-zinc-200 flex flex-col gap-6 h-fit">
        <div>
          <h2 className="text-2xl font-black text-blue-950 mb-1">Generador de Presupuestos</h2>
          <p className="text-sm text-zinc-500">Herramienta interna - Metal Mad E.A.S.</p>
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
              <button key={prod.id} onClick={() => agregarItem(prod)} className="text-left p-2 text-sm border border-blue-200 hover:bg-blue-50 rounded-lg text-blue-800 transition-colors">
                + {prod.nombre}
              </button>
            ))}
          </div>
        </div>

        {/* Botón de Descarga */}
        <button 
          onClick={generarPDF} 
          disabled={cargando || items.length === 0}
          className="w-full mt-4 bg-red-600 hover:bg-red-700 disabled:bg-zinc-400 text-white font-black py-4 rounded-xl shadow-lg flex justify-center items-center gap-2 transition-all active:scale-95"
        >
          {cargando ? "Generando Documento..." : "📥 Descargar PDF Oficial"}
        </button>
      </div>

      {/* 📄 VISTA PREVIA DEL PDF (Derecha) - Lo que verá el cliente */}
      <div className="flex-1 flex justify-center overflow-x-auto">
        {/* Contenedor A4 Estricto */}
        <div 
          ref={pdfRef} 
          className="bg-white shadow-2xl shrink-0 relative"
          style={{ width: '210mm', minHeight: '297mm', padding: '15mm' }} // Medidas exactas A4
        >
          {/* Header del Presupuesto */}
          <div className="flex justify-between items-start border-b-2 border-blue-900 pb-6 mb-6">
            <div className="flex items-center gap-4">
              {/* Espacio para el Logo Real */}
              <div className="w-20 h-20 bg-zinc-200 rounded-lg flex items-center justify-center font-black text-xs text-zinc-500 overflow-hidden relative">
                <Image src="/logo.webp" alt="Metal Mad Logo" fill className="object-contain" />
              </div>
              <div>
                <h1 className="text-3xl font-black text-blue-950 tracking-tighter italic">Metal Mad E.A.S.</h1>
                <p className="text-xs text-zinc-600 font-medium">Industria de Mobiliario Escolar Inyectado</p>
                <p className="text-[10px] text-zinc-500">RUC: 80132145-6 | Asunción, Paraguay</p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-black text-zinc-300 uppercase tracking-widest">Presupuesto</h2>
              <p className="text-sm font-bold text-zinc-800 mt-1">Fecha: {cliente.fecha}</p>
              <p className="text-xs text-zinc-500">Validez: 15 días</p>
            </div>
          </div>

          {/* Datos del Cliente en el PDF */}
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
                {/* Columna fantasma para el botón de borrar (No sale en PDF por CSS) */}
                <th className="w-8 data-html2canvas-ignore"></th> 
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr><td colSpan={4} className="text-center py-8 text-zinc-400 italic">Agregue productos desde el panel izquierdo...</td></tr>
              ) : (
                items.map((item, index) => (
                  <tr key={index} className="border-b border-zinc-100">
                    <td className="p-2 text-center">
                      <input type="number" value={item.cantidad} onChange={e => actualizarCantidad(index, Number(e.target.value))} className="w-12 text-center border rounded bg-transparent font-bold" />
                    </td>
                    <td className="p-2 font-medium text-zinc-800">{item.nombre}</td>
                    <td className="p-2 text-right">
                      <input type="number" value={item.precioUnitario} onChange={e => actualizarPrecio(index, Number(e.target.value))} className="w-24 text-right border-b border-dashed border-zinc-300 bg-transparent" />
                    </td>
                    <td className="p-2 text-right font-bold text-zinc-900">
                      {(item.cantidad * item.precioUnitario).toLocaleString('es-PY')}
                    </td>
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
              <p className="text-3xl font-black text-blue-950">
                Gs. {totalPresupuesto.toLocaleString('es-PY')}
              </p>
            </div>
          </div>

          {/* Condiciones Comerciales Legales (Inyectadas de MoviAula) */}
          <div className="mt-auto pt-8 border-t border-zinc-200">
            <h3 className="text-sm font-black text-zinc-800 uppercase tracking-widest mb-3">Términos y Condiciones Comerciales</h3>
            <div className="grid grid-cols-2 gap-6 text-[11px] text-zinc-600 leading-relaxed">
              <div>
                <p className="font-bold text-zinc-800 mb-1">Forma de Pago:</p>
                <ul className="list-disc pl-4 mb-3">
                  <li>50% de anticipo para confirmación de orden y producción.</li>
                  <li>50% saldo contra entrega e instalación de la mercadería.</li>
                  <li>Se aceptan transferencias bancarias y cheques vía depósito.</li>
                </ul>
                <p className="font-bold text-zinc-800 mb-1">Plazo de Entrega:</p>
                <p>15 a 20 días hábiles a partir de la recepción del anticipo, sujeto a disponibilidad de stock y volumen del pedido.</p>
              </div>
              <div>
                <p className="font-bold text-zinc-800 mb-1">Garantía de Fábrica:</p>
                <p className="mb-3">Todos nuestros muebles inyectados cuentan con garantía contra defectos de fabricación en estructuras metálicas y plásticos, bajo condiciones de uso normal escolar.</p>
                <p className="font-bold text-zinc-800 mb-1">Validez de Oferta:</p>
                <p>El presente presupuesto tiene una validez de 15 días calendario. Los precios pueden sufrir ajustes sin previo aviso superado este plazo.</p>
              </div>
            </div>
          </div>

          {/* Firma */}
          <div className="mt-16 flex justify-center">
            <div className="text-center w-64 border-t border-zinc-400 pt-2">
              <p className="text-sm font-bold text-zinc-800">Dpto. Comercial</p>
              <p className="text-xs text-zinc-500">Metal Mad E.A.S.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
