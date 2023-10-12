import { getUserRoles } from '../services/roleService';
import { useState, useEffect } from 'react';

export default function RoleBadge() {
  const [highestRole, setHighestRole] = useState(null);
  useEffect(() => {
    getUserRoles().then((data) => {
      if (data.roles.includes('ADMIN')) {
        setHighestRole('ADMIN');
      } else if (data.roles.includes('PREMIUM')) {
        setHighestRole('PREMIUM');
      } else if (data.roles.includes('STANDARD')) {
        setHighestRole('STANDARD');
      }
    });
  }, []);

  return (
    <>
      {highestRole && (
        <div className="text-white custom-text-shadow">{highestRole}</div>
      )}
    </>
  );
}
