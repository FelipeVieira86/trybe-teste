import SearchBar from './components/NameSearch';
import Table from './components/Table';

import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <SearchBar />
      <Table />
    </Provider>
  );
}

export default App;
