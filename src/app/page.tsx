import styles from "./page.module.css";

const GUIDE_APK_URL = "https://github.com/vraiuk/wifi-tour-guide-landing/releases/download/v1.5.2/tourfi-guide.apk";
const TOURIST_APK_URL = "https://github.com/vraiuk/wifi-tour-guide-landing/releases/download/v1.5.2/tourfi-listener.apk";
const APP_VERSION = "1.5.2";
const CONTACT_TG = "https://t.me/vraiuk";

const economy = [
  { label: "Аренда на группу 20 чел.", rental: "2 000–3 000 ₽ (100–150 ₽ за приёмник)", tourfi: "0 ₽" },
  { label: "20 туров в месяц", rental: "40 000–60 000 ₽", tourfi: "2 000 ₽" },
  { label: "Купить свой комплект", rental: "от 60 000 ₽", tourfi: "не нужно" },
  { label: "Доставить на тур", rental: "Чемодан с 20 ресиверами", tourfi: "Один телефон в кармане. Для групп 10+ — компактный WiFi-роутер (от 3 000 ₽, помещается в карман)" },
  { label: "После тура", rental: "Собрать, протереть, зарядить — 40 минут", tourfi: "Закрыл приложение" },
  { label: "Турист потерял или сломал", rental: "−15 000–25 000 ₽ из вашего кармана", tourfi: "0 ₽" },
];

const features = [
  {
    icon: "💸",
    title: "0 ₽ оборудования",
    desc: "Не нужно покупать комплект за 60 000 ₽ или арендовать по 100–150 ₽ за приёмник. Телефон гида уже у вас в кармане.",
  },
  {
    icon: "⏱️",
    title: "Запуск за 30 секунд",
    desc: "Гид включает точку доступа, туристы подключаются по QR. Никаких раздач, сборов и протираний после тура.",
  },
  {
    icon: "🎧",
    title: "Свои наушники туриста",
    desc: "Гигиенично, привычный звук, ничего не теряется. У 99% туристов уже есть наушники или AirPods.",
  },
  {
    icon: "📡",
    title: "Работает там, где интернета нет",
    desc: "Пещеры, заводы, музеи, метро, парки, Кижи. Локальная WiFi сеть, без мобильной связи.",
  },
  {
    icon: "👥",
    title: "Группы 5–50 человек",
    desc: "От 5 до 50 туристов — подключаются к точке доступа с телефона гида. Задержка звука 50–200 мс — как живой разговор.",
  },
  {
    icon: "🔧",
    title: "Не ломается",
    desc: "В прокате каждый второй ресивер с разряженным аккумулятором или треснутым экраном. Здесь ломаться нечему.",
  },
];

const audiences = [
  {
    title: "Индивидуальные гиды",
    desc: "Tripster, Sputnik8, Эксперт-гид. Если водите 10+ туров в месяц группами от 15 человек — окупается за первый же тур.",
  },
  {
    title: "Небольшие экскурсионные компании",
    desc: "От 2 до 10 гидов. Один комплект железа стоит 200к и постоянно в ремонте — замените на подписку, которая работает на любом устройстве.",
  },
  {
    title: "Заводские и корпоративные туры",
    desc: "Производственные экскурсии, музеи предприятий, корп-туры. Шумно — без аудиогида не обойтись. WiFi работает там, где сотовая связь не ловит.",
  },
];

const faq = [
  {
    q: "Какого размера группы поддерживает?",
    a: "Группы до 10 человек — через точку доступа с телефона гида (стандартная функция Android «Раздача WiFi» / «Personal Hotspot»). Мобильный интернет при этом НЕ нужен — телефоны туристов подключаются к телефону гида напрямую по локальной сети. Для больших групп нужен любой портативный WiFi-роутер — стоит от 3 000 ₽ и заряжается через USB. Приложение поддерживает до 50 слушателей.",
  },
  {
    q: "А если у туриста сядет телефон?",
    a: "Так же, как с радиоприёмниками — ответственность туриста. На практике у всех современные смартфоны и павербанки. Если телефон сел — турист слушает соседа или подходит ближе к гиду.",
  },
  {
    q: "А если WiFi точка отвалится посреди тура?",
    a: "Приложение автоматически переподключает туристов. Гид одной кнопкой перезапускает точку за 5 секунд. На практике точка стабильна минимум 4 часа на одном заряде.",
  },
  {
    q: "Какое качество звука по сравнению с Sennheiser?",
    a: "Кодек Opus, задержка 50–200 мс. Это уровень профессиональной радиосистемы. Заметно лучше, чем у дешёвых китайских радиогидов из проката.",
  },
  {
    q: "Туристам надо ставить приложение — они не будут?",
    a: "APK ~48 МБ — ставится по QR-коду или ссылке заранее. Гид может попросить группу установить приложение до тура (один раз и навсегда). Если турист отказывается — даёт телефон соседу, который не отказался. Альтернатива — таскать чемодан с ресиверами и собирать его обратно.",
  },
  {
    q: "Сколько стоит и что в free-версии?",
    a: "Для первых 10 гидов — пожизненная цена основателя 3 000 ₽/год, зафиксирована и не растёт никогда. Когда наберём первую десятку, для новых клиентов тариф будет 2 000 ₽/мес или 18 000 ₽/год (со скидкой). Демо-тур, где я лично приеду на вашу экскурсию и настрою всё за вас, — бесплатно, в обмен на обратную связь.",
  },
  {
    q: "Можно протестировать на одной экскурсии?",
    a: "Да. Напишите в Telegram — я лично выезжаю на ваш ближайший тур, настраиваю систему за вас и помогаю первым туристам подключиться. Бесплатно, в обмен на подробную обратную связь.",
  },
];

