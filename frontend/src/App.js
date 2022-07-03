// import React, { useState, useEffect } from 'react';
// import fetchAPI from './services/fetchAPI';
import './App.css';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  // const [tasks, setTasks] = useState([]);

  // const [filteredTasks, setFilteredTasks] = useState([]);

  // const storeData = async () => {
  //   const data = await fetchAPI(); // 'data' recebe response da fetchAPI
  //   setTasks(data);
  //   setFilteredTasks(data);
  // };

  // useEffect(() => { storeData(); }, []);
  // array vazio => funcionamento do useEffect é similar ao componentDidMount() 

  return (
    <div className="App">
      <header class="header-todolist">Lista de Tarefas Pessoais</header>

      <input type="text" id="task-name" />

      <br /><br />

      <div class="btn-group" data-toggle="buttons" id="input-task-status">
          <label class="btn btn-primary active">
            <input type="radio" name="options" id="status-pending" checked value="pendente"/> Pendente
          </label>
          <label class="btn btn-primary">
            <input type="radio" name="options" id="status-in-progress" value="em andamento"/> Em andamento
          </label>
          <label class="btn btn-primary">
            <input type="radio" name="options" id="status-ready"  value="pronto" /> Pronto
          </label>
        </div>

        <br /><br />

      <div className="actions-crud">
        <button button type="button" class="btn btn-default" id="create-task">Criar tarefa</button>
        <button button type="button" class="btn btn-default" id="remove-selected">Remover tarefa selecionada</button>
        <button button type="button" class="btn btn-default" id="update-selected">Atualizar tarefa selecionada</button>
      </div>

      <br /><br />

        Listar tarefas por: <br/><br/>

        <div class="btn-group" data-toggle="buttons" id="sort-tasks">
          <label class="btn btn-primary active">
            <input type="radio" name="options" id="sort-by-name" checked value="sort-by-name"/> Nome
          </label>
          <label class="btn btn-primary">
            <input type="radio" name="options" id="sort-by-date" value="sort-by-date"/> Data de criação
          </label>
          <label class="btn btn-primary">
            <input type="radio" name="options" id="sort-by-status"  value="sort-by-status" /> Status
          </label>
        </div>
        <br/><br/>

      <ol id="task-list"></ol>

      <br /><br /><br />

    </div>
  );
}

export default App;
