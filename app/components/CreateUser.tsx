"use client";

import { createUser } from "@/actions/actions";
import { Button } from "@/components/ui/button";

const CreateUser = () => {
  return (
    <form action={createUser}>
      <input
        hidden
        defaultValue={"tkuzgun@gmail.com"}
        type="email"
        name="email"
        id="create-email"
        placeholder="Email"
        required
      />
      <input
        hidden
        defaultValue={"tkuzgun123"}
        type="password"
        name="password"
        id="create-password"
        placeholder="Password"
        required
      />

      <Button>Create User</Button>
    </form>
  );
};

export default CreateUser;
