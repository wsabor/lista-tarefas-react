import React, {useState} from "react";

function FormularioTarefa() {
    return (
        <form>
            <input type="text" placeholder="Digite uma tarefa" />
            <button type="submit">Adicionar</button>
        </form>
    )
}

export default FormularioTarefa;