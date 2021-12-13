import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './shared/navbar/Navbar';
import { Home, About, User } from './pages';
import { User as UserComponent } from './components/user/User';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/users" element={ <User /> } >
            <Route index element={ <div>Seleccione un usuario</div> } />
            <Route path=":userId" element={ <UserComponent /> } />
          </Route>
          {/* <Route path="*" element={<div>404 not found</div>} /> */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
