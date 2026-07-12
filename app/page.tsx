export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090214] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="sakura-wallpaper absolute inset-0" />
        <div className="sakura-petal-container absolute inset-0">
          {Array.from({ length: 16 }, (_, index) => (
            <span key={index} className="sakura-petal" />
          ))}
        </div>
      </div>

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Web Developer
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight sm:text-7xl">
          Привет, я Kreqen.
          <span className="block text-zinc-500">
            Создаю современные сайты и приложения.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Я начинающий разработчик, изучаю веб-разработку и создаю проекты
          с помощью Next.js, TypeScript и современных AI-инструментов.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-white px-7 py-3 text-center font-medium text-black transition hover:bg-zinc-300"
          >
            Посмотреть проекты
          </a>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://github.com/kreqen"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-7 py-3 text-center font-medium transition hover:border-zinc-400 hover:bg-zinc-900"
            >
              Мой GitHub
            </a>

            <a
              href="https://t.me/angelsffh"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan-500/50 bg-cyan-950/10 px-7 py-3 text-center font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-900"
            >
              Telegram
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Skills
        </p>

        <h2 className="mt-4 text-4xl font-bold">Что я использую</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-pink-400 hover:bg-[#110a1b]">
            <h3 className="text-2xl font-semibold">Next.js</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Фреймворк для создания быстрых React-приложений с SSR и маршрутизацией.
            </p>
            <div className="skill-tooltip absolute left-1/2 top-0 z-10 w-72 -translate-x-1/2 -translate-y-full rounded-3xl border border-pink-500/20 bg-[#170a1f] p-4 text-sm text-zinc-200 opacity-0 shadow-2xl shadow-pink-500/10 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-5">
              Next.js упрощает создание современных веб-приложений с рендерингом на сервере и динамическими маршрутами.
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-pink-400 hover:bg-[#110a1b]">
            <h3 className="text-2xl font-semibold">TypeScript</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Статическая типизация для безопасности кода и удобной разработки.
            </p>
            <div className="skill-tooltip absolute left-1/2 top-0 z-10 w-72 -translate-x-1/2 -translate-y-full rounded-3xl border border-pink-500/20 bg-[#170a1f] p-4 text-sm text-zinc-200 opacity-0 shadow-2xl shadow-pink-500/10 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-5">
              TypeScript помогает находить ошибки на этапе написания кода и делает проекты более поддерживаемыми.
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-pink-400 hover:bg-[#110a1b]">
            <h3 className="text-2xl font-semibold">React</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Библиотека для создания UI-компонентов с декларативным подходом.
            </p>
            <div className="skill-tooltip absolute left-1/2 top-0 z-10 w-72 -translate-x-1/2 -translate-y-full rounded-3xl border border-pink-500/20 bg-[#170a1f] p-4 text-sm text-zinc-200 opacity-0 shadow-2xl shadow-pink-500/10 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-5">
              React позволяет строить гибкие интерфейсы и легко обновлять состояние приложения.
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-pink-400 hover:bg-[#110a1b]">
            <h3 className="text-2xl font-semibold">Tailwind CSS</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Утилитарный CSS для быстрой стилизации интерфейсов.
            </p>
            <div className="skill-tooltip absolute left-1/2 top-0 z-10 w-72 -translate-x-1/2 -translate-y-full rounded-3xl border border-pink-500/20 bg-[#170a1f] p-4 text-sm text-zinc-200 opacity-0 shadow-2xl shadow-pink-500/10 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-5">
              Tailwind ускоряет верстку за счёт готовых утилит и позволяет точно контролировать дизайн.
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-pink-400 hover:bg-[#110a1b]">
            <h3 className="text-2xl font-semibold">Git</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Система контроля версий для работы с кодом и командных проектов.
            </p>
            <div className="skill-tooltip absolute left-1/2 top-0 z-10 w-72 -translate-x-1/2 -translate-y-full rounded-3xl border border-pink-500/20 bg-[#170a1f] p-4 text-sm text-zinc-200 opacity-0 shadow-2xl shadow-pink-500/10 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-5">
              Git сохраняет историю изменений и помогает работать с ветками и командами.
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-pink-400 hover:bg-[#110a1b]">
            <h3 className="text-2xl font-semibold">AI Development</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
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
        className="mx-auto max-w-6xl border-t border-zinc-800 px-6 py-24"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Portfolio
        </p>

        <h2 className="mt-4 text-4xl font-bold">Мои проекты</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <p className="text-sm text-zinc-500">Проект №1</p>

            <h3 className="mt-3 text-2xl font-semibold">proektn1-dev</h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Мой личный сайт-портфолио, созданный на Next.js и Tailwind CSS.
            </p>

            <span className="mt-8 inline-block text-sm text-zinc-500">
              В разработке
            </span>
          </article>

          <article className="rounded-3xl border border-dashed border-zinc-800 p-8">
            <p className="text-sm text-zinc-500">Следующий проект</p>

            <h3 className="mt-3 text-2xl font-semibold">
              Скоро здесь появится новый проект
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Каждый новый проект будет добавляться на эту страницу.
            </p>
          </article>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-zinc-950/80 px-6 py-8 text-center text-sm text-zinc-400 backdrop-blur">
        <p>
          kreqen — i <span className="text-pink-400">♥</span> amerika
        </p>
      </footer>
    </main>
  );
}
