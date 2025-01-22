import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-[1440px] flex flex-col mx-auto bg-zinc-800 min-h-screen ">
      {children}
    </div>
  );
};

export default Container;
