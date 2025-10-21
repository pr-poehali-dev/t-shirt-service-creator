import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('catalog');

  const products = [
    {
      id: 1,
      name: 'Футболка',
      price: '1 500 ₽',
      image: 'https://cdn.poehali.dev/projects/92a3359e-d6df-4158-a098-ddbc029025c1/files/11e25d10-44ca-4ddf-9aab-f45ecfc6f96d.jpg',
    },
    {
      id: 2,
      name: 'Толстовка',
      price: '3 500 ₽',
      image: 'https://cdn.poehali.dev/projects/92a3359e-d6df-4158-a098-ddbc029025c1/files/2239cff8-79d0-4203-8cb0-6bfede45edf7.jpg',
    },
    {
      id: 3,
      name: 'Бейсболка',
      price: '1 200 ₽',
      image: 'https://cdn.poehali.dev/projects/92a3359e-d6df-4158-a098-ddbc029025c1/files/d1d6d742-7e8d-40e0-8cc6-aebd90ff6585.jpg',
    },
  ];

  const services = [
    {
      title: 'Прямая печать',
      description: 'Высококачественная печать на текстиле с устойчивостью к стирке',
      icon: 'Printer',
    },
    {
      title: 'Вышивка',
      description: 'Профессиональная машинная вышивка любой сложности',
      icon: 'Sparkles',
    },
  ];

  const portfolio = [
    {
      title: 'Корпоративный мерч',
      description: 'Брендированная одежда для IT-компании',
    },
    {
      title: 'Спортивная форма',
      description: 'Комплект формы для баскетбольной команды',
    },
    {
      title: 'Промо-продукция',
      description: 'Футболки для фестиваля',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold tracking-tight">ФУТБОЛОЧНАЯ</h1>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('catalog')}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Каталог
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Портфолио
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Контакты
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section className="min-h-[80vh] flex items-center justify-center px-6 py-20">
          <div className="text-center max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              Кастомная печать
              <br />
              <span className="font-semibold">и вышивка</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
              Превращаем обычную одежду в уникальную с помощью качественной печати и профессиональной вышивки
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-3 group cursor-pointer">
                <div className="w-20 h-20 border-2 border-foreground flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg width="50" height="60" viewBox="0 0 50 60" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 10 L40 10 L40 15 L45 20 L45 55 L5 55 L5 20 L10 15 Z" />
                    <line x1="10" y1="15" x2="40" y2="15" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Футболки</span>
              </div>

              <div className="flex flex-col items-center gap-3 group cursor-pointer">
                <div className="w-20 h-20 border-2 border-foreground flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg width="50" height="60" viewBox="0 0 50 60" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 10 L40 10 L40 15 L45 20 L45 55 L5 55 L5 20 L10 15 Z" />
                    <line x1="10" y1="15" x2="40" y2="15" />
                    <line x1="20" y1="10" x2="20" y2="30" />
                    <line x1="30" y1="10" x2="30" y2="30" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Рубашки поло</span>
              </div>

              <div className="flex flex-col items-center gap-3 group cursor-pointer">
                <div className="w-20 h-20 border-2 border-foreground flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg width="50" height="60" viewBox="0 0 50 60" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 5 L15 5 L15 10 L10 10 L10 15 L45 15 L45 55 L5 55 L5 15 L10 15 Z" />
                    <path d="M35 5 L40 5 L40 10 L35 10 Z" />
                    <path d="M17 8 L25 2 L33 8" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Худи</span>
              </div>

              <div className="flex flex-col items-center gap-3 group cursor-pointer">
                <div className="w-20 h-20 border-2 border-foreground flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg width="50" height="60" viewBox="0 0 50 60" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 10 L15 10 L15 5 L35 5 L35 10 L40 10 L45 15 L45 55 L5 55 L5 15 Z" />
                    <circle cx="25" cy="12" r="3" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Свитшоты</span>
              </div>

              <div className="flex flex-col items-center gap-3 group cursor-pointer">
                <div className="w-20 h-20 border-2 border-foreground flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg width="50" height="40" viewBox="0 0 50 40" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="25" cy="25" rx="20" ry="8" />
                    <path d="M5 25 Q5 15, 25 10 Q45 15, 45 25" />
                    <line x1="15" y1="10" x2="35" y2="10" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Бейсболки</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto">
              {['Оверсайз', 'Классика', 'Детская', 'Мужская', 'Женская', 'Плотная', 'Тёплая', 'С капюшоном', 'На замке'].map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 border border-foreground text-sm hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>

            <Button
              onClick={() => scrollToSection('catalog')}
              variant="outline"
              size="lg"
              className="border-2 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Смотреть каталог
            </Button>
          </div>
        </section>

        <section id="catalog" className="py-20 px-6 bg-secondary">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-3xl font-semibold mb-12 text-center">Каталог товаров</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-medium mb-2">{product.name}</h4>
                    <p className="text-muted-foreground mb-4">{product.price}</p>
                    <Button
                      variant="outline"
                      className="w-full border-2 hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      Заказать
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-3xl font-semibold mb-12 text-center">Наши услуги</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 border-2 hover:border-accent transition-colors">
                  <Icon name={service.icon} size={40} className="mb-4" />
                  <h4 className="text-2xl font-semibold mb-3">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 px-6 bg-secondary">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-3xl font-semibold mb-12 text-center">Портфолио работ</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolio.map((item, index) => (
                <Card key={index} className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-muted mb-4 flex items-center justify-center">
                    <Icon name="Image" size={48} className="text-muted-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="delivery" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-3xl font-semibold mb-12 text-center">Доставка и оплата</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Truck" size={24} />
                  Доставка
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Курьером по Москве — 350 ₽</li>
                  <li>• Почта России — от 300 ₽</li>
                  <li>• СДЭК — от 400 ₽</li>
                  <li>• Самовывоз — бесплатно</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="CreditCard" size={24} />
                  Оплата
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Картой онлайн</li>
                  <li>• Наличными курьеру</li>
                  <li>• По счёту для юр. лиц</li>
                  <li>• При получении</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 px-6 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h3 className="text-3xl font-semibold mb-8">Контакты</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <Icon name="Phone" size={32} className="mx-auto mb-3" />
                <p className="font-medium">+7 (999) 123-45-67</p>
              </div>
              <div>
                <Icon name="Mail" size={32} className="mx-auto mb-3" />
                <p className="font-medium">info@printshop.ru</p>
              </div>
              <div>
                <Icon name="MapPin" size={32} className="mx-auto mb-3" />
                <p className="font-medium">Москва, ул. Примерная, 1</p>
              </div>
            </div>
            <p className="text-sm opacity-80">Работаем ежедневно с 10:00 до 20:00</p>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-8 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm opacity-70">© 2025 Футболочная. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;