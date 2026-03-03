# CSS Kararlari

## 1. Breakpoint Seçimi
- **Neden 640px ve 1024px seçtim?** Modern web standartlarına (Tailwind CSS gibi) ve yaygın cihaz boyutlarına uyum sağlamak için bu noktaları belirledim. 640px küçük tablet geçişi, 1024px ise standart dizüstü bilgisayar ekranları için ideal bir sınır oluşturmaktadır.
- **İçeriğim bu noktalarda nasıl değişiyor?** 640px'te "Hakkımda" bölümü dikeyden yatay dizilime geçiyor ve navigasyon çubuğu genişliyor. 1024px'te ise proje kartları 3 sütunlu sabit bir ızgara yapısına oturarak geniş ekranların alanını daha verimli kullanıyor.

## 2. Layout Tercihleri
- **Header için neden Flexbox seçtim?** Navigasyon çubuğu gibi tek eksenli ve elemanlar arası boşluğun (`justify-content: space-between`) dinamik yönetildiği yapılar için Flexbox en verimli araçtır.
- **Proje kartları için neden Grid seçtim?** Kartların dikey ve yatayda hizalı durması, iki boyutlu bir kontrol gerektirdiği için Grid tercih edildi.
- **auto-fit mi auto-fill mi kullandım, neden?** `auto-fit` kullandım; çünkü az sayıda proje kartı olduğunda kartların tüm satırı kaplayarak ekranı doldurmasını ve boşluk kalmamasını istedim.

## 3. Design Tokens
- **Hangi renk paletini seçtim ve neden?** Profesyonel ve modern bir hava katmak için koyu mavi (`#2563EB`) ana renk, yüzeyler için ise temiz açık gri tonlarını seçtim. Kontrast oranlarının yüksek olmasına dikkat ettim.
- **Spacing skalasını nasıl belirledim?** 4px'lik bir baz üzerinden kurgulanan (8, 16, 24, 32, 48px) sistematik bir skala kullandım. Bu sayede tüm sayfa genelinde ritmik bir boşluk düzeni sağlandı.
- **Fluid typography için clamp değerlerini nasıl ayarladım?** Yazı tipi boyutlarını `clamp(min, preferred, max)` formülüyle (örneğin 1.5rem min ve 3rem max) belirledim. Bu sayede media query yazmadan yazıların her genişlikte akıcı bir şekilde büyümesini sağladım.

## 4. Responsive Stratejiler
- **Mobile-first yaklaşımını nasıl uyguladım?** CSS'i en temel (mobil) görünümden başlayarak yazdım. Daha büyük ekranlar için sadece gereken özellikleri `@media (min-width: ...)` blokları ile ekleyerek kod yükünü azalttım.
- **Hangi elemanlar breakpoint'lerde değişiyor?** Header dizilimi, form butonu genişliği (mobilde %100, tablette auto), "Hakkımda" bölümü yönü ve proje kartları sütun sayıları değişen ana unsurlardır.
- **Görsel boyutları nasıl yönettim?** Görsellerin orantısız bozulmasını engellemek için `object-fit: cover` ve sabit yükseklik değerleri kullandım. Ayrıca `max-width: 100%` ile görsellerin kapsayıcılarından taşmadığından emin oldum.
