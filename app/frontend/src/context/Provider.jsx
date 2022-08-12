import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchTasks from '../api/fetchPLanets';
import tasksContext from './planetsContext';

function Provider({ children }) {
  // estado com o dado da response
  const [data, setData] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByTimestamp, setFilterByTimestamp] = useState([]);
  const [sortColumn, setSortColumn] = useState(undefined);

  // Component Did Mount?
  useEffect(() => {
    fetchTasks()
      .then((d) => { setTasks(d); setData(d); });
  }, []);

  // Valor enviado pelo provider
  const contextValue = {
    data,
    tasks,
    filterByName,
    filterByTimestamp,
    sortColumn,
    setTasks,
    setFilterByTimestamp,
    setFilterByName,
    setSortColumn,
  };

  return (
    <tasksContext.Provider value={ contextValue }>
      {children}
    </tasksContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
