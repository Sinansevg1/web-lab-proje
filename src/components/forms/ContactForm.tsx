import { useState, type FormEvent } from "react";
import { useContent } from "../../context/useContent";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(data: ContactFormData): FormErrors {
  const newErrors: FormErrors = {};

  if (!data.name.trim()) {
    newErrors.name = "Ad soyad zorunludur.";
  } else if (data.name.trim().length < 2) {
    newErrors.name = "Ad soyad en az 2 karakter olmalidir.";
  }

  if (!data.email.trim()) {
    newErrors.email = "E-posta zorunludur.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    newErrors.email = "Gecerli bir e-posta adresi giriniz.";
  }

  if (!data.subject.trim()) {
    newErrors.subject = "Konu zorunludur.";
  }

  if (!data.message.trim()) {
    newErrors.message = "Mesaj zorunludur.";
  } else if (data.message.trim().length < 10) {
    newErrors.message = "Mesaj en az 10 karakter olmalidir.";
  }

  return newErrors;
}

export default function ContactForm() {
  const { content } = useContent();
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitInfo, setSubmitInfo] = useState<string | null>(null);

  function handleChange(field: keyof ContactFormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    const email = content?.contact.formSubmitEmail ?? "9a.sinansevgi@gmail.com";
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `[Portfolyo] ${formData.subject}`,
          message: formData.message,
          _captcha: "false",
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Gonderim hatasi");
      }

      setSubmitInfo("Mesajiniz basariyla iletildi. En kisa surede donus yapacagim.");
      setFormData(initialFormData);
    } catch {
      setSubmitInfo("Mesaj gonderilemedi. Lutfen tekrar deneyin veya WhatsApp ile ulasin.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const fieldError = (field: keyof FormErrors) =>
    errors[field] ? "border-red-400 focus:border-red-400 focus:ring-red-200" : "";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {submitInfo && (
        <div
          className={`rounded-xl border p-3 text-sm ${
            submitInfo.includes("basariyla")
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-amber-200 bg-amber-50 text-amber-800"
          }`}
        >
          {submitInfo}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-brand)] mb-1.5">
          Ad Soyad
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={`input-field ${fieldError("name")}`}
          placeholder="Adiniz Soyadiniz"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-brand)] mb-1.5">
          E-posta
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={`input-field ${fieldError("email")}`}
          placeholder="ornek@mail.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-[var(--color-brand)] mb-1.5">
          Konu
        </label>
        <select
          id="subject"
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className={`input-field ${fieldError("subject")}`}
        >
          <option value="">Konu seciniz...</option>
          <option value="is teklifi">Is Teklifi</option>
          <option value="freelance proje">Freelance Proje</option>
          <option value="oneri">Oneri</option>
          <option value="isbirligi">Is Birligi</option>
        </select>
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-brand)] mb-1.5">
          Mesaj
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`input-field resize-y min-h-[120px] ${fieldError("message")}`}
          placeholder="Mesajinizi yaziniz..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-50">
        {isSubmitting ? "Gonderiliyor..." : "Mesaj Gonder"}
      </button>
    </form>
  );
}
