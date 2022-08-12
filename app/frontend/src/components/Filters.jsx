import React, { useContext, useEffect, useState } from 'react';
import tasksContext from '../context/tasksContext';

function Filters() {
  const [nameInput, setNameInput] = useState('');
  const [column, setColumn] = useState('column1');
  const [comparison, setComparison] = useState('column2');
  const [valueFilter, setValueFilter] = useState(0);
  const [order, setOrder] = useState('ASC');
  const [selectedColumn, setSelectedColumn] = useState('name');
  const [availableColumns, setAvailableColumns] = useState([
    'column1',
    'column2',
    'column3',
  ]);

  const {
    setFilterByNumericValues,
    setFilterByName,
    filterByNumericValues,
    setSortColumn,
  } = useContext(tasksContext);

  useEffect(() => {
    filterByNumericValues.forEach((f) => {
      setAvailableColumns(availableColumns.filter(
        (c) => c !== f.column,
      ));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNumericValues]);

  const handleFilter = () => {
    setFilterByNumericValues([
      ...filterByNumericValues,
      {
        column,
        comparison,
        value: valueFilter,
      },
    ]);
  };

  const updateFilter = (filter) => {
    const updatedFilters = filterByNumericValues.filter(
      (f) => f !== filter,
    );
    setFilterByNumericValues(updatedFilters);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={ ({ target: { value } }) => {
            setNameInput(value); setFilterByName({ name: value });
          } }
          value={ nameInput }
          data-testid="name-filter"
        />
        <select
          data-testid="column-filter"
          onChange={ ({ target: { value } }) => setColumn(value) }
          value={ column }
        >
          {
            availableColumns.map((option) => (
              <option key={ option } value={ option }>{option}</option>
            ))
          }
        </select>

        <select
          data-testid="comparison-filter"
          onChange={ ({ target: { value } }) => setComparison(value) }
          value={ comparison }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>

        <input
          type="number"
          data-testid="value-filter"
          value={ valueFilter }
          onChange={ ({ target: { value } }) => setValueFilter(value) }
        />

        <button
          type="button"
          onClick={ handleFilter }
          data-testid="button-filter"
        >
          filtrar

        </button>

        <select
          onChange={ ({ target: { value } }) => setSelectedColumn(value) }
          value={ selectedColumn }
          data-testid="column-sort"
        >
          <option value="column1">column1</option>
          <option value="column2">column2</option>
          <option value="column3">column3</option>
        </select>

        <label htmlFor="asc">
          <input
            data-testid="column-sort-input-asc"
            onChange={ ({ target: { value } }) => setOrder(value) }
            type="radio"
            id="asc"
            name="order"
            value="ASC"
          />
          ascendente
        </label>

        <label htmlFor="dsc">
          <input
            type="radio"
            id="dsc"
            name="order"
            value="DESC"
            data-testid="column-sort-input-desc"
            onChange={ ({ target: { value } }) => setOrder(value) }
          />
          descendente
        </label>

        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => setSortColumn({
            column: selectedColumn,
            order,
          }) }
        >
          Ordenar
        </button>
      </div>
      <div>
        {
          filterByNumericValues.map((filter, index) => (
            <div key={ index }>
              <div data-testid="filter">
                {`${filter.column} | ${filter.comparison} | ${filter.value}`}
                <button
                  type="button"
                  onClick={
                    () => updateFilter(filter)
                  }
                >
                  X
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Filters;
