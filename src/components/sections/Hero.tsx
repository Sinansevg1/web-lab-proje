export default function Hero() {
  return (
    <section
      id="hero"
      className="px-4 sm:px-6 pt-16 pb-10 md:pt-20 md:pb-14 lg:pt-24 lg:pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto w-full text-center md:text-left">
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Merhaba, ben</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
          Sinan Sevgi
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-3 mb-6">
          Yazilim Muhendisi | Fullstack Developer
        </p>

        <ul className="text-sm sm:text-base text-gray-600 dark:text-gray-300 space-y-2 sm:space-y-0 sm:flex sm:flex-wrap sm:justify-center md:justify-start sm:gap-x-2 mb-8 max-w-2xl md:max-w-none mx-auto md:mx-0">
          <li>Mersin, Turkiye</li>
          <li className="hidden sm:inline text-gray-400">|</li>
          <li className="break-all sm:break-normal">
            <a href="mailto:9a.sinansevgi@gmail.com" className="hover:text-blue-600">
              9a.sinansevgi@gmail.com
            </a>
          </li>
          <li className="hidden sm:inline text-gray-400">|</li>
          <li>
            <a href="tel:+905304879347" className="hover:text-blue-600">
              +90 530 487 93 47
            </a>
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start mb-6">
          <a
            href="#projects"
            className="w-full sm:w-auto text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Projelerimi Gor
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto text-center border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            Iletisime Gec
          </a>
          <a
            href="https://wa.me/905304879347?text=Merhaba%20Sinan%20Bey%2C%20portfolyonuz%20uzerinden%20ulasiyorum."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto text-center border border-green-600 text-green-700 dark:text-green-400 px-6 py-3 rounded-lg font-medium hover:bg-green-50 dark:hover:bg-gray-800 transition-colors"
          >
            WhatsApp'tan Ulas
          </a>
        </div>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
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
    </section>
  );
}
