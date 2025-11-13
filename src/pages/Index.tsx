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
                Девичник, о котором будут говорить месяцами
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Приватное пространство, экспертное сопровождение, игровой формат и подарки каждой участнице. Всего 2 часа — и вы по-новому посмотрите на интимную жизнь
              </p>
              <Button 
                size="lg" 
                onClick={scrollToBooking}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
              >
                Забронировать девичник сейчас
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

      {/* Pain Section */}
      <section id="pain" className="py-16 px-4 md:px-8 bg-muted/30 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Почему обычные девичники разочаровывают
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Снова кафе, снова те же разговоры… Хочется чего-то большего?
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Icon name="Coffee" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-xl mb-3">Одно и то же</h3>
                    <p className="text-muted-foreground">
                      Стандартные девичники превращаются в рутину: одно и то же кафе, поверхностные беседы, предсказуемый сценарий
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Icon name="Users" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-xl mb-3">Нет откровенности</h3>
                    <p className="text-muted-foreground">
                      Хочется сблизиться с подругами, обсудить то, о чём обычно молчат, но атмосфера не располагает
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-secondary border-none">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-start gap-6">
                <Icon name="Quote" size={48} className="text-primary flex-shrink-0 opacity-50" />
                <div>
                  <p className="text-lg italic mb-4">
                    "Мы каждый месяц собирались в одном и том же месте. В какой-то момент поняла — нам нечего обсуждать. Хотелось чего-то свежего, смелого, но не пошлого"
                  </p>
                  <p className="font-semibold text-primary">Анна, 32 года</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <div className="inline-block bg-primary/10 rounded-2xl p-8">
              <p className="text-5xl font-bold text-primary mb-2">78%</p>
              <p className="text-muted-foreground max-w-md">
                женщин признаются, что стесняются покупать интимные товары в одиночку, но в компании подруг чувствуют себя свободнее
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 px-4 md:px-8 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Ваш вечер трансформации: что вас ждёт
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Lock" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Приватная атмосфера</h3>
                <p className="text-muted-foreground">
                  Магазин закрыт только для вашей группы (5-10 человек). Никаких посторонних, полная конфиденциальность
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Gamepad2" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Игровой формат</h3>
                <p className="text-muted-foreground">
                  Настольная игра с 5 категориями. Выполняйте задания, получайте фишки, выигрывайте призы
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="UserCheck" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Экспертное сопровождение</h3>
                <p className="text-muted-foreground">
                  Специалисты секс-шопа рассказывают о топовых новинках, делятся секретами выбора
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Wine" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Фуршет и напитки</h3>
                <p className="text-muted-foreground">
                  Игристое, чай, лёгкие закуски создают расслабленную атмосферу
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Gift" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Подарки и призы</h3>
                <p className="text-muted-foreground">
                  Каждая участница получает пакет с пробниками, купонами на скидку 10% и сюрпризами
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Percent" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Скидка 10%</h3>
                <p className="text-muted-foreground">
                  На все покупки в день мероприятия
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-accent/10 border-2 border-accent rounded-2xl p-8 text-center">
            <p className="text-2xl font-bold mb-4">Стоимость: 800₽ с человека</p>
            <p className="text-muted-foreground mb-6">Включает участие в игре, фуршет, подарочный набор и скидку 10%</p>
            <Button 
              size="lg" 
              onClick={scrollToBooking}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
            >
              Забронировать — осталось 3 места
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-4 md:px-8 bg-muted/30 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Что говорят участницы
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
                  "Пришла с опаской, ушла с сумкой покупок и морем впечатлений. Атмосфера невероятная — чувствовала себя как на встрече с давними подругами"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://cdn.poehali.dev/projects/5c77938f-76ab-4d06-a204-320d9ed46d8b/files/4ef30699-b07e-49e5-a128-53c9239fe1fc.jpg"
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

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Думала, это для молодых. Оказалось — для всех, кто хочет быть счастливой. Узнала столько нового, что даже стыдно — сколько лет я упускала!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-primary">
                    С
                  </div>
                  <div>
                    <p className="font-semibold">Светлана</p>
                    <p className="text-sm text-muted-foreground">42 года</p>
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
                  "Привела подруг на день рождения. Лучший подарок себе! Теперь это наша традиция"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-primary">
                    А
                  </div>
                  <div>
                    <p className="font-semibold">Анастасия</p>
                    <p className="text-sm text-muted-foreground">31 год</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">127</p>
              <p className="text-muted-foreground">Проведено мероприятий</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">892</p>
              <p className="text-muted-foreground">Счастливых участниц</p>
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
            Ваш комфорт — наш приоритет
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-primary/20 hover-lift">
              <CardContent className="pt-6 text-center">
                <Icon name="Lock" size={40} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Конфиденциальность</h3>
                <p className="text-sm text-muted-foreground">
                  Никаких фото без вашего разрешения
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover-lift">
              <CardContent className="pt-6 text-center">
                <Icon name="BadgeCheck" size={40} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Возврат средств</h3>
                <p className="text-sm text-muted-foreground">
                  100% возврат при отмене мероприятия
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover-lift">
              <CardContent className="pt-6 text-center">
                <Icon name="Handshake" size={40} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Без навязчивых продаж</h3>
                <p className="text-sm text-muted-foreground">
                  Только информация и рекомендации
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover-lift">
              <CardContent className="pt-6 text-center">
                <Icon name="Heart" size={40} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Безопасная среда</h3>
                <p className="text-sm text-muted-foreground">
                  Только женская аудитория
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
                Женщины от 18 до 65 лет. Можно прийти одной или с подругами (от 5 до 10 человек в группе)
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Нужно ли что-то покупать обязательно?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет, покупки абсолютно добровольны. Многие приходят просто ради атмосферы и знаний
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Будут ли мужчины на мероприятии?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет, это исключительно женское мероприятие. Даже персонал — женщины
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Можно ли прийти одной?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да! Мы формируем группы из индивидуальных заявок. Вы обязательно найдёте единомышленниц
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Что делать, если я стесняюсь?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Абсолютно нормально! Большинство участниц приходят с волнением, но атмосфера настолько дружелюбная, что стеснение уходит в первые 10 минут
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Как часто проходят девичники?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Каждые 2 недели. Даты можно уточнить при бронировании
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
              Забронируйте ваш девичник
            </h2>
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
              <Icon name="Clock" size={20} />
              Осталось 3 места на ближайший девичник
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
                  <Label htmlFor="participants">Количество участниц *</Label>
                  <Input 
                    id="participants"
                    type="number"
                    min="1"
                    max="10"
                    placeholder="5"
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
                  Забронировать девичник
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
                <p>г. Владивосток, ул. Светланская, 123</p>
                <p>+7 (924) 123-45-67</p>
                <p>info@devichniki-shop.ru</p>
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
            © 2025. Девичники в секс-шопе. Конфиденциальность и безопасность гарантированы.
          </div>
        </div>
      </footer>
    </div>
  )
}
