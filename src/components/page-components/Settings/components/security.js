import { useState } from "react";
import { SecurityOverview } from "./screens/securityOverview";
import { ChangePassword } from "./screens/changePassword";

export const UserSecurity = () => {
  const [editScreen, setEditScreen] = useState(false);

  const handleEdit = () => {
    setEditScreen(editScreen ? false : true);
  };
  return (
    <>
      {editScreen ? (
        <ChangePassword handleEdit={handleEdit} />
      ) : (
        <SecurityOverview handleEdit={handleEdit} />
      )}
    </>
  );
};
