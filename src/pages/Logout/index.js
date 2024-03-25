import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const navigate = useNavigate();
  localStorage.removeItem('user');
  localStorage.removeItem('Authorization');
  localStorage.removeItem('authority');
  useEffect(() => {
    window.location.href = '/';
  });
};
