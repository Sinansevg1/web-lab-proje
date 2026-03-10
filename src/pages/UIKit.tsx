import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKit() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12 transition-colors">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                UI Kit
            </h1>

            {/* --- BUTTONS --- */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold border-b pb-2 text-gray-900 dark:text-white dark:border-gray-800">Buttons</h2>
                <div className="flex flex-wrap gap-3">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="ghost">Ghost</Button>
                </div>
                <div className="flex flex-wrap items-end gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button variant="primary" disabled className="opacity-50 cursor-not-allowed">Disabled</Button>
                </div>
            </section>

            {/* --- INPUTS --- */}
            <section className="space-y-4 max-w-md">
                <h2 className="text-2xl font-semibold border-b pb-2 text-gray-900 dark:text-white dark:border-gray-800">Inputs</h2>
                <Input id="ui-name" label="Normal Input" placeholder="Bir sey yazin..." />
                <Input id="ui-err" label="Hatali Input" error="Bu alan zorunludur" placeholder="Hata durumu" />
                <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin" placeholder="Yardım metni" />
                <Input id="ui-dis" label="Disabled" disabled value="Duzenlenemez" />
            </section>

            {/* --- CARDS --- */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold border-b pb-2 text-gray-900 dark:text-white dark:border-gray-800">Cards</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card variant="elevated" title="Elevated Card">
                        Gölge ile yükseltilmiş kart. En yaygın kullanılan varyanttır.
                    </Card>
                    <Card variant="outlined" title="Outlined Card">
                        Çerçeveli kart. Daha sade durumlarda tercih edilir.
                    </Card>
                    <Card variant="filled" title="Filled Card" footer={<Button size="sm">Detay</Button>}>
                        Dolgulu arka plan. İç içe geçmiş bölümler için iyidir.
                    </Card>
                </div>
            </section>

            {/* --- ALERTS --- */}
            <section className="space-y-4 max-w-xl">
                <h2 className="text-2xl font-semibold border-b pb-2 text-gray-900 dark:text-white dark:border-gray-800">Alerts</h2>
                <Alert variant="info" title="Bilgi">
                    Formunuz başarıyla kaydedildi.
                </Alert>
                <Alert variant="success" title="Başarılı">
                    İşlem tamamlandı!
                </Alert>
                <Alert variant="warning" title="Uyarı">
                    Oturumunuz 5 dakika sonra sona erecek.
                </Alert>
                <Alert variant="error" title="Hata" dismissible onDismiss={() => alert('Kapatıldı')}>
                    Bağlantı kurulamadı. Tekrar deneyin.
                </Alert>
            </section>
        </div>
    );
}
