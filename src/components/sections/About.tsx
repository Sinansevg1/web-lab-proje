export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 px-4 sm:px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-400 text-center md:text-left mb-8 md:mb-10">
          Hakkimda
        </h2>

        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:gap-8 lg:gap-12">
          <div className="shrink-0 flex flex-col items-center md:items-start">
            <img
              src="/profile-photo.png"
              alt="Sinan Sevgi"
              className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full object-cover border-4 border-blue-700/20 dark:border-blue-500/30 shadow-md"
              loading="lazy"
            />
            <p className="mt-3 font-semibold text-gray-800 dark:text-gray-200 md:hidden">Sinan Sevgi</p>
          </div>

          <div className="flex-1 min-w-0 mt-6 md:mt-0 space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              Backend ve fullstack gelistirme odaginda, olceklenebilir uygulama tasarimi konusunda deneyim
              kazanan bir Yazilim Muhendisligi ogrencisiyim. C# ve .NET ile ASP.NET Core Web API, RESTful
              servisler ve SignalR uzerinde aktif calisiyorum. N-katmanli mimari, SOLID prensipleri,
              Dependency Injection, Repository Pattern ve Entity Framework ile temiz ve surdurulebilir kod
              uretmeye odaklaniyorum.
            </p>

            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-5 bg-gray-50 dark:bg-gray-900 text-left w-full max-w-xl md:max-w-none mx-auto md:mx-0">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Hizli Bilgi</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>Rol: Yazilim Muhendisi</li>
                <li>Konum: Mersin, Turkiye</li>
                <li>Odak: Backend ve Fullstack Uygulamalar</li>
                <li>Teknoloji: .NET 8, EF Core, SignalR</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
