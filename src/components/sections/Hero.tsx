export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex items-start justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4 pt-4"
    >
      <div className="max-w-6xl w-full relative">
        <img
          src="/profile-photo.png"
          alt="Sinan Sevgi profil fotografi"
          className="absolute left-0 top-0 w-40 h-40 rounded-full object-cover border-2 border-white/80 dark:border-gray-700 shadow-md"
          loading="lazy"
        />

        <div className="text-center pt-2">
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Merhaba, ben</p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Sinan Sevgi
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Yazilim Muhendisi | Fullstack Developer
          </p>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-8">
            Mersin, Turkiye | 9a.sinansevgi@gmail.com | +90 530 487 93 47
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Projelerimi Gor
            </a>
            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            >
              Iletisime Gec
            </a>
            <a
              href="https://wa.me/905304879347?text=Merhaba%20Sinan%20Bey%2C%20portfolyonuz%20uzerinden%20ulasiyorum."
              target="_blank"
              rel="noreferrer"
              className="border border-green-600 text-green-700 dark:text-green-400 px-6 py-3 rounded-lg font-medium hover:bg-green-50 dark:hover:bg-gray-800 transition-colors"
            >
              WhatsApp'tan Ulas
            </a>
          </div>

          <div className="flex gap-4 justify-center flex-wrap text-sm">
            <a
              href="https://www.linkedin.com/in/sinan-sevgi-8a26a025b"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 dark:text-blue-300 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://restorant.sinansevgi.com.tr/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 dark:text-blue-300 hover:underline"
            >
              QuickOrder Canli Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
