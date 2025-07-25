import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const TypewriterText = ({ text, speed = 50 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayText}</span>;
};

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', icon: 'Home', label: 'Главная' },
    { id: 'about', icon: 'Users', label: 'О нас' },
    { id: 'projects', icon: 'Folder', label: 'Проекты' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-16">
            {/* Hero Section */}
            <div className="relative text-center py-20 animate-fade-in">
              {/* Creative People Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div 
                  className="absolute top-10 right-20 w-32 h-32 opacity-20 animate-float"
                  style={{
                    backgroundImage: `url('/img/76d9df4f-67a4-4a90-b0a9-449e01cde0dc.jpg')`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(0) invert(1)'
                  }}
                ></div>
                <div 
                  className="absolute bottom-10 left-20 w-40 h-40 opacity-15 animate-pulse-cosmic"
                  style={{
                    backgroundImage: `url('/img/cf73d5ca-42f5-4199-9a8b-a42c309e90e1.jpg')`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(0) invert(1)'
                  }}
                ></div>
                <div 
                  className="absolute top-1/2 left-10 w-24 h-24 opacity-10 animate-float"
                  style={{
                    backgroundImage: `url('/img/76d9df4f-67a4-4a90-b0a9-449e01cde0dc.jpg')`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(0) invert(1)',
                    animationDelay: '1s'
                  }}
                ></div>
              </div>
              
              <div className="relative z-10">
                <h1 className="text-7xl font-unbounded font-black text-white mb-8 animate-float tracking-wider">
                  МЕДИА КОМАНДА
                  <span className="block text-8xl bg-gradient-to-r from-gorkhon-blue to-gorkhon-pink bg-clip-text text-transparent mt-4">
                    ГОРХОН
                  </span>
                </h1>
                <p className="text-xl font-unbounded font-light text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Мы создаем визуальные истории поселка Горхон через фотографию, веб-технологии и медиа-проекты. 
                  Наша миссия — сохранить память и создать цифровое будущее нашего родного места.
                </p>
                <div className="mt-12 flex justify-center gap-6">
                  <Button 
                    className="bg-gorkhon-blue hover:bg-gorkhon-blue/80 text-white px-10 py-8 text-xl font-unbounded font-bold animate-pulse-cosmic rounded-2xl shadow-2xl shadow-gorkhon-blue/30"
                    onClick={() => setActiveSection('projects')}
                  >
                    <Icon name="Play" className="mr-3" size={28} />
                    Наши проекты
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-2 border-gorkhon-pink text-gorkhon-pink hover:bg-gorkhon-pink hover:text-white px-10 py-8 text-xl font-unbounded font-bold rounded-2xl backdrop-blur-sm bg-white/10"
                    onClick={() => setActiveSection('about')}
                  >
                    <Icon name="Users" className="mr-3" size={28} />
                    Узнать больше
                  </Button>
                </div>
              </div>
            </div>

            {/* Features Cards */}
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
              <Card className="bg-white/20 backdrop-blur-lg border-gorkhon-blue/50 hover:border-gorkhon-blue transition-all duration-300 hover:scale-105 shadow-xl">
                <CardContent className="p-10 text-center">
                  <Icon name="Camera" size={56} className="text-gorkhon-blue mx-auto mb-6 animate-float" />
                  <h3 className="text-3xl font-unbounded font-bold text-white mb-4">Фотопроекты</h3>
                  <p className="text-white/80 font-unbounded font-light text-lg leading-relaxed">
                    Сохраняем школьные воспоминания и моменты жизни поселка
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/20 backdrop-blur-lg border-gorkhon-pink/50 hover:border-gorkhon-pink transition-all duration-300 hover:scale-105 shadow-xl">
                <CardContent className="p-10 text-center">
                  <Icon name="Globe" size={56} className="text-gorkhon-pink mx-auto mb-6 animate-float" />
                  <h3 className="text-3xl font-unbounded font-bold text-white mb-4">Веб-разработка</h3>
                  <p className="text-white/80 font-unbounded font-light text-lg leading-relaxed">
                    Создаем веб-приложения где все важное в одном месте
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/20 backdrop-blur-lg border-white/50 hover:border-white transition-all duration-300 hover:scale-105 shadow-xl">
                <CardContent className="p-10 text-center">
                  <Icon name="Sparkles" size={56} className="text-white mx-auto mb-6 animate-float" />
                  <h3 className="text-3xl font-unbounded font-bold text-white mb-4">Медиа-контент</h3>
                  <p className="text-white/80 font-unbounded font-light text-lg leading-relaxed">
                    Профессиональная съемка и создание визуального контента
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Stats Section */}
            <div className="bg-white/25 backdrop-blur-lg rounded-3xl p-16 animate-fade-in shadow-2xl border border-white/30">
              <div className="grid md:grid-cols-3 gap-16 text-center">
                <div className="animate-pulse-cosmic">
                  <div className="text-6xl font-unbounded font-black text-gorkhon-blue mb-4">2</div>
                  <div className="text-white font-unbounded font-medium text-lg">Проекта</div>
                </div>
                <div className="animate-pulse-cosmic">
                  <div className="text-6xl font-unbounded font-black text-gorkhon-pink mb-4">877</div>
                  <div className="text-white font-unbounded font-medium text-lg">Подписчиков</div>
                </div>
                <div className="animate-pulse-cosmic">
                  <div className="text-6xl font-unbounded font-black text-white mb-4">2022</div>
                  <div className="text-white font-unbounded font-medium text-lg">Год основания</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-12 animate-fade-in">
            {/* Quote Section */}
            <div className="text-center py-16">
              <div className="max-w-4xl mx-auto">
                <Icon name="Quote" size={64} className="text-gorkhon-pink mx-auto mb-8 animate-float" />
                <blockquote className="text-3xl font-unbounded font-light text-white mb-8 leading-relaxed min-h-[120px]">
                  <TypewriterText text=""Наша команда создана для того, чтобы показать красоту и уникальность поселка Горхон через современные медиа-технологии. Мы верим, что каждый момент достоин быть запечатленным и сохраненным для будущих поколений."" speed={30} />
                </blockquote>
                <cite className="text-xl text-gorkhon-blue font-unbounded font-semibold">
                  — Руководитель команды "Горхон"
                </cite>
              </div>
            </div>

            {/* Info Banner */}
            <div className="bg-gradient-to-r from-gorkhon-blue/20 to-gorkhon-pink/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30 text-center">
              <h3 className="text-2xl font-unbounded font-bold text-white mb-4">Желаешь присоединиться?</h3>
              <p className="text-white/80 font-unbounded font-light text-lg mb-6">
                Пиши в наше сообщество ВКонтакте и станьте частью команды!
              </p>
              <Button 
                className="bg-gorkhon-blue hover:bg-gorkhon-blue/80 text-white px-8 py-4 font-unbounded font-bold rounded-xl"
                onClick={() => window.open('https://vk.com/gorhon_official', '_blank')}
              >
                <Icon name="Users" className="mr-2" />
                Присоединиться
              </Button>
            </div>

            {/* Team Story */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/img/1b3a0e01-24a7-40b5-bb86-18f7edf6c854.jpg" 
                  alt="Медиа команда Горхон" 
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-unbounded font-bold text-white mb-6">Наша история</h2>
                <p className="text-white font-unbounded font-light text-lg leading-relaxed">
                  Медиа команда "Горхон" была создана в 2022 году группой энтузиастов из поселка Горхон. 
                  Мы объединились с целью сохранить историю нашего родного места и создать современную цифровую платформу 
                  для жителей поселка.
                </p>
                <p className="text-white font-unbounded font-light text-lg leading-relaxed">
                  Наша команда состоит из фотографов, веб-разработчиков и контент-мейкеров, которые работают над созданием 
                  качественного визуального контента. Мы специализируемся на фотопроектах, веб-разработке и создании 
                  интерактивных медиа-решений.
                </p>
                <p className="text-white font-unbounded font-light text-lg leading-relaxed">
                  Каждый проект для нас — это возможность рассказать уникальную историю нашего поселка и его жителей.
                </p>
              </div>
            </div>

            {/* Additional Images */}
            <div className="grid md:grid-cols-2 gap-8">
              <img 
                src="/img/cf73d5ca-42f5-4199-9a8b-a42c309e90e1.jpg" 
                alt="Команда в работе" 
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="/img/76d9df4f-67a4-4a90-b0a9-449e01cde0dc.jpg" 
                alt="Творческий процесс" 
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-unbounded font-bold text-white mb-6 animate-float">Наши проекты</h2>
              <p className="text-xl font-unbounded font-light text-white max-w-3xl mx-auto">
                Каждый проект создается с любовью к родному поселку и стремлением сохранить его историю для будущих поколений
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Photo Project */}
              <Card className="bg-white/20 backdrop-blur-lg border-gorkhon-pink/50 hover:border-gorkhon-pink transition-all duration-300 group shadow-xl">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src="/img/750ed4be-b844-4fbc-91a7-db3cac41def6.jpg" 
                      alt="По волнам школьной памяти" 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gorkhon-pink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon name="Camera" className="text-gorkhon-pink animate-pulse-cosmic" />
                      <h3 className="text-2xl font-unbounded font-bold text-white">По волнам школьной памяти</h3>
                    </div>
                    <p className="text-white font-unbounded font-light mb-6 leading-relaxed">
                      Фотопроект, посвященный сохранению школьных воспоминаний учеников и выпускников Горхонской школы. 
                      Мы собираем и оцифровываем архивные фотографии, создавая цифровую летопись образования в поселке.
                    </p>
                    <div className="flex gap-2 flex-wrap mb-6">
                      <span className="px-3 py-1 bg-gorkhon-pink/20 text-gorkhon-pink rounded-full text-sm font-unbounded">Фотография</span>
                      <span className="px-3 py-1 bg-gorkhon-pink/20 text-gorkhon-pink rounded-full text-sm font-unbounded">Архив</span>
                      <span className="px-3 py-1 bg-gorkhon-pink/20 text-gorkhon-pink rounded-full text-sm font-unbounded">Школа</span>
                    </div>
                    <Button className="w-full bg-gorkhon-pink hover:bg-gorkhon-pink/80 text-white font-unbounded font-bold">
                      <Icon name="ExternalLink" className="mr-2" />
                      Посмотреть проект
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Web Project */}
              <Card className="bg-white/20 backdrop-blur-lg border-gorkhon-blue/50 hover:border-gorkhon-blue transition-all duration-300 group shadow-xl">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src="/img/1e13994c-2973-4060-9f2f-57151cb77e58.jpg" 
                      alt="Горхон.Online 360°" 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gorkhon-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon name="Globe" className="text-gorkhon-blue animate-pulse-cosmic" />
                      <h3 className="text-2xl font-unbounded font-bold text-white">Горхон.Online 360°</h3>
                    </div>
                    <p className="text-white font-unbounded font-light mb-6 leading-relaxed">
                      Сделать жизнь наших жителей удобнее и проще, предоставив быстрый и удобный доступ ко всей необходимой информации. 
                      Наш девиз звучит просто и тепло: «Для жителей! С заботой! Всегда рядом!»
                    </p>
                    <div className="flex gap-2 flex-wrap mb-6">
                      <span className="px-3 py-1 bg-gorkhon-blue/20 text-gorkhon-blue rounded-full text-sm font-unbounded">Веб-разработка</span>
                      <span className="px-3 py-1 bg-gorkhon-blue/20 text-gorkhon-blue rounded-full text-sm font-unbounded">Сервис</span>
                      <span className="px-3 py-1 bg-gorkhon-blue/20 text-gorkhon-blue rounded-full text-sm font-unbounded">Жители</span>
                    </div>
                    <Button className="w-full bg-gorkhon-blue hover:bg-gorkhon-blue/80 text-white font-unbounded font-bold">
                      <Icon name="ExternalLink" className="mr-2" />
                      Открыть приложение
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Coming Soon */}
            <div className="text-center py-16 bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30">
              <Icon name="Plus" size={64} className="text-white/50 mx-auto mb-6 animate-pulse-cosmic" />
              <h3 className="text-3xl font-unbounded font-bold text-white mb-4">Скоро новые проекты</h3>
              <p className="text-white font-unbounded font-light text-lg max-w-2xl mx-auto">
                Мы постоянно работаем над новыми идеями и проектами. Следите за обновлениями!
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/files/8b33ff74-1435-413c-bf8b-1288386c7f5b.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Logo */}
      <div className="absolute top-8 left-8 z-20 animate-fade-in">
        <img 
          src="https://cdn.poehali.dev/files/9f822a76-1fb6-4f65-a7a4-04014aa486cf.png" 
          alt="Логотип Горхон" 
          className="w-16 h-auto animate-float"
        />
      </div>

      {/* Floating Menu Capsule */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-20 animate-slide-in-left">
        <nav className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 shadow-lg">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`p-4 rounded-full transition-all duration-300 hover:scale-110 ${
                    activeSection === item.id
                      ? 'bg-white/20 shadow-lg'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <Icon name={item.icon} size={24} className="text-white" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 overflow-y-auto">
        <div className="pl-32 pr-12 py-12">
          {renderContent()}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-md border-t border-white/20 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-white font-unbounded font-light">
                © 2025 Горхон. Все права защищены.
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <a 
                href="https://vk.com/gorhon_official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gorkhon-blue transition-colors duration-300 hover:scale-110 transform"
              >
                <Icon name="Users" size={24} />
              </a>
              <a 
                href="https://t.me/gorhon_official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gorkhon-pink transition-colors duration-300 hover:scale-110 transform"
              >
                <Icon name="Send" size={24} />
              </a>
              <a 
                href="mailto:admin@gorhon.ru"
                className="text-white hover:text-white/80 transition-colors duration-300 hover:scale-110 transform"
              >
                <Icon name="Mail" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;