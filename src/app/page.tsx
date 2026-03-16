import styles from "./page.module.css";

const APK_URL = process.env.NEXT_PUBLIC_APK_URL ?? "/app-release.apk";
const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION ?? "1.0.0";

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
    icon: "🔗",
    title: "QR-код подключения",
    desc: "Туристы сканируют QR — и сразу в комнате гида, без регистрации",
  },
];

const installSteps = [
  {
    num: "1",
    title: 'Скачайте APK',
    desc: 'Нажмите кнопку "Скачать APK" выше и дождитесь загрузки файла',
  },
  {
    num: "2",
    title: "Разрешите установку",
    desc: 'Откройте файл. Android спросит разрешение — нажмите "Настройки" и включите "Разрешить из этого источника"',
  },
  {
    num: "3",
    title: "Установите приложение",
    desc: 'Вернитесь назад и нажмите "Установить". После установки — открыть TourFi',
  },
  {
    num: "4",
    title: "Выберите роль",
    desc: "Гид — для управления трансляцией. Турист — для прослушивания",
  },
];

export default function HomePage() {
  const isLocalApk = APK_URL.startsWith("/");

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
              href={APK_URL}
              download={isLocalApk ? "tourfi.apk" : undefined}
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
              Скачать APK
            </a>
            <span className={styles.platformNote}>
              Android 8.0+
            </span>
          </div>

          <div className={styles.heroGlow} aria-hidden="true" />
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
            Если Android заблокировал установку — перейдите в{" "}
            <strong>Настройки → Безопасность → Неизвестные источники</strong> и включите разрешение.
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
          <a
            href={APK_URL}
            download={isLocalApk ? "tourfi.apk" : undefined}
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
            Скачать TourFi APK
          </a>
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
