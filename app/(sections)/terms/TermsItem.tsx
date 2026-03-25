interface TermsItemProps {
  label?: string;
  children: React.ReactNode;
}

export default function TermsItem({ label, children }: TermsItemProps) {
  return (
    <p>
      {label && <span className="font-medium text-white mr-1">{label}</span>}
      {children}
    </p>
  );
}
