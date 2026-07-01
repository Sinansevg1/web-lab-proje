import { useState } from "react";

interface AdminLoginProps {
  onLogin: (password: string) => void;
  error: string | null;
}

export default function AdminLogin({ onLogin, error }: AdminLoginProps) {
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-center flex-1 p-6 text-center">
      <div className="w-12 h-12 rounded-full bg-[var(--color-brand-light)] flex items-center justify-center mb-4">
        <svg className="w-6 h-6 text-[var(--color-brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
      <h2 className="text-lg font-bold text-[var(--color-brand)]">Yonetim Paneli</h2>
      <p className="text-sm text-[var(--color-ink-muted)] mt-1 mb-6">Devam etmek icin sifrenizi girin</p>
      <form
        className="w-full space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          onLogin(password);
        }}
      >
        <input
          type="password"
          className="input-field"
          placeholder="Sifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button type="submit" className="btn-primary w-full">
          Giris Yap
        </button>
      </form>
    </div>
  );
}
