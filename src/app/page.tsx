import styles from "./page.module.css";

const GUIDE_APK_URL = "https://github.com/vraiuk/wifi-tour-guide-landing/releases/download/v1.4.0/tourfi-guide.apk";
const TOURIST_APK_URL = "https://github.com/vraiuk/wifi-tour-guide-landing/releases/download/v1.4.0/tourfi-listener.apk";
const APP_VERSION = "1.4.0";

const features = [
  {
    icon: "📡",
    title: "Работает без интернета",
    desc: "Аудио передаётся через локальную WiFi сеть — не нужен мобильный интернет",
  },
  {
    icon: "🎙️",
    title: "Минимальная задержка",
    desc: "WebRTC технология обеспечивает задержку 50–200 мс — как живой разговор",
  },
  {
    icon: "👥",
    title: "До 50 слушателей",
    desc: "Один гид транслирует аудио для всей группы одновременно",
  },
  {
    icon: "📱",
    title: "Два отдельных приложения",
    desc: "Лёгкое приложение для туристов, полнофункциональное для гидов",
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
          <div className={styles.badge}>Android • v{APP_VERSION} • Beta</div>
          <h1 className={styles.title}>
            <span className={styles.titleAccent}>Tour</span>Fi
          </h1>
          <p className={styles.subtitle}>
            WiFi аудиогид для экскурсий
          </p>
          <p className={styles.description}>
            Гид говорит — туристы слышат. Без интернета, без задержек,
            без лишних приложений. Всё работает через локальную WiFi сеть.
          </p>

          <div className={styles.actions}>
            <a
              href={GUIDE_APK_URL}
              download={isLocalGuide ? "tourfi-guide.apk" : undefined}
              className={styles.downloadBtn}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 16L7 11M12 16L17 11M12 16V4M6 20H18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Для гида
            </a>
            <a
              href={TOURIST_APK_URL}
              download={isLocalTourist ? "tourfi-listener.apk" : undefined}
              className={styles.downloadBtn}
              style={{ background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.5)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 16L7 11M12 16L17 11M12 16V4M6 20H18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Для туриста
            </a>
          </div>
          <span className={styles.platformNote}>
            Android 8.0+
          </span>

          <div className={styles.heroGlow} aria-hidden="true" />
        </div>
      </section>

      {/* Which app */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Какое приложение скачать?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🎙️</span>
              <h3 className={styles.featureTitle}>TourFi Гид</h3>
              <p className={styles.featureDesc}>Вы ведёте экскурсию. Приложение создаёт точку доступа и транслирует ваш голос группе.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🎧</span>
              <h3 className={styles.featureTitle}>TourFi (Туристам)</h3>
              <p className={styles.featureDesc}>Вы слушаете экскурсию. Лёгкое приложение — подключается автоматически, просто слушайте.</p>
            </div>
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

      {/* Install instructions */}
      <section className={styles.section} id="install">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Как установить</h2>
          <p className={styles.sectionSubtitle}>
            TourFi распространяется напрямую — без Google Play. Установка занимает 30 секунд.
          </p>
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

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Готовы попробовать?</h2>
          <p className={styles.ctaDesc}>
            Скачайте приложение и проведите первую экскурсию уже сегодня
          </p>
          <div className={styles.actions}>
            <a
              href={GUIDE_APK_URL}
              download={isLocalGuide ? "tourfi-guide.apk" : undefined}
              className={styles.downloadBtn}
            >
              Скачать для гида
            </a>
            <a
              href={TOURIST_APK_URL}
              download={isLocalTourist ? "tourfi-listener.apk" : undefined}
              className={styles.downloadBtn}
              style={{ background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.5)' }}
            >
              Скачать для туриста
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>
            <strong>TourFi</strong> — WiFi аудиогид · v{APP_VERSION} · Beta
          </p>
          <p className={styles.footerNote}>
            Только для Android · Работает в локальной сети без интернета
          </p>
        </div>
      </footer>
    </main>
  );
}
