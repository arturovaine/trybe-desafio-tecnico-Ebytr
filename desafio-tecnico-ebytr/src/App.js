import React, { useState, useEffect } from 'react';
import fetchAPI from './services/fetchAPI';
import './App.css';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [tasks, setTasks] = useState([]);

  const [filteredTasks, setFilteredTasks] = useState([]);

  const storeData = async () => {
    const data = await fetchAPI(); // 'data' recebe response da fetchAPI
    setTasks(data);
    setFilteredTasks(data);
  };

  useEffect(() => { storeData(); }, []);
  // array vazio => funcionamento do useEffect é similar ao componentDidMount()

  return (
    <div className="App">
      <header class="header-todolist">Lista de Tarefas Pessoais</header>

      <input type="text" id="task-name" />

      <div className="input-task-status">

        <label for="pendente">
          <input type="radio" id="pending" name="task-status" value="pendente"/>
          Pendente</label><br/>

        <label for="em andamento">
          <input type="radio" id="in-progress" name="task-status" value="em andamento"/>
          Em andamento</label><br/>

        <label for="pronto">
          <input type="radio" id="ready" name="task-status" value="pronto"/>
          Pronto</label>

      </div>

      <div className="actions-crud">
        <button id="create-task">Criar tarefa</button>
        <button id="remove-selected">Remover tarefa selecionada</button>
        <button id="update-selected">Atualizar tarefa selecionada</button>
      </div>

      <div className="sort-tasks">
        Listar tarefas por: <br/><br/>

        <label for="html">
        <input
          type="radio"
          id="sort-by-name"
          name="sort-tasks"
          value="nome"
        />
         Nome</label><br/>

        <label for="creation-timestamp">
        <input
          type="radio"
          id="in-progress"
          name="sort-tasks"
          value="em andamento"
        />
          Data de criação</label><br/>
        
        <label for="status">
        <input
          type="radio"
          id="ready" 
          name="sort-tasks"
          value="pronto"
        />
          Status</label>
      </div>

      <ol id="task-list"></ol>
    </div>
  );
}

export default App;
