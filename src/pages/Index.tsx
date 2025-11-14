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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
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
            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Впервые почувствовала, что можно говорить об этом вслух. Без стыда, без странных взглядов. Ушла с ощущением, что наконец-то знаю, чего хочу"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://cdn.poehali.dev/projects/5c77938f-76ab-4d06-a204-320d9ed46d8b/files/4ef30699-b07e-49e5-a128-53c9239fe1fc.jpg"
                    alt="Елена"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Елена</p>
                    <p className="text-sm text-muted-foreground">28 лет</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Думала, уже всё знаю. Но оказалось — столько лет игнорировала своё тело и желания. Круг вернул мне контакт с собой"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-primary">
                    О
                  </div>
                  <div>
                    <p className="font-semibold">Ольга</p>
                    <p className="text-sm text-muted-foreground">38 лет</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "После круга поняла: я имею право на удовольствие. Это звучит просто, но для меня стало открытием"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-primary">
                    Д
                  </div>
                  <div>
                    <p className="font-semibold">Дарья</p>
                    <p className="text-sm text-muted-foreground">32 года</p>
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
                Для кого этот круг?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Для женщин 18+, которые хотят узнать больше о своём теле, желаниях и интимности. Любой уровень знаний — от нулевого до продвинутого
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Это про продажи игрушек?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет. Мы говорим о практиках, теле и удовольствии. Инструменты — лишь дополнение, покупка не обязательна
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Будут мужчины?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет. Только женщины — и участницы, и ведущие. Это пространство для нас
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Можно прийти без подруг?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, большинство приходят одни. Круг — это место, где легко познакомиться и открыться
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Я очень стесняюсь таких тем...
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Это нормально, многие приходят с волнением. Ведущие создают атмосферу доверия, никто не заставляет говорить — только когда вы готовы
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Как часто проходят встречи?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Раз в 2-3 недели. Точные даты — при записи
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
                <p>г. Владивосток</p>
                <p>+7 (924) 555-88-33</p>
                <p>eros@circle.vl</p>
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