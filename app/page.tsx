export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
        <div className="sakura-wallpaper absolute inset-0" />
        <div className="sakura-overlay absolute inset-0" />
        <div className="sakura-petal-container absolute inset-0">
          {Array.from({ length: 16 }, (_, index) => (
            <span key={index} className="sakura-petal" />
          ))}
        </div>
      </div>

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-200/70">
          Web Developer
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight sm:text-7xl">
          Привет, я Kreqen.
          <span className="hero-subtitle block text-pink-200">
            Создаю современные сайты и приложения.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-pink-100/75">
          Я начинающий разработчик, изучаю веб-разработку и создаю проекты
          с помощью Next.js, TypeScript и современных AI-инструментов.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-pink-300 to-rose-400 px-7 py-3 text-center font-semibold text-[#310b22] shadow-lg shadow-pink-500/25 transition hover:scale-[1.02] hover:from-pink-200 hover:to-rose-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-200"
          >
            Посмотреть проекты
          </a>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://github.com/kreqen"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-pink-300/30 bg-pink-950/35 px-7 py-3 text-center font-medium backdrop-blur-md transition hover:border-pink-200/70 hover:bg-pink-800/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-200"
            >
              Мой GitHub
            </a>

            <a
              href="https://t.me/angelsffh"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-fuchsia-300/40 bg-fuchsia-950/30 px-7 py-3 text-center font-medium text-pink-100 backdrop-blur-md transition hover:border-fuchsia-200 hover:bg-fuchsia-800/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-200"
            >
              Telegram
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-pink-200/65">
          Skills
        </p>

        <h2 className="mt-4 text-4xl font-bold">Что я использую</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article className="sakura-card group relative overflow-hidden rounded-3xl p-6">
            <h3 className="text-2xl font-semibold">Next.js</h3>
            <p className="mt-4 text-sm leading-6 text-pink-100/70">
              Фреймворк для создания быстрых React-приложений с SSR и маршрутизацией.
            </p>
            <div className="skill-tooltip absolute left-1/2 top-0 z-10 w-72 -translate-x-1/2 -translate-y-full rounded-3xl border border-pink-500/20 bg-[#170a1f] p-4 text-sm text-zinc-200 opacity-0 shadow-2xl shadow-pink-500/10 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-5">
              Next.js упрощает создание современных веб-приложений с рендерингом на сервере и динамическими маршрутами.
            </div>
          </article>

          <article className="sakura-card group relative overflow-hidden rounded-3xl p-6">
            <h3 className="text-2xl font-semibold">TypeScript</h3>
            <p className="mt-4 text-sm leading-6 text-pink-100/70">
              Статическая типизация для безопасности кода и удобной разработки.
            </p>
            <div className="skill-tooltip absolute left-1/2 top-0 z-10 w-72 -translate-x-1/2 -translate-y-full rounded-3xl border border-pink-500/20 bg-[#170a1f] p-4 text-sm text-zinc-200 opacity-0 shadow-2xl shadow-pink-500/10 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-5">
              TypeScript помогает находить ошибки на этапе написания кода и делает проекты более поддерживаемыми.
            </div>
          </article>

          <article className="sakura-card group relative overflow-hidden rounded-3xl p-6">
            <h3 className="text-2xl font-semibold">React</h3>
            <p className="mt-4 text-sm leading-6 text-pink-100/70">
              Библиотека для создания UI-компонентов с декларативным подходом.
            </p>
            <div className="skill-tooltip absolute left-1/2 top-0 z-10 w-72 -translate-x-1/2 -translate-y-full rounded-3xl border border-pink-500/20 bg-[#170a1f] p-4 text-sm text-zinc-200 opacity-0 shadow-2xl shadow-pink-500/10 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-5">
              React позволяет строить гибкие интерфейсы и легко обновлять состояние приложения.
            </div>
          </article>

          <article className="sakura-card group relative overflow-hidden rounded-3xl p-6">
            <h3 className="text-2xl font-semibold">Tailwind CSS</h3>
            <p className="mt-4 text-sm leading-6 text-pink-100/70">
              Утилитарный CSS для быстрой стилизации интерфейсов.
            </p>
            <div className="skill-tooltip absolute left-1/2 top-0 z-10 w-72 -translate-x-1/2 -translate-y-full rounded-3xl border border-pink-500/20 bg-[#170a1f] p-4 text-sm text-zinc-200 opacity-0 shadow-2xl shadow-pink-500/10 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-5">
              Tailwind ускоряет верстку за счёт готовых утилит и позволяет точно контролировать дизайн.
            </div>
          </article>

          <article className="sakura-card group relative overflow-hidden rounded-3xl p-6">
            <h3 className="text-2xl font-semibold">Git</h3>
            <p className="mt-4 text-sm leading-6 text-pink-100/70">
              Система контроля версий для работы с кодом и командных проектов.
            </p>
            <div className="skill-tooltip absolute left-1/2 top-0 z-10 w-72 -translate-x-1/2 -translate-y-full rounded-3xl border border-pink-500/20 bg-[#170a1f] p-4 text-sm text-zinc-200 opacity-0 shadow-2xl shadow-pink-500/10 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-5">
              Git сохраняет историю изменений и помогает работать с ветками и командами.
            </div>
          </article>

          <article className="sakura-card group relative overflow-hidden rounded-3xl p-6">
            <h3 className="text-2xl font-semibold">AI Development</h3>
            <p className="mt-4 text-sm leading-6 text-pink-100/70">
              Создание умных функций и инструментов на основе искусственного интеллекта.
            </p>
            <div className="skill-tooltip absolute left-1/2 top-0 z-10 w-72 -translate-x-1/2 -translate-y-full rounded-3xl border border-pink-500/20 bg-[#170a1f] p-4 text-sm text-zinc-200 opacity-0 shadow-2xl shadow-pink-500/10 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-5">
              AI Development включает генерацию контента, обработку данных и умные интерфейсы.
            </div>
          </article>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-6xl border-t border-pink-300/15 px-6 py-24"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-pink-200/65">
          Portfolio
        </p>

        <h2 className="mt-4 text-4xl font-bold">Мои проекты</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="sakura-card rounded-3xl p-8">
            <p className="text-sm text-pink-200/60">Проект №1</p>

            <h3 className="mt-3 text-2xl font-semibold">proektn1-dev</h3>

            <p className="mt-4 leading-7 text-pink-100/70">
              Мой личный сайт-портфолио, созданный на Next.js и Tailwind CSS.
            </p>

            <span className="mt-8 inline-block rounded-full border border-pink-300/20 bg-pink-400/10 px-3 py-1 text-sm text-pink-200/70">
              В разработке
            </span>
          </article>

          <article className="rounded-3xl border border-dashed border-pink-300/25 bg-pink-950/20 p-8 backdrop-blur-sm">
            <p className="text-sm text-pink-200/60">Следующий проект</p>

            <h3 className="mt-3 text-2xl font-semibold">
              Скоро здесь появится новый проект
            </h3>

            <p className="mt-4 leading-7 text-pink-100/70">
              Каждый новый проект будет добавляться на эту страницу.
            </p>
          </article>
        </div>
      </section>

      <footer className="border-t border-pink-300/15 bg-[#240817]/70 px-6 py-8 text-center text-sm text-pink-100/65 backdrop-blur-xl">
        <p>
          kreqen — i <span className="text-pink-400">♥</span> amerika
        </p>
      </footer>
    </main>
  );
}
