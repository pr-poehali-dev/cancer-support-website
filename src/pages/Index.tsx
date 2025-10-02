import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const episodes = [
  {
    id: 1,
    title: 'Начало',
    subtitle: 'Когда всё изменилось',
    description: 'Обычный день. Обычная жизнь. Планы на будущее, мечты, надежды... И вдруг — всё останавливается. Один момент, который делит жизнь на "до" и "после".',
    fullText: 'Мне было 28. Я только начала строить карьеру, планировала путешествия, встречалась с друзьями. Жизнь была полна красок и возможностей.\n\nТот день начался как обычно — с чашки кофе и списка дел. Я даже не подозревала, что к вечеру моя жизнь изменится навсегда.\n\nПервый звонок от врача. Слова, которые не хочется слышать. Диагноз, который превращает мир в чёрно-белое кино. Онкология.\n\nЯ помню, как сидела в кабинете и смотрела в окно. Там люди шли по своим делам, смеялись, торопились. А я словно застыла во времени.',
    icon: 'Sparkles',
    color: 'from-pink-200 to-blue-200',
    image: '/img/824d0363-4b7a-4255-8665-1149be8b0120.jpg'
  },
  {
    id: 2,
    title: 'Диагноз',
    subtitle: 'Первые трудности',
    description: 'Анализы, консультации, медицинские термины. Страх перед неизвестностью. Как сказать близким? Как не сломаться?',
    fullText: 'Первые дни после диагноза — это туман. Я пыталась понять медицинские термины, запоминала названия процедур, искала информацию в интернете до глубокой ночи.\n\nСамым сложным было сказать маме. Я видела, как её глаза наполнились слезами, но она сразу взяла себя в руки: "Мы справимся. Вместе".\n\nНачались обследования. Больницы стали моим вторым домом. Длинные коридоры, запах антисептика, белые халаты врачей. Каждый день — новые анализы, новые врачи, новые решения.\n\nЯ потеряла вес, потеряла волосы, потеряла привычный образ жизни. Но я не потеряла себя. Где-то глубоко внутри жила надежда.',
    icon: 'Heart',
    color: 'from-blue-200 to-purple-200',
    image: '/img/15674382-329f-4448-90e4-a925893a0bd4.jpg'
  },
  {
    id: 3,
    title: 'Поддержка',
    subtitle: 'Путь к принятию',
    description: 'Я нашла тех, кто понимает. Группы поддержки, истории других людей, новые друзья. Оказалось, я не одна.',
    fullText: 'Перелом наступил, когда я впервые пришла в группу поддержки. Там я встретила людей, которые проходят через то же самое.\n\nМы делились страхами и победами. Смеялись и плакали вместе. Они научили меня, что болезнь — это не приговор, а испытание. Трудное, но преодолимое.\n\nЯ начала вести дневник. Писала о своих чувствах, о том, что замечаю красоту в мелочах — в утреннем солнце, в улыбке медсестры, в звонке подруги.\n\nПостепенно я приняла своё состояние. Не смирилась — приняла. Это разные вещи. Принятие дало мне силы бороться по-настоящему.',
    icon: 'Users',
    color: 'from-purple-200 to-green-200',
    image: '/img/28f6e048-963d-4334-89b6-a72e03948c5f.jpg'
  },
  {
    id: 4,
    title: 'Победа',
    subtitle: 'Возвращение к жизни',
    description: 'Я победила страх. Я снова живу. Каждый день — это подарок, каждый момент — ценность.',
    fullText: 'Слово "ремиссия" звучало как музыка. Врач улыбнулся мне впервые за все эти месяцы. Я плакала от счастья.\n\nНо победа — это не только про анализы. Это про то, что я научилась ценить жизнь по-настоящему.\n\nТеперь я просыпаюсь и благодарю за новый день. Я обнимаю близких чуть дольше. Я не откладываю на потом то, что важно.\n\nМоя история — это не история о болезни. Это история о том, как я нашла в себе силы, которых не знала. О том, как поддержка близких и незнакомых людей может творить чудеса.\n\nЕсли ты читаешь это и проходишь через что-то подобное — знай: ты сильнее, чем думаешь. И ты не один. Мы вместе.',
    icon: 'Sun',
    color: 'from-green-200 to-yellow-200',
    image: '/img/15674382-329f-4448-90e4-a925893a0bd4.jpg'
  }
];

