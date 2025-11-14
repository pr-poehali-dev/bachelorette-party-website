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
      <section className="bg-primary text-primary-foreground py-20 px-4 md:px-8 lg:py-32 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                ЭРОС. То, что тебя касается.
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Пространство женского круга, где честно и простым языком рассказывают
про чувственный уход, мягкие практики и современные инструменты для интимной близости.
Без стеснения, без табу — только то, что действительно работает
и касается именно тебя.
              </p>
              <Button 
                size="lg" 
                onClick={scrollToBooking}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
              >
                Присоединиться к кругу
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/5c77938f-76ab-4d06-a204-320d9ed46d8b/files/64f8ca89-ea73-429b-8539-4965bb27a223.jpg"
                alt="Девичник"
                className="rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Women Need Section */}
      <section id="needs" className="py-16 px-4 md:px-8 bg-muted/30 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            В ЧЁМ НА САМОМ ДЕЛЕ НУЖДАЕТСЯ ЖЕНЩИНА
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Честность и понятность
              </h3>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Женщине важно пространство, где можно говорить открыто —
                без неловкости, давления и сложных терминов.
                Где объясняют простым языком: про телесный отклик, чувственный уход
                и современные аксессуары для удовольствия.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Практика и ощущения
              </h3>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Как повысить чувствительность, как применять уходовые продукты,
                как безопасно использовать девайсы для интимных практик.
                Поддержка женского круга, где понимают и не осуждают.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic mb-6">
                «Хотелось не посиделок и пустых разговоров,
                а честных знаний про тело, уход и удовольствие.
                И места, где можно спросить всё — без неловкости.»
              </p>
              
              <p className="text-base text-muted-foreground font-medium">
                — Ольга, 30 лет
              </p>
            </div>

            <div className="mt-12 text-center">
              <Button 
                size="lg" 
                onClick={scrollToBooking}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-lg"
              >
                Присоединиться к женскому кругу ЭРОС
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Осталось 4 места на ближайшую встречу
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 px-4 md:px-8 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Что происходит в женском круге ЭРОС
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Lock" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Безопасное пространство</h3>
                <p className="text-muted-foreground">
                  Только женщины, только доверие. Закрытая группа 5-10 человек, где можно говорить обо всём без страха осуждения
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Gamepad2" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Живой разговор</h3>
                <p className="text-muted-foreground">
                  Через игру и практики узнаёте о своём теле, желаниях и границах. Без лекций — через опыт и диалог
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="UserCheck" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Эксперты без пафоса</h3>
                <p className="text-muted-foreground">
                  Ведущие круга — специалисты по телесным практикам и интимному здоровью. Говорят просто, по-человечески
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Wine" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Атмосфера заботы</h3>
                <p className="text-muted-foreground">
                  Чай, лёгкий фуршет, мягкий свет. Пространство, где можно расслабиться и быть собой
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Gift" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Подарки для себя</h3>
                <p className="text-muted-foreground">
                  Каждая получает набор для домашнего ухода, гайды по практикам и доступ к закрытому чату поддержки
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Percent" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Скидка 15%</h3>
                <p className="text-muted-foreground">
                  На все инструменты для практик в день встречи и неделю после
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-accent/10 border-2 border-accent rounded-2xl p-8 text-center">
            <p className="text-2xl font-bold mb-4">Вклад: 1200₽ с человека</p>
            <p className="text-muted-foreground mb-6">Участие в круге, набор для практик, чай, доступ к чату поддержки и скидка 15%</p>
            <Button 
              size="lg" 
              onClick={scrollToBooking}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
            >
              Записаться — осталось 4 места
            </Button>
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