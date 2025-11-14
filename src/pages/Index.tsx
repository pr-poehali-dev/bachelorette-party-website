import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Icon from '@/components/ui/icon'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Index() {
  const meetingDates = [
    { date: '28.10.2025 18:00', display: '28 октября 2025, 18:00', spots: 4 },
    { date: '05.12.2025 18:00', display: '5 декабря 2025, 18:00', spots: 7 },
    { date: '12.12.2025 18:00', display: '12 декабря 2025, 18:00', spots: 8 },
    { date: '19.12.2025 18:00', display: '19 декабря 2025, 18:00', spots: 10 }
  ]

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    participants: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Спасибо! Мы свяжемся с вами в течение часа')
  }

  const scrollToBooking = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground py-20 px-4 md:px-8 lg:py-32 animate-fade-in relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 animate-bounce-subtle">
                <p className="text-sm font-semibold">✨ Открытый и безопасный круг</p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-left">
                ЭРОС. То, что тебя касается.
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-95 animate-slide-left stagger-1">
                Пространство женского круга, где честно и простым языком рассказывают
про чувственный уход, мягкие практики и современные инструменты для интимной близости.
Без стеснения, без табу — только то, что действительно работает
и касается именно тебя.
              </p>
              <div className="relative inline-block animate-slide-left stagger-2">
                <div className="absolute inset-0 bg-white blur-xl opacity-50"></div>
                <Button 
                  size="lg" 
                  onClick={scrollToBooking}
                  className="relative bg-white hover:bg-white/90 text-primary font-bold px-10 py-7 text-xl shadow-2xl hover-lift"
                >
                  💕 Записаться сейчас
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-right stagger-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/30 to-accent/30 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/projects/5c77938f-76ab-4d06-a204-320d9ed46d8b/files/64f8ca89-ea73-429b-8539-4965bb27a223.jpg"
                alt="Девичник"
                className="relative rounded-2xl shadow-2xl hover-lift border-4 border-white/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Women Need Section */}
      <section id="needs" className="py-20 px-4 md:px-8 bg-gradient-to-b from-secondary/20 via-accent/5 to-secondary/20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,63,94,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,105,180,0.1),transparent_50%)]"></div>
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-6">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-accent to-primary text-white rounded-full text-sm font-bold shadow-lg animate-bounce-subtle">
              ⭐ Главное о женской природе
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-primary animate-fade-in">
            В ЧЁМ НА САМОМ ДЕЛЕ НУЖДАЕТСЯ ЖЕНЩИНА
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-white to-secondary/5 rounded-3xl p-8 md:p-10 shadow-xl hover-lift hover-rotate border border-secondary/20 animate-slide-left stagger-1 group cursor-pointer transition-all">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto shadow-lg heart-beat">
                <Icon name="Heart" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 text-center group-hover:scale-110 transition-transform">
                Честность и понятность
              </h3>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center">
                Женщине важно пространство, где можно говорить открыто —
                без неловкости, давления и сложных терминов.
                Где объясняют простым языком: про телесный отклик, чувственный уход
                и современные аксессуары для удовольствия.
              </p>
              <div className="mt-6 text-center">
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                  Узнать больше <Icon name="ArrowRight" size={18} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-accent/5 rounded-3xl p-8 md:p-10 shadow-xl hover-lift hover-rotate border border-accent/20 animate-slide-right stagger-2 group cursor-pointer transition-all">
              <div className="bg-gradient-to-br from-accent to-accent/80 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto shadow-lg float-animation">
                <Icon name="Flower2" size={32} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 text-center group-hover:scale-110 transition-transform">
                Практика и ощущения
              </h3>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center">
                Как повысить чувствительность, как применять уходовые продукты,
                как безопасно использовать девайсы для интимных практик.
                Поддержка женского круга, где понимают и не осуждают.
              </p>
              <div className="mt-6 text-center">
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                  Узнать больше <Icon name="ArrowRight" size={18} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-secondary/40 mb-12 hover-lift animate-fade-in stagger-3">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="MessageSquareQuote" size={24} className="text-primary" />
              </div>
              <p className="text-lg md:text-xl text-foreground leading-relaxed italic font-medium">
                Хотелось не посиделок и пустых разговоров,
                а честных знаний про тело, уход и удовольствие.
                И места, где можно спросить всё — без неловкости.
              </p>
            </div>
            
            <div className="flex items-center gap-3 ml-16">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center font-bold text-primary-foreground shadow-md">
                О
              </div>
              <p className="text-base font-semibold text-primary">
                Ольга, 30 лет
              </p>
            </div>
          </div>

          <div className="text-center animate-slide-up stagger-3">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary blur-2xl opacity-40 animate-pulse"></div>
              <Button 
                size="lg" 
                onClick={scrollToBooking}
                className="relative bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] hover:bg-right text-primary-foreground font-bold px-14 py-8 text-xl shadow-2xl hover-lift pulse-glow transition-all duration-500"
              >
                💖 Присоединиться к кругу ЭРОС
              </Button>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-accent/20 to-primary/20 px-6 py-3 rounded-full border-2 border-accent/30 bounce-subtle">
              <Icon name="Sparkles" size={18} className="text-accent" />
              <p className="text-sm font-bold text-primary">
                Только 4 места! Успей записаться
              </p>
              <Icon name="Sparkles" size={18} className="text-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 px-4 md:px-8 animate-fade-in relative overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl float-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl float-animation" style={{animationDelay: '0.5s'}}></div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-primary">
            Что происходит в женском круге ЭРОС
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover-lift hover-scale group cursor-pointer border-2 border-transparent hover:border-primary/30 transition-all">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                  <Icon name="Lock" size={28} className="text-primary wiggle" />
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">Безопасное пространство</h3>
                <p className="text-muted-foreground">
                  Только женщины, только доверие. Закрытая группа 5-10 человек, где можно говорить обо всём без страха осуждения
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift hover-scale group cursor-pointer border-2 border-transparent hover:border-accent/30 transition-all">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                  <Icon name="Gamepad2" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors">Живой разговор</h3>
                <p className="text-muted-foreground">
                  Через игру и практики узнаёте о своём теле, желаниях и границах. Без лекций — через опыт и диалог
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift hover-scale group cursor-pointer border-2 border-transparent hover:border-primary/30 transition-all">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                  <Icon name="UserCheck" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">Эксперты без пафоса</h3>
                <p className="text-muted-foreground">
                  Ведущие круга — специалисты по телесным практикам и интимному здоровью. Говорят просто, по-человечески
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift hover-scale group cursor-pointer border-2 border-transparent hover:border-accent/30 transition-all">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                  <Icon name="Wine" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors">Атмосфера заботы</h3>
                <p className="text-muted-foreground">
                  Чай, лёгкий фуршет, мягкий свет. Пространство, где можно расслабиться и быть собой
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift hover-scale group cursor-pointer border-2 border-transparent hover:border-primary/30 transition-all">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                  <Icon name="Gift" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">Подарки для себя</h3>
                <p className="text-muted-foreground">
                  Каждая получает набор для домашнего ухода, гайды по практикам и доступ к закрытому чату поддержки
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift hover-scale group cursor-pointer border-2 border-transparent hover:border-accent/30 transition-all glow-border">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform rotate-slow">
                  <Icon name="Percent" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors">Скидка 15%</h3>
                <p className="text-muted-foreground">
                  На все инструменты для практик в день встречи и неделю после
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Dates Section */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 mb-12 border-2 border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Icon name="Calendar" size={32} className="text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Даты встреч</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {meetingDates.map((meeting, index) => (
                <div key={meeting.date} className={`bg-white/50 backdrop-blur-sm rounded-xl p-5 hover-lift hover-scale border-2 border-transparent ${index % 2 === 0 ? 'hover:border-primary/30' : 'hover:border-accent/30'} transition-all group relative overflow-hidden`}>
                  {meeting.spots <= 4 && (
                    <div className="absolute top-2 right-2">
                      <span className="bg-accent text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                        🔥 Мало мест!
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-primary/20 to-accent/20' : 'from-accent/20 to-primary/20'} rounded-full w-14 h-14 flex items-center justify-center group-hover:rotate-12 transition-transform`}>
                      <span className="text-2xl">📅</span>
                    </div>
                    <div className="text-left flex-1">
                      <p className="text-xl font-bold text-primary">{meeting.display.split(' 2025')[0]}</p>
                      <p className="text-muted-foreground">18:00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <Icon name="Users" size={16} className="text-primary" />
                    <span className="text-sm font-semibold text-primary">
                      Осталось {meeting.spots} {meeting.spots === 1 ? 'место' : meeting.spots < 5 ? 'места' : 'мест'}
                    </span>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {[...Array(10)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-3 h-3 rounded-full ${i < 10 - meeting.spots ? 'bg-primary' : 'bg-gray-200'}`}
                        title={i < 10 - meeting.spots ? 'Занято' : 'Свободно'}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 border-2 border-accent rounded-2xl p-8 text-center hover-lift pulse-glow relative overflow-hidden">
            <div className="absolute inset-0 shimmer"></div>
            <div className="relative">
              <div className="inline-block mb-3">
                <span className="text-4xl">🎁</span>
              </div>
              <p className="text-3xl font-bold mb-4 text-primary">Вклад: 1200₽ с человека</p>
              <p className="text-muted-foreground mb-6 text-lg">Участие в круге, набор для практик, чай, доступ к чату поддержки и скидка 15%</p>
              <Button 
                size="lg" 
                onClick={scrollToBooking}
                className="bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-white font-bold px-12 py-6 text-xl shadow-2xl hover-lift transition-all duration-300"
              >
                ✨ Записаться — осталось 4 места
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-4 md:px-8 bg-muted/30 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Голоса из круга
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover-lift hover-scale">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Пришла с волнением, а ушла с поддержкой и вдохновением"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://cdn.poehali.dev/projects/5c77938f-76ab-4d06-a204-320d9ed46d8b/files/fa5c954f-725b-41ec-b542-133620369773.jpg"
                    alt="Мария"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Мария</p>
                    <p className="text-sm text-muted-foreground">29 лет</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift hover-scale">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Получила ответы, которые не могла задать годами"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://cdn.poehali.dev/projects/5c77938f-76ab-4d06-a204-320d9ed46d8b/files/78e16b3a-7760-45ef-81bb-b6984e366830.jpg"
                    alt="Светлана"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Светлана</p>
                    <p className="text-sm text-muted-foreground">42 года</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift hover-scale">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "С подругой вышли обновлённые и довольные"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://cdn.poehali.dev/projects/5c77938f-76ab-4d06-a204-320d9ed46d8b/files/c57dea1d-ea93-48a8-8955-d8ccdead607a.jpg"
                    alt="Анастасия"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Анастасия</p>
                    <p className="text-sm text-muted-foreground">31 год</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift hover-scale">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Впервые в жизни почувствовала себя услышанной и понятой"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://cdn.poehali.dev/projects/5c77938f-76ab-4d06-a204-320d9ed46d8b/files/21e2db08-9e13-4970-be8f-2ef0342b2895.jpg"
                    alt="Екатерина"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Екатерина</p>
                    <p className="text-sm text-muted-foreground">35 лет</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift hover-scale">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Легко, без давления. Узнала столько нового о себе за один вечер!"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://cdn.poehali.dev/projects/5c77938f-76ab-4d06-a204-320d9ed46d8b/files/379be7cc-d934-4c71-94b1-df9c3d2696c0.jpg"
                    alt="Юлия"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Юлия</p>
                    <p className="text-sm text-muted-foreground">27 лет</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift hover-scale">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "После круга начала относиться к себе с заботой и любовью"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://cdn.poehali.dev/projects/5c77938f-76ab-4d06-a204-320d9ed46d8b/files/6a39a46d-8180-4077-b245-eeab3612a870.jpg"
                    alt="Ирина"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Ирина</p>
                    <p className="text-sm text-muted-foreground">38 лет</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">43</p>
              <p className="text-muted-foreground">Встречи женского круга</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">340+</p>
              <p className="text-muted-foreground">Женщин прошли круг</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">4.9</p>
              <p className="text-muted-foreground">Средний рейтинг из 5</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section id="guarantees" className="py-16 px-4 md:px-8 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Ценности круга ЭРОС
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-primary/20 hover-lift">
              <CardContent className="pt-6 text-center">
                <Icon name="Lock" size={40} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Полная приватность</h3>
                <p className="text-sm text-muted-foreground">
                  Что происходит в круге — остаётся в круге
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover-lift">
              <CardContent className="pt-6 text-center">
                <Icon name="BadgeCheck" size={40} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Без осуждения</h3>
                <p className="text-sm text-muted-foreground">
                  Любой вопрос — нормальный вопрос
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover-lift">
              <CardContent className="pt-6 text-center">
                <Icon name="Handshake" size={40} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Никаких продаж</h3>
                <p className="text-sm text-muted-foreground">
                  Только знания и практический опыт
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover-lift">
              <CardContent className="pt-6 text-center">
                <Icon name="Heart" size={40} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Бережное отношение</h3>
                <p className="text-sm text-muted-foreground">
                  К вашему темпу, границам и опыту
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4 md:px-8 bg-muted/30 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Часто задаваемые вопросы
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Кто может участвовать?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Только женщины 18+
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Можно прийти одной?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, большинство приходят без компании
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Есть ли скидки?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Вдвоём 10%, втроём 20%
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Будут ли мужчины?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет, только женщины и эксперт
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Нужно ли что-то покупать?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет, но только в день встречи действует скидка 10%
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Это откровенно?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Формат корректный и профессиональный
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Можно подарить участие?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, сертификат или бронирование
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Что если стесняюсь?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Можно слушать и постепенно включаться
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-16 px-4 md:px-8 bg-primary text-primary-foreground animate-fade-in">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Запись в круг
            </h2>
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
              <Icon name="Clock" size={20} />
              Осталось 4 места на ближайшую встречу
            </div>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input 
                    id="name"
                    placeholder="Введите ваше имя"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Номер телефона *</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email (опционально)</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="ваш@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="date">Выберите дату встречи *</Label>
                  <select
                    id="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Выберите дату</option>
                    {meetingDates.map((meeting) => (
                      <option key={meeting.date} value={meeting.date}>
                        {meeting.display} - осталось {meeting.spots} {meeting.spots === 1 ? 'место' : meeting.spots < 5 ? 'места' : 'мест'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="participants">Приду одна / с подругами (укажите количество) *</Label>
                  <Input 
                    id="participants"
                    type="number"
                    min="1"
                    max="10"
                    placeholder="1"
                    required
                    value={formData.participants}
                    onChange={(e) => setFormData({...formData, participants: e.target.value})}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Вопрос или комментарий</Label>
                  <Textarea 
                    id="message"
                    placeholder="Напишите ваш вопрос..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="mt-2"
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Записаться в круг
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-sm opacity-80">
                <p>г. Омск, ул. Маршала Жукова, 77</p>
                <p>+7 (965) 973 40 47</p>
                <p>info@eros55.ru</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Следите за нами</h3>
              <div className="flex gap-4">
                <Icon name="Instagram" size={24} className="cursor-pointer hover:opacity-70" />
                <Icon name="Facebook" size={24} className="cursor-pointer hover:opacity-70" />
                <Icon name="MessageCircle" size={24} className="cursor-pointer hover:opacity-70" />
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Информация</h3>
              <div className="space-y-2 text-sm opacity-80">
                <p className="cursor-pointer hover:opacity-70">Политика конфиденциальности</p>
                <p className="cursor-pointer hover:opacity-70">Отзывы участниц</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-60">
            © 2025. ЭРОС — Женский круг. Приватность и уважение гарантированы.
          </div>
        </div>
      </footer>
    </div>
  )
}