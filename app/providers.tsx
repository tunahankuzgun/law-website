import ImageProvider from "@/context/ImageProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <ImageProvider>{children}</ImageProvider>;
};

export default Providers;
