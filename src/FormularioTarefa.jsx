import React, { useState } from "react";

function FormularioTarefa({ onAdicionar }) {
  const [texto, setTexto] = useState("");

  const enviar = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      onAdicionar(texto);
      setTexto("");
    }
  };

  return (
    <form onSubmit={enviar}>
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormularioTarefa;
