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
      <br />
      <header class="header-todolist">Lista de Tarefas Pessoais</header>

      <br />


            <div class="task-input">
              <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default" name="task-name">Task-to-be-done:</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>
            </div>
         
         
            <div class="btn-group" role="group" aria-label="radio toggle button group" id="input-task-status">
              <input type="radio" class="btn-check" name="btnradio" id="btnradio11" autocomplete="off" />
              <label class="btn btn-outline-primary" for="btnradio11">Pendente</label>

              <input type="radio" class="btn-check" name="btnradio" id="btnradio21" autocomplete="off" />
              <label class="btn btn-outline-primary" for="btnradio21">Em andamento</label>

              <input type="radio" class="btn-check" name="btnradio" id="btnradio31" autocomplete="off" />
              <label class="btn btn-outline-primary" for="btnradio31">Pronto</label>
            </div>
  

        <br /><br />

      <div class="btn-group" role="group" aria-label="radio toggle button group" id="actions-crud">
          <input type="radio" class="btn-check" name="btnradio" id="btnradio12" autocomplete="off" />
          <label class="btn btn-outline-primary" for="btnradio12">Criar tarefa</label>

          <input type="radio" class="btn-check" name="btnradio" id="btnradio22" autocomplete="off" />
          <label class="btn btn-outline-primary" for="btnradio22">Remover tarefa selecionada</label>

          <input type="radio" class="btn-check" name="btnradio" id="btnradio32" autocomplete="off" />
          <label class="btn btn-outline-primary" for="btnradio32">Atualizar tarefa selecionada</label>
      </div>

      <br /><br />

        Listar tarefas por: <br/><br/>

        <div class="btn-group" role="group" aria-label="radio toggle button group" id="sort-tasks">
          <input type="radio" class="btn-check" name="btnradio" id="sort-by-name" autocomplete="off" />
          <label class="btn btn-outline-primary" for="btnradio1">Nome</label>

          <input type="radio" class="btn-check" name="btnradio" id="sort-by-date" autocomplete="off" />
          <label class="btn btn-outline-primary" for="btnradio2">Data de criação</label>

          <input type="radio" class="btn-check" name="btnradio" id="sort-by-status" autocomplete="off" />
          <label class="btn btn-outline-primary" for="btnradio3">Status</label>
        </div>

      <br /><br />

      <div class="task-list">
        <div class="card">
          <ul class="list-group list-group-flush">
            <div></div>
            <li class="list-group-item">item1</li>
            <li class="list-group-item">item2</li>
            <li class="list-group-item">item3</li>
          </ul>
        </div>
      </div>

      <br /><br />

      <div class="task-list">
      <ul class="list-group">
        <li class="list-group-item list-group-item-dark">Pendente</li>
        <li class="list-group-item list-group-item-primary">Em andamento</li>
        <li class="list-group-item list-group-item-success">Pronto</li>
      </ul>
      </div>

      


      <br /><br /><br />

    </div>
  );
}

export default App;
