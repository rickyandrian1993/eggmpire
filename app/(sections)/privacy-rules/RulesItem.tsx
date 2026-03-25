interface RulesItemProps {
  label?: string;
  children: React.ReactNode;
}

export default function RulesItem({ label, children }: RulesItemProps) {
  return (
    <p>
      {label && <span className="font-medium text-white mr-1">{label}</span>}
      {children}
    </p>
  );
}
