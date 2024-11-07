import { Route, Routes } from 'react-router-dom';
import Layout from '@/pages/Layout';
import Profile from '@/pages/Profile';
import Workspace from '@/pages/Workspace';
import Billing from '@/pages/Billing';
import { UserProvider } from './context/UserContext';
import './App.css'

function App() {

  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Profile />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/billing" element={<Billing />} />
        </Route>
      </Routes>
    </UserProvider>
  )
}

export default App
