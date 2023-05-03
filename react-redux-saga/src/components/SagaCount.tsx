import { useEffect } from "react";
import useUser from "@/store-sagas/data/auth/user/useUser";
const  SagaCounter = () => {
  const { auth, acUserUpdate } = useUser();
  const triggerReduxSagaUpdate = () => {
    acUserUpdate({
      first_name: "abigaile",
      last_name: "hunter",
    });
  };
  useEffect(() => {
    console.log("auth updated = ", auth);
  }, [auth]);

  return (
    <div>
      {auth.user.first_name}
      {auth.user.last_name}

      <button onClick={triggerReduxSagaUpdate}>Trigger saga update</button>
    </div>
  );
}

export default SagaCounter;