export default function Index() {
  const [activeEpisode, setActiveEpisode] = useState<number | null>(null);
  const [currentEpisode, setCurrentEpisode] = useState(0);

  const openEpisode = (id: number) => {
    setActiveEpisode(id);
  };

  const closeEpisode = () => {
    setActiveEpisode(null);
  };

  const nextEpisode = () => {
    if (currentEpisode < episodes.length - 1) {
      setCurrentEpisode(currentEpisode + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevEpisode = () => {
    if (currentEpisode > 0) {
      setCurrentEpisode(currentEpisode - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-12 md:mb-20 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <Icon name="Heart" size={40} className="text-white" />
            </div>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            История надежды
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Путь одной девушки через испытание к новой жизни
          </p>
        </header>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-12 animate-scale-in">
            <div className="flex items-center justify-between mb-8">
              <Button
                variant="ghost"
                onClick={prevEpisode}
                disabled={currentEpisode === 0}
                className="hover:bg-primary/10"
              >
                <Icon name="ChevronLeft" size={24} />
                <span className="ml-2 hidden md:inline">Предыдущий</span>
              </Button>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Эпизод {currentEpisode + 1} из {episodes.length}</p>
                <div className="flex gap-2 justify-center">
                  {episodes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentEpisode(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentEpisode 
                          ? 'bg-primary w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <Button
                variant="ghost"
                onClick={nextEpisode}
                disabled={currentEpisode === episodes.length - 1}
                className="hover:bg-primary/10"
              >
                <span className="mr-2 hidden md:inline">Следующий</span>
                <Icon name="ChevronRight" size={24} />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 animate-slide-up">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${episodes[currentEpisode].color} mb-4`}>
                  <Icon name={episodes[currentEpisode].icon} size={20} className="text-primary-foreground" />
                  <span className="text-sm font-medium text-primary-foreground">Эпизод {currentEpisode + 1}</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 text-foreground">
                  {episodes[currentEpisode].title}
                </h2>
                <p className="text-xl text-muted-foreground mb-4">
                  {episodes[currentEpisode].subtitle}
                </p>
                <p className="text-base text-foreground/80 mb-6 leading-relaxed">
                  {episodes[currentEpisode].description}
                </p>
                <Button 
                  onClick={() => openEpisode(episodes[currentEpisode].id)}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Читать полностью
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square">
                  <img 
                    src={episodes[currentEpisode].image} 
                    alt={episodes[currentEpisode].title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${episodes[currentEpisode].color} opacity-20`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-8 text-foreground">
            Все эпизоды
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {episodes.map((episode, index) => (
              <Card 
                key={episode.id}
                className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 bg-white/90 backdrop-blur-sm overflow-hidden"
                onClick={() => {
                  setCurrentEpisode(index);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${episode.color}`}></div>
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${episode.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={episode.icon} size={24} className="text-primary-foreground" />
                  </div>
                  <h4 className="font-heading text-xl font-semibold mb-2 text-foreground">
                    {episode.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {episode.subtitle}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium"
                    onClick={(e) => {
                      e.stopPropagation();
                      openEpisode(episode.id);
                    }}
                  >
                    Читать →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-20 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12">
            <Icon name="Heart" size={48} className="mx-auto mb-6 text-primary" />
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Вы не одни
            </h3>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Эта история — напоминание о том, что даже в самые тёмные моменты жизни есть свет. 
              Надежда, поддержка близких и вера в себя могут творить настоящие чудеса.
            </p>
          </div>
        </div>
      </div>

      {activeEpisode && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeEpisode}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center rounded-t-3xl">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  {episodes.find(e => e.id === activeEpisode)?.title}
                </h2>
                <p className="text-muted-foreground">
                  {episodes.find(e => e.id === activeEpisode)?.subtitle}
                </p>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={closeEpisode}
                className="hover:bg-gray-100 rounded-full"
              >
                <Icon name="X" size={24} />
              </Button>
            </div>
            <div className="p-6 md:p-12">
              <div className="mb-8">
                <img 
                  src={episodes.find(e => e.id === activeEpisode)?.image} 
                  alt=""
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="prose prose-lg max-w-none">
                {episodes.find(e => e.id === activeEpisode)?.fullText.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-foreground/90 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between">
                <Button 
                  variant="outline"
                  onClick={() => {
                    const currentIndex = episodes.findIndex(e => e.id === activeEpisode);
                    if (currentIndex > 0) {
                      setActiveEpisode(episodes[currentIndex - 1].id);
                      setCurrentEpisode(currentIndex - 1);
                    }
                  }}
                  disabled={episodes.findIndex(e => e.id === activeEpisode) === 0}
                  className="rounded-full"
                >
                  <Icon name="ChevronLeft" size={20} />
                  <span className="ml-2">Предыдущий</span>
                </Button>
                <Button 
                  onClick={() => {
                    const currentIndex = episodes.findIndex(e => e.id === activeEpisode);
                    if (currentIndex < episodes.length - 1) {
                      setActiveEpisode(episodes[currentIndex + 1].id);
                      setCurrentEpisode(currentIndex + 1);
                    } else {
                      closeEpisode();
                    }
                  }}
                  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full"
                >
                  <span className="mr-2">
                    {episodes.findIndex(e => e.id === activeEpisode) === episodes.length - 1 
                      ? 'Закрыть' 
                      : 'Следующий'}
                  </span>
                  <Icon name={episodes.findIndex(e => e.id === activeEpisode) === episodes.length - 1 ? "Check" : "ChevronRight"} size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
