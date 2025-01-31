import { LoginForm } from "@/components/ui/login-form";
import { auth } from "@/lib/auth";

const Admin = async () => {
  const session = await auth();

  if (!session)
    return (
      <main className="w-full mx-auto p-4">
        <div className="flex flex-col items-center justify-center h-screen bg-background">
          <h1 className="mb-10 text-4xl">Hello Guest</h1>
          <LoginForm />
        </div>
      </main>
    );
  if (session)
    return (
      <main className="flex w-full mx-auto">
        <div className="flex flex-col items-center justify-center h-screen bg-background"></div>
      </main>
    );
};

export default Admin;
