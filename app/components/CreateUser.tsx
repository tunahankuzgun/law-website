import { signUp } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

const CreateUser = () => {
  return (
    <form
      action={async (formData) => {
        "use server";
        const res = await signUp(formData);
        if (res.success) {
          redirect("/admin");
        }
      }}
    >
      <input
        defaultValue={"tk@gmail.com"}
        type="email"
        name="email"
        id="create-email"
        placeholder="Email"
        required
      />
      <input
        defaultValue={"1234"}
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
