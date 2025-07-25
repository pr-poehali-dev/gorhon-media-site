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
          <div className="space-y-8 sm:space-y-16">
            {/* Hero Section */}
            <div className="relative text-center py-8 sm:py-20">
              <div className="relative z-10">
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-unbounded font-black text-white mb-4 sm:mb-8 tracking-wider">
                  МЕДИА КОМАНДА
                  <span className="block text-4xl sm:text-6xl lg:text-8xl bg-gradient-to-r from-gorkhon-blue to-gorkhon-pink bg-clip-text text-transparent mt-2 sm:mt-4">
                    ГОРХОН
                  </span>
                </h1>
                <p className="text-sm sm:text-lg lg:text-xl font-unbounded font-light text-white/90 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
                  Мы создаем визуальные истории поселка Горхон через фотографию, веб-технологии и медиа-проекты. 
                  Наша миссия — сохранить память и создать цифровое будущее нашего родного места.
                </p>
              </div>
            </div>

            {/* Features Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 px-4">
              <Card className="bg-white/20 backdrop-blur-lg border-gorkhon-blue/50 hover:border-gorkhon-blue transition-all duration-300 shadow-xl">
                <CardContent className="p-6 sm:p-10 text-center">
                  <Icon name="Camera" size={40} className="text-gorkhon-blue mx-auto mb-4 sm:mb-6" />
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-unbounded font-bold text-white mb-2 sm:mb-4">Фотопроекты</h3>
                  <p className="text-white/80 font-unbounded font-light text-sm sm:text-lg leading-relaxed">Сохраняем школьные воспоминания и моменты жизни поселка</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/20 backdrop-blur-lg border-gorkhon-pink/50 hover:border-gorkhon-pink transition-all duration-300 shadow-xl">
                <CardContent className="p-6 sm:p-10 text-center">
                  <Icon name="Globe" size={40} className="text-gorkhon-pink mx-auto mb-4 sm:mb-6" />
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-unbounded font-bold text-white mb-2 sm:mb-4">Веб-разработка</h3>
                  <p className="text-white/80 font-unbounded font-light text-sm sm:text-lg leading-relaxed">Создаем интерактивные 360° туры и веб-приложения</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/20 backdrop-blur-lg border-white/50 hover:border-white transition-all duration-300 shadow-xl sm:col-span-2 lg:col-span-1">
                <CardContent className="p-6 sm:p-10 text-center">
                  <Icon name="Sparkles" size={40} className="text-white mx-auto mb-4 sm:mb-6" />
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-unbounded font-bold text-white mb-2 sm:mb-4">Медиа-контент</h3>
                  <p className="text-white/80 font-unbounded font-light text-sm sm:text-lg leading-relaxed">Профессиональная съемка и создание визуального контента</p>
                </CardContent>
              </Card>
            </div>

            {/* Stats Section */}
            <div className="bg-white/25 backdrop-blur-lg rounded-3xl p-6 sm:p-16 shadow-2xl border border-white/30 mx-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 text-center">
                <div>
                  <div className="text-3xl sm:text-5xl lg:text-6xl font-unbounded font-black text-gorkhon-blue mb-2 sm:mb-4">50+</div>
                  <div className="text-white font-unbounded font-medium text-sm sm:text-lg">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-5xl lg:text-6xl font-unbounded font-black text-gorkhon-pink mb-2 sm:mb-4">1000+</div>
                  <div className="text-white font-unbounded font-medium text-sm sm:text-lg">Фотографий</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-5xl lg:text-6xl font-unbounded font-black text-white mb-2 sm:mb-4">5</div>
                  <div className="text-white font-unbounded font-medium text-sm sm:text-lg">Участников</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-5xl lg:text-6xl font-unbounded font-black text-gorkhon-blue mb-2 sm:mb-4">2024</div>
                  <div className="text-white font-unbounded font-medium text-sm sm:text-lg">Год основания</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-6 sm:space-y-12 px-4">
            {/* Quote Section */}
            <div className="text-center py-8 sm:py-16">
              <div className="max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto">
                <Icon name="Quote" size={40} className="text-gorkhon-pink mx-auto mb-4 sm:mb-8" />
                <blockquote className="text-lg sm:text-2xl lg:text-3xl font-light text-white mb-4 sm:mb-8 leading-relaxed">
                  "Наша команда создана для того, чтобы показать красоту и уникальность поселка Горхон через современные медиа-технологии. 
                  Мы верим, что каждый момент достоин быть запечатленным и сохраненным для будущих поколений."
                </blockquote>
                <cite className="text-sm sm:text-lg lg:text-xl text-gorkhon-blue font-semibold">
                  — Руководитель команды "Горхон"
                </cite>
              </div>
            </div>

            {/* Team Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">Наша история</h2>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-white/80 text-sm sm:text-lg leading-relaxed">
                    Медиа команда "Горхон" была создана в 2024 году группой энтузиастов из поселка Горхон. 
                    Мы объединились с целью сохранить историю нашего родного места и создать современную цифровую платформу 
                    для жителей поселка.
                  </p>
                  <p className="text-white/80 text-sm sm:text-lg leading-relaxed">
                    Наша команда состоит из фотографов, веб-разработчиков и контент-мейкеров, которые работают над созданием 
                    качественного визуального контента. Мы специализируемся на фотопроектах, веб-разработке и создании 
                    интерактивных медиа-решений.
                  </p>
                  <p className="text-white/80 text-sm sm:text-lg leading-relaxed">
                    Каждый проект для нас — это возможность рассказать уникальную историю нашего поселка и его жителей.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-6 sm:space-y-12 px-4">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Наши проекты</h2>
              <p className="text-sm sm:text-lg lg:text-xl text-white/80 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto">
                Каждый проект создается с любовью к родному поселку и стремлением сохранить его историю для будущих поколений
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
              {/* Photo Project */}
              <Card className="bg-white/10 backdrop-blur-md border-gorkhon-pink/30 hover:border-gorkhon-pink/60 transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/17de283f-d109-455c-b2ef-0395533265c4.png" 
                      alt="По волнам школьной памяти" 
                      className="w-full h-48 sm:h-64 object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon name="Camera" className="text-gorkhon-pink" />
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">По волнам школьной памяти</h3>
                    </div>
                    <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                      Фотопроект, посвященный сохранению школьных воспоминаний учеников и выпускников Горхонской школы. 
                      Мы собираем и оцифровываем архивные фотографии, создавая цифровую летопись образования в поселке.
                    </p>
                    <div className="flex gap-2 flex-wrap mb-4 sm:mb-6">
                      <span className="px-2 sm:px-3 py-1 bg-gorkhon-pink/20 text-gorkhon-pink rounded-full text-xs sm:text-sm">Фотография</span>
                      <span className="px-2 sm:px-3 py-1 bg-gorkhon-pink/20 text-gorkhon-pink rounded-full text-xs sm:text-sm">Архив</span>
                      <span className="px-2 sm:px-3 py-1 bg-gorkhon-pink/20 text-gorkhon-pink rounded-full text-xs sm:text-sm">Школа</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Web Project */}
              <Card className="bg-white/10 backdrop-blur-md border-gorkhon-blue/30 hover:border-gorkhon-blue/60 transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/a174e095-7a50-4347-9333-35a023d11051.png" 
                      alt="Горхон.Online 360°" 
                      className="w-full h-48 sm:h-64 object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon name="Globe" className="text-gorkhon-blue" />
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Горхон.Online 360°</h3>
                    </div>
                    <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                      Интерактивное веб-приложение, позволяющее совершить виртуальную экскурсию по поселку Горхон. 
                      360-градусные панорамы, интерактивные точки интереса и мультимедийный контент о истории места.
                    </p>
                    <div className="flex gap-2 flex-wrap mb-4 sm:mb-6">
                      <span className="px-2 sm:px-3 py-1 bg-gorkhon-blue/20 text-gorkhon-blue rounded-full text-xs sm:text-sm">Веб-разработка</span>
                      <span className="px-2 sm:px-3 py-1 bg-gorkhon-blue/20 text-gorkhon-blue rounded-full text-xs sm:text-sm">360°</span>
                      <span className="px-2 sm:px-3 py-1 bg-gorkhon-blue/20 text-gorkhon-blue rounded-full text-xs sm:text-sm">Интерактив</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Coming Soon */}
            <div className="text-center py-8 sm:py-16 bg-white/5 backdrop-blur-sm rounded-3xl">
              <Icon name="Plus" size={40} className="text-white/50 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-4">Скоро новые проекты</h3>
              <p className="text-white/70 text-sm sm:text-lg max-w-xs sm:max-w-xl lg:max-w-2xl mx-auto">
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
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20">
        <img 
          src="https://cdn.poehali.dev/files/9f822a76-1fb6-4f65-a7a4-04014aa486cf.png" 
          alt="Логотип Горхон" 
          className="w-12 sm:w-16 h-auto"
        />
      </div>

      {/* Mobile Menu */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20 sm:hidden">
        <nav className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2 shadow-lg">
          <ul className="flex gap-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-white/20 shadow-lg'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <Icon name={item.icon} size={20} className="text-white" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:fixed sm:left-8 sm:top-1/2 sm:-translate-y-1/2 sm:z-20 sm:block">
        <nav className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 shadow-lg">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`p-4 rounded-full transition-all duration-300 ${
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
        <div className="px-4 py-6 sm:pl-32 sm:pr-12 sm:py-12 pb-20 sm:pb-12">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Index;