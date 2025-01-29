import { Toggle } from "@/components/ui/toggle";

interface ToggleButtonProps {
  children: React.ReactNode;
  className?: string;
  isPressed?: boolean;
  onClick?: () => void;
}

const ToggleButton = ({
  children,
  className,
  isPressed,
  onClick,
}: ToggleButtonProps) => {
  return (
    <Toggle pressed={isPressed} className={className} onClick={onClick}>
      {children}
    </Toggle>
  );
};

export default ToggleButton;
