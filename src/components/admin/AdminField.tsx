interface AdminFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  textarea?: boolean;
}

export default function AdminField({ label, value, onChange, textarea }: AdminFieldProps) {
  return (
    <label className="block text-sm">
      <span className="font-semibold text-[var(--color-brand)]">{label}</span>
      {textarea ? (
        <textarea
          className="input-field mt-1 min-h-[88px] resize-y"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input className="input-field mt-1" value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </label>
  );
}
