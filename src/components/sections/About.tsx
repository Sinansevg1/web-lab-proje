export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Hakkimda</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed md:col-span-2">
            Backend ve fullstack gelistirme odaginda, olceklenebilir uygulama tasarimi konusunda deneyim
            kazanan bir Yazilim Muhendisligi ogrencisiyim. C# ve .NET ile ASP.NET Core Web API, RESTful
            servisler ve SignalR uzerinde aktif calisiyorum. N-katmanli mimari, SOLID prensipleri,
            Dependency Injection, Repository Pattern ve Entity Framework ile temiz ve surdurulebilir kod
            uretmeye odaklaniyorum.
          </p>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900">
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
    </section>
  );
}

