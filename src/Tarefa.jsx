function Tarefa({ tarefa, onConcluir, onRemover }) {
  return (
    <div style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}>
      {tarefa.texto}
      <button onClick={() => onConcluir(tarefa.id)}>Concluir</button>
      <button onClick={() => onRemover(tarefa.id)}>Remover</button>
    </div>
  );
}

export default Tarefa;
