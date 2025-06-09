export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}
