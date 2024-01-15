import 'normalize.css';
import '@mantine/core/styles.css';
import './App.css';
import { MantineProvider } from '@mantine/core';

import TodoList from './components/TodoList'

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <TodoList />
    </MantineProvider>
  )
}

export default App
