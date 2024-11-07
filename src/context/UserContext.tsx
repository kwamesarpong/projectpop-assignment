import { createContext, useContext, useState, ReactNode } from 'react';

type UserContextType = {
  userName: string;
  setUserName: (name: string) => void;
  plan: string;
  setPlan: (plan: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userName, setUserName] = useState('');
  const [plan, setPlan] = useState('base');

  return (
    <UserContext.Provider value={{ userName, setUserName, plan, setPlan }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}