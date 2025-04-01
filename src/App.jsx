import React, { useState } from "react";
import FormularioTarefa from "./FormularioTarefa";
import Tarefa from "./Tarefa";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (texto) => {
    const novaTarefa = {
      id: Date.now(),
      texto,
      concluida: false,
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const concluirTarefa = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };
  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <div>
      <h1>Minha Lista de Tarefas</h1>
      <FormularioTarefa onAdicionar={adicionarTarefa} />
      {tarefas.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          tarefa={tarefa}
          onConcluir={concluirTarefa}
          onRemover={removerTarefa}
        />
      ))}
    </div>
  );
}

export default App;
