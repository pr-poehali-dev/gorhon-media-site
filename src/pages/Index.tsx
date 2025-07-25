import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
              <div className="absolute inset-0 bg-gradient-to-r from-gorkhon-blue/20 to-gorkhon-pink/20 rounded-3xl animate-pulse-cosmic"></div>
              <div className="relative z-10">
                <h1 className="text-6xl font-bold text-white mb-6 animate-float">
                  МЕДИА КОМАНДА
                  <span className="block bg-gradient-to-r from-gorkhon-blue to-gorkhon-pink bg-clip-text text-transparent">
                    ГОРХОН
                  </span>
                </h1>
                <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                  Мы создаем визуальные истории поселка Горхон через фотографию, веб-технологии и медиа-проекты. 
                  Наша миссия — сохранить память и создать цифровое будущее нашего родного места.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                  <Button 
                    className="bg-gorkhon-blue hover:bg-gorkhon-blue/80 text-white px-8 py-6 text-lg animate-pulse-cosmic"
                    onClick={() => setActiveSection('projects')}
                  >
                    <Icon name="Play" className="mr-2" />
                    Наши проекты
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gorkhon-pink text-gorkhon-pink hover:bg-gorkhon-pink hover:text-white px-8 py-6 text-lg"
                    onClick={() => setActiveSection('about')}
                  >
                    <Icon name="Users" className="mr-2" />
                    Узнать больше
                  </Button>
                </div>
              </div>
            </div>

            {/* Features Cards */}
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
              <Card className="bg-white/10 backdrop-blur-md border-gorkhon-blue/30 hover:border-gorkhon-blue/60 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <Icon name="Camera" size={48} className="text-gorkhon-blue mx-auto mb-4 animate-float" />
                  <h3 className="text-2xl font-bold text-white mb-3">Фотопроекты</h3>
                  <p className="text-white/70">Сохраняем школьные воспоминания и моменты жизни поселка</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-gorkhon-pink/30 hover:border-gorkhon-pink/60 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <Icon name="Globe" size={48} className="text-gorkhon-pink mx-auto mb-4 animate-float" />
                  <h3 className="text-2xl font-bold text-white mb-3">Веб-разработка</h3>
                  <p className="text-white/70">Создаем интерактивные 360° туры и веб-приложения</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/30 hover:border-white/60 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <Icon name="Sparkles" size={48} className="text-white mx-auto mb-4 animate-float" />
                  <h3 className="text-2xl font-bold text-white mb-3">Медиа-контент</h3>
                  <p className="text-white/70">Профессиональная съемка и создание визуального контента</p>
                </CardContent>
              </Card>
            </div>

            {/* Stats Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 animate-fade-in">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="animate-pulse-cosmic">
                  <div className="text-4xl font-bold text-gorkhon-blue mb-2">50+</div>
                  <div className="text-white/70">Проектов</div>
                </div>
                <div className="animate-pulse-cosmic">
                  <div className="text-4xl font-bold text-gorkhon-pink mb-2">1000+</div>
                  <div className="text-white/70">Фотографий</div>
                </div>
                <div className="animate-pulse-cosmic">
                  <div className="text-4xl font-bold text-white mb-2">5</div>
                  <div className="text-white/70">Участников</div>
                </div>
                <div className="animate-pulse-cosmic">
                  <div className="text-4xl font-bold text-gorkhon-blue mb-2">2024</div>
                  <div className="text-white/70">Год основания</div>
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
                <blockquote className="text-3xl font-light text-white mb-8 leading-relaxed">
                  "Наша команда создана для того, чтобы показать красоту и уникальность поселка Горхон через современные медиа-технологии. 
                  Мы верим, что каждый момент достоин быть запечатленным и сохраненным для будущих поколений."
                </blockquote>
                <cite className="text-xl text-gorkhon-blue font-semibold">
                  — Руководитель команды "Горхон"
                </cite>
              </div>
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
                <h2 className="text-4xl font-bold text-white mb-6">Наша история</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  Медиа команда "Горхон" была создана в 2024 году группой энтузиастов из поселка Горхон. 
                  Мы объединились с целью сохранить историю нашего родного места и создать современную цифровую платформу 
                  для жителей поселка.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  Наша команда состоит из фотографов, веб-разработчиков и контент-мейкеров, которые работают над созданием 
                  качественного визуального контента. Мы специализируемся на фотопроектах, веб-разработке и создании 
                  интерактивных медиа-решений.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  Каждый проект для нас — это возможность рассказать уникальную историю нашего поселка и его жителей.
                </p>
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6 animate-float">Наши проекты</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Каждый проект создается с любовью к родному поселку и стремлением сохранить его историю для будущих поколений
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Photo Project */}
              <Card className="bg-white/10 backdrop-blur-md border-gorkhon-pink/30 hover:border-gorkhon-pink/60 transition-all duration-300 group">
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
                      <h3 className="text-2xl font-bold text-white">По волнам школьной памяти</h3>
                    </div>
                    <p className="text-white/80 mb-6 leading-relaxed">
                      Фотопроект, посвященный сохранению школьных воспоминаний учеников и выпускников Горхонской школы. 
                      Мы собираем и оцифровываем архивные фотографии, создавая цифровую летопись образования в поселке.
                    </p>
                    <div className="flex gap-2 flex-wrap mb-6">
                      <span className="px-3 py-1 bg-gorkhon-pink/20 text-gorkhon-pink rounded-full text-sm">Фотография</span>
                      <span className="px-3 py-1 bg-gorkhon-pink/20 text-gorkhon-pink rounded-full text-sm">Архив</span>
                      <span className="px-3 py-1 bg-gorkhon-pink/20 text-gorkhon-pink rounded-full text-sm">Школа</span>
                    </div>
                    <Button className="w-full bg-gorkhon-pink hover:bg-gorkhon-pink/80 text-white">
                      <Icon name="ExternalLink" className="mr-2" />
                      Посмотреть проект
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Web Project */}
              <Card className="bg-white/10 backdrop-blur-md border-gorkhon-blue/30 hover:border-gorkhon-blue/60 transition-all duration-300 group">
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
                      <h3 className="text-2xl font-bold text-white">Горхон.Online 360°</h3>
                    </div>
                    <p className="text-white/80 mb-6 leading-relaxed">
                      Интерактивное веб-приложение, позволяющее совершить виртуальную экскурсию по поселку Горхон. 
                      360-градусные панорамы, интерактивные точки интереса и мультимедийный контент о истории места.
                    </p>
                    <div className="flex gap-2 flex-wrap mb-6">
                      <span className="px-3 py-1 bg-gorkhon-blue/20 text-gorkhon-blue rounded-full text-sm">Веб-разработка</span>
                      <span className="px-3 py-1 bg-gorkhon-blue/20 text-gorkhon-blue rounded-full text-sm">360°</span>
                      <span className="px-3 py-1 bg-gorkhon-blue/20 text-gorkhon-blue rounded-full text-sm">Интерактив</span>
                    </div>
                    <Button className="w-full bg-gorkhon-blue hover:bg-gorkhon-blue/80 text-white">
                      <Icon name="ExternalLink" className="mr-2" />
                      Открыть приложение
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Coming Soon */}
            <div className="text-center py-16 bg-white/5 backdrop-blur-sm rounded-3xl">
              <Icon name="Plus" size={64} className="text-white/50 mx-auto mb-6 animate-pulse-cosmic" />
              <h3 className="text-3xl font-bold text-white mb-4">Скоро новые проекты</h3>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
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
      className="min-h-screen flex"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/files/19f8bf13-f0aa-4651-a3e8-3668b6873538.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Sidebar */}
      <div className="relative z-10 w-80 bg-black/60 backdrop-blur-md border-r border-white/20 flex flex-col animate-slide-in-left">
        {/* Logo */}
        <div className="p-8 text-center border-b border-white/20">
          <img 
            src="https://cdn.poehali.dev/files/9f822a76-1fb6-4f65-a7a4-04014aa486cf.png" 
            alt="Логотип Горхон" 
            className="w-32 h-auto mx-auto mb-4 animate-float"
          />
          <h1 className="text-2xl font-bold text-white">ГОРХОН</h1>
          <p className="text-sm text-white/70 mt-2">Медиа команда</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6">
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                    activeSection === item.id
                      ? 'bg-gorkhon-blue text-white shadow-lg shadow-gorkhon-blue/25'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon name={item.icon} size={24} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-white/20">
          <div className="text-center text-white/50 text-sm">
            <p>© 2024 Медиа команда Горхон</p>
            <div className="flex justify-center gap-4 mt-4">
              <Icon name="Mail" size={20} className="hover:text-gorkhon-blue cursor-pointer transition-colors" />
              <Icon name="Phone" size={20} className="hover:text-gorkhon-pink cursor-pointer transition-colors" />
              <Icon name="MapPin" size={20} className="hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 overflow-y-auto">
        <div className="p-12">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Index;