const installSteps = [
  {
    num: "1",
    title: 'Скачайте нужное приложение',
    desc: 'Гид скачивает "TourFi Гид", туристы — "TourFi"',
  },
  {
    num: "2",
    title: "Разрешите установку",
    desc: 'Откройте файл. Android спросит разрешение — нажмите "Настройки" и включите "Разрешить из этого источника"',
  },
  {
    num: "3",
    title: "Установите и откройте",
    desc: 'Нажмите "Установить". Гид включает точку доступа и начинает эфир. Туристы подключаются к WiFi гида',
  },
];

export default function HomePage() {
  const isLocalGuide = GUIDE_APK_URL.startsWith("/");
  const isLocalTourist = TOURIST_APK_URL.startsWith("/");

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>Для пеших гидов · Tripster, Sputnik8, частные туры</div>
          <h1 className={styles.titleHook}>
            Перестаньте платить прокату <span className={styles.titleAccent}>до 60 000 ₽ в месяц</span> за радиогид
          </h1>
          <p className={styles.description}>
            TourFi заменяет аренду железных аудиогидов. Гид говорит в свой телефон —
            туристы слышат в своих наушниках через точку доступа с телефона гида.
            <strong> Мобильный интернет не нужен — туристы подключаются к телефону гида напрямую.</strong>
            {" "}Окупается за первый же тур.
          </p>

          <div className={styles.actions}>
            <a href={CONTACT_TG} target="_blank" rel="noopener" className={styles.downloadBtn}>
              Получить бесплатное демо
            </a>
            <a href="#download" className={styles.secondaryBtn}>
              Сразу скачать APK →
            </a>
          </div>
          <span className={styles.platformNote}>
            Я приду на одну вашу экскурсию и настрою всё сам · Москва
          </span>

          <div className={styles.heroGlow} aria-hidden="true" />
        </div>
      </section>

      {/* Economy table */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Считай экономию</h2>
          <p className={styles.sectionSubtitle}>
            Сравнение с типичным прокатом радиогида на 20 ресиверов
          </p>
          <div className={styles.compareTable}>
            <div className={styles.compareHead}>
              <div />
              <div className={styles.compareHeadCol}>Аренда радиогида</div>
              <div className={styles.compareHeadColAccent}>TourFi</div>
            </div>
            {economy.map((row) => (
              <div key={row.label} className={styles.compareRow}>
                <div className={styles.compareLabel}>{row.label}</div>
                <div className={styles.compareCellMuted}>{row.rental}</div>
                <div className={styles.compareCellAccent}>{row.tourfi}</div>
              </div>
            ))}
          </div>
          <p className={styles.economyNote}>
            При 20 групповых турах в месяц экономия —{" "}
            <strong>от 35 000 ₽ до 55 000 ₽</strong>. Подписка окупается с первой же экскурсии.
          </p>
        </div>
      </section>

      {/* Audience */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Для кого</h2>
          <div className={styles.featuresGrid}>
            {audiences.map((a) => (
              <div key={a.title} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{a.title}</h3>
                <p className={styles.featureDesc}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Почему TourFi</h2>
          <div className={styles.featuresGrid}>
            {features.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — fear closure */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Частые вопросы</h2>
          <p className={styles.sectionSubtitle}>
            Что обычно спрашивают гиды до первой экскурсии
          </p>
          <div className={styles.faq}>
            {faq.map((item) => (
              <details key={item.q} className={styles.faqItem}>
                <summary className={styles.faqQ}>{item.q}</summary>
                <p className={styles.faqA}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Founder offer CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Оффер для первых 10 гидов</h2>
          <p className={styles.ctaDesc}>
            Я лично выезжаю на одну вашу экскурсию, настраиваю систему за вас и помогаю
            первым туристам подключиться. Бесплатно. В обмен — подробная обратная связь
            и отзыв. После — пожизненная подписка по цене основателя <strong>3 000 ₽/год</strong>{" "}
            (столько же стоит одна аренда комплекта на тур). Обычный тариф когда наберём первых 10 —
            2 000 ₽/мес или 18 000 ₽/год со скидкой.
          </p>
          <div className={styles.actions}>
            <a href={CONTACT_TG} target="_blank" rel="noopener" className={styles.downloadBtn}>
              Написать в Telegram
            </a>
          </div>
          <p className={styles.platformNote} style={{ marginTop: 16 }}>
            Москва · ответ в течение 24 часов
          </p>
        </div>
      </section>

      {/* Install instructions */}
      <section className={styles.section} id="download">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Скачать и попробовать самим</h2>
          <p className={styles.sectionSubtitle} style={{ maxWidth: 'none' }}>
            Если хотите без помощи — установка занимает 30 секунд. Android 8.0+, версия v{APP_VERSION}.
          </p>
          <div className={styles.actions} style={{ marginBottom: 40, justifyContent: 'flex-start' }}>
            <a
              href={GUIDE_APK_URL}
              download={isLocalGuide ? "tourfi-guide.apk" : undefined}
              className={styles.downloadBtn}
            >
              APK для гида
            </a>
            <a
              href={TOURIST_APK_URL}
              download={isLocalTourist ? "tourfi-listener.apk" : undefined}
              className={styles.secondaryBtn}
            >
              APK для туриста
            </a>
          </div>
          <div className={styles.steps}>
            {installSteps.map((step) => (
              <div key={step.num} className={styles.step}>
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.installNote}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <strong>Важно:</strong> выключите VPN и блокировщики рекламы перед использованием — они блокируют локальную сеть.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>
            <strong>TourFi</strong> — замена радиогида для пеших гидов
          </p>
          <p className={styles.footerNote}>
            v{APP_VERSION} · Android 8.0+ · Работает в локальной сети без интернета
          </p>
        </div>
      </footer>
    </main>
  );
}
