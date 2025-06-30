"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "ru" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.about": "О системе",
    "nav.products": "Продукты",
    "nav.technology": "Решения",
    "nav.contact": "Контакты",

    // Hero
   "hero.title": "Система раннего обнаружения пожаров",
    "hero.subtitle":
      "Защитите свою собственность с помощью инфракрасных камер и искусственного интеллекта. Наши системы обнаруживают пожары за секунды.",
    "hero.feature1": "Инфракрасные камеры",
    "hero.feature2": "Мгновенные уведомления",
    "hero.cta1": "Узнать больше",
    "hero.cta2": "Связаться с нами",

    // About
    "about.title": "О нашей системе",
    "about.subtitle":
      "EFDS — это передовая система раннего обнаружения пожаров, которая использует инфракрасные технологии и искусственный интеллект для максимально быстрого и точного обнаружения возгораний.",

    "about.story.title": "История компании",
    "about.story.paragraph1":
      "EFDS была основана в 2008 году группой инженеров и специалистов по пожарной безопасности с целью создания революционной системы раннего обнаружения пожаров.",
    "about.story.paragraph2":
      "За 15 лет работы мы установили более 5000 систем по всей России и странам СНГ, защитив тысячи объектов от пожаров.",
    "about.story.paragraph3":
      "Сегодня EFDS — это признанный лидер в области инновационных технологий пожарной безопасности с собственным центром исследований и разработок.",

    "about.values.title": "Наши ценности",
    "about.values.subtitle": "Принципы, которыми мы руководствуемся в работе",
    "about.values.safety.title": "Безопасность",
    "about.values.safety.description": "Защита жизни людей — наш главный приоритет",
    "about.values.innovation.title": "Инновации",
    "about.values.innovation.description": "Постоянное развитие и внедрение новых технологий",
    "about.values.reliability.title": "Надежность",
    "about.values.reliability.description": "Системы, которые работают безупречно 24/7",
    "about.values.support.title": "Поддержка",
    "about.values.support.description": "Круглосуточная техническая поддержка клиентов",
    "about.mission.title": "Наша миссия",
    "about.mission.description":"Мы стремимся сделать мир безопаснее, предоставляя передовые технологии раннего обнаружения пожаров. Наша цель — защитить жизни людей и сохранить имущество с помощью инновационных решений, которые работают быстрее и точнее традиционных систем.",

    "about.stats.years_experience": "Лет опыта",
    "about.stats.installations": "Установок",
    "about.stats.reliability": "Надежность",
    "about.stats.support": "Поддержка",
    // Features
    "features.title": "Преимущества EFDS",
    "features.subtitle": "Почему тысячи клиентов выбирают наши решения",
    "features.advanced.title": "Передовое обнаружение",
    "features.advanced.description": "Инфракрасные датчики с ИИ для точного обнаружения дыма, тепла и пламени",
    "features.realtime.title": "Реальное время",
    "features.realtime.description": "Мгновенные уведомления и автоматическое реагирование на угрозы пожара",
    "features.monitoring.title": "Удаленный мониторинг",
    "features.monitoring.description": "Круглосуточное наблюдение через облачную платформу с мобильными уведомлениями",
    "features.alerts.title": "Умные уведомления",
    "features.alerts.description": "Настраиваемые оповещения с различными уровнями приоритета и каналами связи",
    "features.wireless.title": "Беспроводная связь",
    "features.wireless.description": "Надежная беспроводная сеть с резервными каналами связи",
    "features.analytics.title": "Аналитика данных",
    "features.analytics.description": "Подробная отчетность и анализ для оптимизации системы безопасности",

    // Technology
    "tech.badge": "Передовые технологии",
    "tech.title": "Революционные технологии обнаружения пожара",
    "tech.subtitle": "Наши системы используют самые современные технологии для обеспечения максимальной защиты",

    "tech.infrared.title": "Инфракрасная термография",
    "tech.infrared.description":
      "Передовые инфракрасные камеры обнаруживают тепловые аномалии до появления видимого пламени",
    "tech.infrared.feature1": "Обнаружение на расстоянии до 10 км",
    "tech.infrared.feature2": "Работа в любых погодных условиях",
    "tech.infrared.feature3": "ИИ-возможности: Умная аналитика для минимизации ложных срабатываний",
    "tech.infrared.badge": "Основная технология",

    "tech.thermal.title": "Тепловизионные камеры",
    "tech.thermal.description": "Высокоточные тепловизионные системы для непрерывного мониторинга критических зон",
    "tech.thermal.feature1": "Разрешение 640x480 пикселей",
    "tech.thermal.feature2": "Автоматическое отслеживание горячих точек",
    "tech.thermal.feature3": "Интеграция с системами пожаротушения",
    "tech.thermal.badge": "Профессиональное",

    "tech.ai.title": "Искусственный интеллект",
    "tech.ai.description": "ИИ-алгоритмы анализируют тепловые данные для предотвращения ложных срабатываний",
    "tech.ai.feature1": "Машинное обучение для распознавания паттернов",
    "tech.ai.feature2": "Предиктивная аналитика рисков",
    "tech.ai.feature3": "Автоматическая калибровка системы",
    "tech.ai.badge": "ИИ-технология",

    "tech.iot.title": "IoT и облачные технологии",
    "tech.iot.description": "Подключенные устройства и облачная аналитика для комплексного мониторинга",
    "tech.iot.feature1": "Беспроводная сеть датчиков",
    "tech.iot.feature2": "Облачное хранение данных",
    "tech.iot.feature3": "Мобильные уведомления в реальном времени",
    "tech.iot.badge": "Подключенность",

    "tech.advanced.speed": "Скорость обнаружения",
    "tech.advanced.accuracy": "Точность",
    "tech.advanced.coverage": "Покрытие",
    "tech.advanced.integration": "Интеграция",

    // Industry Solutions
    "solutions.badge": "Отраслевые решения",
    "solutions.title": "Решения для любой отрасли",
    "solutions.subtitle": "Наши системы адаптированы для различных сфер применения",
    "solutions.learn_more": "Узнать больше",

    "solutions.forest.title": "Лесное хозяйство",
    "solutions.forest.description": "Защита лесных массивов от пожаров с помощью дронов и спутникового мониторинга",
    "solutions.forest.feature1": "Мониторинг больших территорий",
    "solutions.forest.feature2": "Автономные дроны-патрули",
    "solutions.forest.feature3": "Интеграция с МЧС",
    "solutions.forest.badge": "Экология",

    "solutions.industrial.title": "Промышленность",
    "solutions.industrial.description": "Защита промышленных объектов, складов и производственных линий",
    "solutions.industrial.feature1": "Мониторинг технологических процессов",
    "solutions.industrial.feature2": "Интеграция с системами безопасности",
    "solutions.industrial.feature3": "Соответствие промышленным стандартам",
    "solutions.industrial.badge": "Промышленность",

    "solutions.residential.title": "Жилые комплексы",
    "solutions.residential.description": "Умные системы пожарной безопасности для домов и квартир",
    "solutions.residential.feature1": "Беспроводная установка",
    "solutions.residential.feature2": "Мобильное приложение",
    "solutions.residential.feature3": "Интеграция с умным домом",
    "solutions.residential.badge": "Умный дом",

    "solutions.commercial.title": "Коммерческая недвижимость",
    "solutions.commercial.description": "Комплексная защита офисных зданий, торговых центров и отелей",
    "solutions.commercial.feature1": "Централизованное управление",
    "solutions.commercial.feature2": "Система оповещения",
    "solutions.commercial.feature3": "Соответствие нормам безопасности",
    "solutions.commercial.badge": "Коммерция",

    "solutions.transport.title": "Транспорт и логистика",
    "solutions.transport.description": "Защита транспортных средств, складов и логистических центров",
    "solutions.transport.feature1": "Мобильные системы мониторинга",
    "solutions.transport.feature2": "GPS-трекинг инцидентов",
    "solutions.transport.feature3": "Автоматические системы пожаротушения",
    "solutions.transport.badge": "Логистика",

    "solutions.energy.title": "Энергетика",
    "solutions.energy.description": "Защита электростанций, подстанций и энергетической инфраструктуры",
    "solutions.energy.feature1": "Мониторинг высоковольтного оборудования",
    "solutions.energy.feature2": "Предотвращение аварий",
    "solutions.energy.feature3": "Соответствие энергетическим стандартам",
    "solutions.energy.badge": "Энергетика",

    // Stats
    "stats.title": "Наши достижения",
    "stats.subtitle": "Цифры, которые говорят о нашей надежности и эффективности",
    "stats.accuracy": "Точность обнаружения",
    "stats.response": "Время реагирования",
    "stats.monitoring": "Мониторинг",
    "stats.installations": "Установок",

    // Testimonials
    "testimonials.badge": "Отзывы клиентов",
    "testimonials.title": "Что говорят наши клиенты",
    "testimonials.subtitle": "Реальные отзывы от компаний, которые доверяют нашим решениям",

    "testimonials.client1.name": "Александр Петров",
    "testimonials.client1.role": "Директор по безопасности",
    "testimonials.client1.company": "Лесхоз Подмосковья",
    "testimonials.client1.content":
      "EFDS помогла нам предотвратить три крупных лесных пожара в этом году. Система работает безупречно и окупилась за первые 6 месяцев.",

    "testimonials.client2.name": "Мария Смирнова",
    "testimonials.client2.role": "Главный инженер",
    "testimonials.client2.company": "Металлургический завод",
    "testimonials.client2.content":
      "Инфракрасные датчики EFDS обнаруживают перегрев оборудования на ранней стадии. Это позволило нам избежать простоев и сэкономить миллионы рублей.",

    "testimonials.client3.name": "Евгений Козлов",
    "testimonials.client3.role": "Управляющий",
    "testimonials.client3.company": "ТЦ Европейский",
    "testimonials.client3.content":
      "Установили систему EFDS во всех наших торговых центрах. Клиенты и арендаторы чувствуют себя в безопасности, зная, что мы используем самые современные технологии.",

    "testimonials.stats.installations": "Установок",
    "testimonials.stats.satisfaction": "Удовлетворенность",
    "testimonials.stats.support": "Поддержка",
    "testimonials.stats.years": "Лет опыта",

    // CTA
    "cta.title": "Готовы защитить свой объект?",
    "cta.subtitle": "Получите бесплатную консультацию и персональное предложение от наших экспертов",
    "cta.contact": "Связаться с нами",
    "cta.demo": "Заказать демо",
    "cta.availability": "Работаем 24/7",

    // Footer
    "footer.description":
      "EFDS - ведущий поставщик систем раннего обнаружения пожара. Защищаем жизни и имущество с помощью передовых технологий.",
    "footer.address": "Москва, Россия",
    "footer.products": "Продукты",
    "footer.smoke_detectors": "Детекторы дыма",
    "footer.heat_sensors": "Тепловые датчики",
    "footer.control_panels": "Панели управления",
    "footer.monitoring": "Системы мониторинга",
    "footer.company": "Компания",
    "footer.rights": "Все права защищены.",

    // Contact
    "contact.title": "Свяжитесь с нами",
    "contact.subtitle": "Получите консультацию от наших экспертов по пожарной безопасности",
    "contact.form_title": "Отправить сообщение",
    "contact.form_description": "Заполните форму, и мы свяжемся с вами в течение 24 часов",
    "contact.name": "Имя",
    "contact.phone": "Телефон",
    "contact.message": "Сообщение",
    "contact.send": "Отправить",
    "contact.email": "Email",
    "contact.email_desc": "Напишите нам на почту",
    "contact.phone_desc": "Позвоните нам",
    "contact.address_title": "Адрес",
    "contact.address": "Ташкент, Узбекистан",
    "contact.address_desc": "Наш офис",
    "contact.hours": "Часы работы",
    "contact.hours_value": "Пн-Пт: 9:00-18:00",
    "contact.hours_desc": "Время работы офиса",

    // Products
    "products.title": "Наши продукты",
    "products.subtitle": "Комплексные решения для обнаружения и предотвращения пожаров",
    "products.learn_more": "Подробнее",

    "products.smoke.title": "Детекторы дыма",
    "products.smoke.description": "Высокочувствительные оптические детекторы дыма с ИИ-анализом",
    "products.smoke.feature1": "Оптическое обнаружение дыма",
    "products.smoke.feature2": "Защита от ложных срабатываний",
    "products.smoke.feature3": "Беспроводная связь",

    "products.heat.title": "Тепловые датчики",
    "products.heat.description": "Инфракрасные датчики для обнаружения повышения температуры",
    "products.heat.feature1": "Инфракрасная технология",
    "products.heat.feature2": "Высокая точность измерений",
    "products.heat.feature3": "Быстрое реагирование",

    "products.wireless.title": "Беспроводные системы",
    "products.wireless.description": "Беспроводные сети датчиков с облачным мониторингом",
    "products.wireless.feature1": "Простая установка",
    "products.wireless.feature2": "Масштабируемость",
    "products.wireless.feature3": "Удаленное управление",

    "products.control.title": "Панели управления",
    "products.control.description": "Центральные панели управления с ИИ-аналитикой",
    "products.control.feature1": "Интуитивный интерфейс",
    "products.control.feature2": "Автоматическое реагирование",
    "products.control.feature3": "Интеграция с внешними системами",
    "products.drone.feature1": "Автономные дроны для мониторинга",
    "products.drone.feature2": "Спутниковая связь",
    "products.drone.feature3": "Интеграция с наземными системами",
    "products.drone.title": "Дроны для мониторинга",
    "products.drone.description":"Автономные дроны с инфракрасными камерами для мониторинга больших территорий и лесных массивов",
    "products.camera.title": "Камеры видеонаблюдения",
    "products.camera.description": "Камеры с ИИ-анализом для круглосуточного видеонаблюдения",
    "products.camera.feature1": "Высокое разрешение",
    "products.camera.feature2": "Ночной режим",
    "products.camera.feature3": "Интеграция с системами безопасности",
    // Technology
    "technology.title": "Наши технологии",
    "technology.subtitle": "Передовые решения для максимальной защиты",
    "technology.ai.title": "Искусственный интеллект",
    "technology.ai.description": "ИИ-алгоритмы для анализа данных и предотвращения ложных срабатываний",
    "technology.iot.title": "IoT и подключенность",
    "technology.iot.description": "Интернет вещей для создания умных систем безопасности",
    "technology.cloud.title": "Облачные технологии",
    "technology.cloud.description": "Облачная платформа для удаленного мониторинга и управления",
    "technology.mobile.title": "Мобильные приложения",
    "technology.mobile.description": "Мобильные приложения для контроля системы в реальном времени",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About System",
    "nav.products": "Products",
    "nav.technology": "Solutions",
    "nav.contact": "Contact",

    // Hero
      "hero.title": "Early Fire Detection System",
    "hero.subtitle":
      "Quickly detect fires using infrared cameras and smart AI technology. Protect your property before damage occurs.",
    "hero.feature1": "Infrared Cameras",
    "hero.feature2": "Instant Alerts",
    "hero.feature3": "AI-Powered Analysis",
    "hero.cta1": "Learn More",
    "hero.cta2": "Contact Us",

    // About
    "about.title": "About Our System",
    "about.subtitle":
      "EFDS is an advanced early fire detection system that uses infrared technology and artificial intelligence for the fastest and most accurate fire detection.",

    "about.story.title": "Company History",
    "about.story.paragraph1":
      "EFDS was founded in 2008 by a group of engineers and fire safety specialists with the goal of creating a revolutionary early fire detection system.",
    "about.story.paragraph2":
      "Over 15 years of operation, we have installed more than 5,000 systems throughout Russia and CIS countries, protecting thousands of facilities from fires.",
    "about.story.paragraph3":
      "Today, EFDS is a recognized leader in innovative fire safety technologies with its own research and development center.",

    "about.values.title": "Our Values",
    "about.values.subtitle": "Principles that guide our work",
    "about.values.safety.title": "Safety",
    "about.values.safety.description": "Protecting human life is our top priority",
    "about.values.innovation.title": "Innovation",
    "about.values.innovation.description": "Continuous development and implementation of new technologies",
    "about.values.reliability.title": "Reliability",
    "about.values.reliability.description": "Systems that work flawlessly 24/7",
    "about.values.support.title": "Support",
    "about.values.support.description": "Round-the-clock technical support for customers",
    "about.mission.title": "Our Mission",
    "about.mission.description":"We strive to make the world safer by providing advanced early fire detection technologies. Our goal is to protect lives and property through innovative solutions that are faster and more accurate than traditional systems.",
    
    "about.stats.years_experience": "Years Experience",
    "about.stats.installations": "Installations",
    "about.stats.reliability": "Reliability",
    "about.stats.support": "Support",
    // Features
    "features.title": "EFDS Advantages",
    "features.subtitle": "Why thousands of customers choose our solutions",
    "features.advanced.title": "Advanced Detection",
    "features.advanced.description": "Infrared sensors with AI for accurate smoke, heat, and flame detection",
    "features.realtime.title": "Real-time Response",
    "features.realtime.description": "Instant notifications and automatic response to fire threats",
    "features.monitoring.title": "Remote Monitoring",
    "features.monitoring.description": "24/7 surveillance through cloud platform with mobile notifications",
    "features.alerts.title": "Smart Alerts",
    "features.alerts.description":
      "Customizable notifications with different priority levels and communication channels",
    "features.wireless.title": "Wireless Connectivity",
    "features.wireless.description": "Reliable wireless network with backup communication channels",
    "features.analytics.title": "Data Analytics",
    "features.analytics.description": "Detailed reporting and analysis to optimize your security system",

    // Technology
    "tech.badge": "Advanced Technology",
    "tech.title": "Revolutionary Fire Detection Technologies",
    "tech.subtitle": "Our systems use the most advanced technologies to ensure maximum protection",

    "tech.infrared.title": "Infrared Thermography",
    "tech.infrared.description": "Advanced infrared cameras detect thermal anomalies before visible flames appear",
    "tech.infrared.feature1": "Detection range up to 10 km",
    "tech.infrared.feature2": "Works in all weather conditions",
    "tech.infrared.feature3": "AI Capability: Smart analytics to minimize false alarms",
    "tech.infrared.badge": "Core Technology",

    "tech.thermal.title": "Thermal Imaging Cameras",
    "tech.thermal.description": "High-precision thermal imaging systems for continuous monitoring of critical zones",
    "tech.thermal.feature1": "640x480 pixel resolution",
    "tech.thermal.feature2": "Automatic hot spot tracking",
    "tech.thermal.feature3": "Integration with fire suppression systems",
    "tech.thermal.badge": "Professional",

    "tech.ai.title": "Artificial Intelligence",
    "tech.ai.description": "AI algorithms analyze thermal data to prevent false alarms",
    "tech.ai.feature1": "Machine learning for pattern recognition",
    "tech.ai.feature2": "Predictive risk analytics",
    "tech.ai.feature3": "Automatic system calibration",
    "tech.ai.badge": "AI Technology",

    "tech.iot.title": "IoT and Cloud Technologies",
    "tech.iot.description": "Connected devices and cloud analytics for comprehensive monitoring",
    "tech.iot.feature1": "Wireless sensor network",
    "tech.iot.feature2": "Cloud data storage",
    "tech.iot.feature3": "Real-time mobile notifications",
    "tech.iot.badge": "Connectivity",

    "tech.advanced.speed": "Detection Speed",
    "tech.advanced.accuracy": "Accuracy",
    "tech.advanced.coverage": "Coverage",
    "tech.advanced.integration": "Integration",

    // Industry Solutions
    "solutions.badge": "Industry Solutions",
    "solutions.title": "Solutions for Every Industry",
    "solutions.subtitle": "Our systems are adapted for various applications",
    "solutions.learn_more": "Learn More",

    "solutions.forest.title": "Forestry",
    "solutions.forest.description": "Protect forest areas from fires using drones and satellite monitoring",
    "solutions.forest.feature1": "Large area monitoring",
    "solutions.forest.feature2": "Autonomous patrol drones",
    "solutions.forest.feature3": "Emergency services integration",
    "solutions.forest.badge": "Ecology",

    "solutions.industrial.title": "Industrial",
    "solutions.industrial.description": "Protection of industrial facilities, warehouses and production lines",
    "solutions.industrial.feature1": "Process monitoring",
    "solutions.industrial.feature2": "Security system integration",
    "solutions.industrial.feature3": "Industrial standards compliance",
    "solutions.industrial.badge": "Industry",

    "solutions.residential.title": "Residential",
    "solutions.residential.description": "Smart fire safety systems for homes and apartments",
    "solutions.residential.feature1": "Wireless installation",
    "solutions.residential.feature2": "Mobile application",
    "solutions.residential.feature3": "Smart home integration",
    "solutions.residential.badge": "Smart Home",

    "solutions.commercial.title": "Commercial Real Estate",
    "solutions.commercial.description": "Comprehensive protection for office buildings, shopping centers and hotels",
    "solutions.commercial.feature1": "Centralized management",
    "solutions.commercial.feature2": "Alert system",
    "solutions.commercial.feature3": "Safety standards compliance",
    "solutions.commercial.badge": "Commercial",

    "solutions.transport.title": "Transport & Logistics",
    "solutions.transport.description": "Protection of vehicles, warehouses and logistics centers",
    "solutions.transport.feature1": "Mobile monitoring systems",
    "solutions.transport.feature2": "GPS incident tracking",
    "solutions.transport.feature3": "Automatic fire suppression systems",
    "solutions.transport.badge": "Logistics",

    "solutions.energy.title": "Energy",
    "solutions.energy.description": "Protection of power plants, substations and energy infrastructure",
    "solutions.energy.feature1": "High voltage equipment monitoring",
    "solutions.energy.feature2": "Accident prevention",
    "solutions.energy.feature3": "Energy standards compliance",
    "solutions.energy.badge": "Energy",

    // Stats
    "stats.title": "Our Achievements",
    "stats.subtitle": "Numbers that speak to our reliability and effectiveness",
    "stats.accuracy": "Detection Accuracy",
    "stats.response": "Response Time",
    "stats.monitoring": "Monitoring",
    "stats.installations": "Installations",

    // Testimonials
    "testimonials.badge": "Customer Reviews",
    "testimonials.title": "What Our Customers Say",
    "testimonials.subtitle": "Real feedback from companies that trust our solutions",

    "testimonials.client1.name": "Alexander Petrov",
    "testimonials.client1.role": "Security Director",
    "testimonials.client1.company": "Moscow Region Forestry",
    "testimonials.client1.content":
      "EFDS helped us prevent three major forest fires this year. The system works flawlessly and paid for itself in the first 6 months.",

    "testimonials.client2.name": "Maria Smirnova",
    "testimonials.client2.role": "Chief Engineer",
    "testimonials.client2.company": "Metallurgical Plant",
    "testimonials.client2.content":
      "EFDS infrared sensors detect equipment overheating at an early stage. This allowed us to avoid downtime and save millions of rubles.",

    "testimonials.client3.name": "Evgeny Kozlov",
    "testimonials.client3.role": "Manager",
    "testimonials.client3.company": "European Shopping Center",
    "testimonials.client3.content":
      "We installed EFDS systems in all our shopping centers. Customers and tenants feel safe knowing we use the most advanced technologies.",

    "testimonials.stats.installations": "Installations",
    "testimonials.stats.satisfaction": "Satisfaction",
    "testimonials.stats.support": "Support",
    "testimonials.stats.years": "Years Experience",

    // CTA
    "cta.title": "Ready to Protect Your Property?",
    "cta.subtitle": "Get a free consultation and personalized offer from our experts",
    "cta.contact": "Contact Us",
    "cta.demo": "Book Demo",
    "cta.availability": "Available 24/7",

    // Footer
    "footer.description":
      "EFDS is a leading provider of early fire detection systems. Protecting lives and property with advanced technology.",
    "footer.address": "Moscow, Russia",
    "footer.products": "Products",
    "footer.smoke_detectors": "Smoke Detectors",
    "footer.heat_sensors": "Heat Sensors",
    "footer.control_panels": "Control Panels",
    "footer.monitoring": "Monitoring Systems",
    "footer.company": "Company",
    "footer.rights": "All rights reserved.",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Get consultation from our fire safety experts",
    "contact.form_title": "Send Message",
    "contact.form_description": "Fill out the form and we will contact you within 24 hours",
    "contact.name": "Name",
    "contact.phone": "Phone",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.email": "Email",
    "contact.email_desc": "Email us",
    "contact.phone_desc": "Call us",
    "contact.address_title": "Address",
    "contact.address": "Tashkent, Uzbekistan",
    "contact.address_desc": "Our office",
    "contact.hours": "Working Hours",
    "contact.hours_value": "Mon-Fri: 9:00-18:00",
    "contact.hours_desc": "Office hours",

    // Products
    "products.title": "Our Products",
    "products.subtitle": "Comprehensive solutions for fire detection and prevention",
    "products.learn_more": "Learn More",

    "products.smoke.title": "Smoke Detectors",
    "products.smoke.description": "High-sensitivity optical smoke detectors with AI analysis",
    "products.smoke.feature1": "Optical smoke detection",
    "products.smoke.feature2": "False alarm protection",
    "products.smoke.feature3": "Wireless connectivity",

    "products.heat.title": "Heat Sensors",
    "products.heat.description": "Infrared sensors for temperature rise detection",
    "products.heat.feature1": "Infrared technology",
    "products.heat.feature2": "High measurement accuracy",
    "products.heat.feature3": "Fast response",

    "products.wireless.title": "Wireless Systems",
    "products.wireless.description": "Wireless sensor networks with cloud monitoring",
    "products.wireless.feature1": "Easy installation",
    "products.wireless.feature2": "Scalability",
    "products.wireless.feature3": "Remote management",

    "products.control.title": "Control Panels",
    "products.control.description": "Central control panels with AI analytics",
    "products.control.feature1": "Intuitive interface",
    "products.control.feature2": "Automatic response",
    "products.control.feature3": "External system integration",
    "products.drone.feature1": "Autonomous drones for monitoring",
    "products.drone.feature2": "Satellite communication",
    "products.drone.feature3": "Integration with ground systems",
    "products.drone.title": "Drones for Monitoring",
    "products.drone.description":
      "Autonomous drones with infrared cameras for monitoring large areas and forested regions",
    "products.camera.title": "Surveillance Cameras",
    "products.camera.description": "Cameras with AI analysis for 24/7 video surveillance",
    "products.camera.feature1": "High resolution",
    "products.camera.feature2": "Night mode",
    "products.camera.feature3": "Integration with security systems",
      // Technology
    "technology.title": "Our Technologies",
    "technology.subtitle": "Advanced solutions for maximum protection",
    "technology.ai.title": "Artificial Intelligence",
    "technology.ai.description": "AI algorithms for data analysis and false alarm prevention",
    "technology.iot.title": "IoT and Connectivity",
    "technology.iot.description": "Internet of Things for creating smart security systems",
    "technology.cloud.title": "Cloud Technologies",
    "technology.cloud.description": "Cloud platform for remote monitoring and management",
    "technology.mobile.title": "Mobile Applications",
    "technology.mobile.description": "Mobile apps for real-time system control",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru") // Default to Russian

  useEffect(() => {
    const savedLanguage = localStorage.getItem("efds-language") as Language
    if (savedLanguage && (savedLanguage === "ru" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("efds-language", language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
