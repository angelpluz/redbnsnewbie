import Link from "next/link";

const navLinks = [
  { label: "หน้าแรก", href: "#" },
  { label: "แนวทางเล่น", href: "#guides" },
  { label: "ร้านค้า", href: "#store" },
  { label: "ข่าวสาร", href: "#news" },
];

const trailerLink = "https://www.youtube.com/watch?v=rqAdB97ckuY";

const guides = [
  {
    title: "เริ่มเกมทำอะไรดี",
    description: "เริ่มต้นยังไง ฟาร์มของที่ไหน.",
    badge: "มือใหม่ต้องดู",
    href: "/newbie",
  },
  {
    title: "นักเวทธาตุ",
    description: "ปรับจังหวะสกิล AoE เพื่อเคลียร์ดันเจี้ยนอย่างมีสไตล์.",
    badge: "Raid Essentials",
  },
  {
    title: "มือใหม่หัดฉีดยา",
    description: "แนวคิด build support สำหรับปาร์ตี้ที่ยังไม่ครบคลาส.",
    badge: "Starter",
  },
];

const timeline = [
  {
    title: "บทนำ",
    text: "อธิบายโลกของ BnS และระบบอาวุธ/วิญญาณ",
  },
  {
    title: "ระบบต่อสู้",
    text: "ฝึก timing เคาน์เตอร์ การหลบ และสลับท่า stance",
  },
  {
    title: "อุปกรณ์ขั้นสูง",
    text: "ปลุกพลังอาวุธข้าม tier พร้อมไกด์ฟาร์มวัสดุ",
  },
  {
    title: "คอนเทนต์กิลด์",
    text: "วางกลยุทธ์สงครามกิลด์และกิจกรรม seasonal",
  },
];

const socialLinks = [
  { label: "YouTube", href: "https://youtube.com", handle: "@bns-academy" },
  { label: "Discord", href: "https://discord.com", handle: "BladeSoulTH" },
  { label: "Facebook", href: "https://facebook.com", handle: "BNS Journal" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="relative z-10 border-b border-white/10 bg-zinc-950/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-red-600 font-semibold">
              BnS
            </div>
            <div className="text-sm text-zinc-400">Blade &amp; Soul Journal</div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-zinc-300 md:flex">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            <button className="hidden rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 md:block">
              ดาวน์โหลด PC
            </button>
            <button className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500">
              เริ่มต้นเล่น
            </button>
          </div>
        </div>
      </header>

      <main className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(5,5,5,0.8), rgba(0,0,0,0.95)), url('/img/top.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <section className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-16 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.3em] text-red-300">
              Blade &amp; Soul
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white lg:text-5xl">
              บทสรุปและคู่มือสนามรบที่คุณหาไม่ได้จาก patch note
            </h1>
            <p className="mt-6 text-lg text-zinc-300">
              เก็บข้อมูลเมต้า สรุปดันเจี้ยนรายสัปดาห์ และสูตร build ที่ใช้จริง
              จากผู้เล่นไทย ก้าวทันทุกเทศกาลและอัปเดตแบบวันต่อวัน
            </p>
            <div className="mt-8 flex flex-col gap-4 text-sm text-zinc-200 sm:flex-row">
              <button className="rounded-full bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/25">
                ดู Roadmap ล่าสุด
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white/80 transition hover:border-white hover:text-white">
                สมัครแจ้งเตือนข่าว
              </button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 text-xs uppercase tracking-wider text-zinc-400 sm:grid-cols-4">
              <div>
                <div className="text-2xl font-semibold text-white">10+</div>
                Patch Highlights
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">25</div>
                Class Guides
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">3k+</div>
                Daily Players
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">2016</div>
                Since
              </div>
            </div>
          </div>

          <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-2xl shadow-red-900/30 backdrop-blur">
            <a
              href={trailerLink}
              target="_blank"
              rel="noreferrer"
              className="relative block overflow-hidden rounded-2xl bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
            >
              <div
                className="h-64 w-full"
                style={{
                  backgroundImage: "url('/img/top.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <span className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-orange-400 to-red-600 text-xl font-bold text-white shadow-lg shadow-black/40 transition hover:scale-105">
                ▶
              </span>
            </a>
            <div className="mt-5">
              <h3 className="text-xl font-semibold">มือใหม่ต้องทำอะไร</h3>
              <p className="mt-2 text-sm text-zinc-300">
                ดูได้ในคลิปนี้ &quot;&quot; พร้อมไกด์การเตรียมตัว
              </p>
              <a
                href={trailerLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-red-300 hover:text-red-200"
              >
                เปิดดูใน YouTube →
              </a>
            </div>
          </div>
        </section>

        <section id="guides" className="relative z-10 bg-zinc-50/5">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 sm:grid-cols-3">
            {guides.map((guide) => {
              const article = (
                <article
                  className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition ${
                    guide.href
                      ? "hover:-translate-y-1 hover:bg-white/15"
                      : "opacity-95"
                  }`}
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-orange-300">
                    {guide.badge}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {guide.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-300">
                    {guide.description}
                  </p>
                  <span className="mt-6 inline-flex text-sm font-semibold text-red-300 hover:text-red-200">
                    {guide.href ? "อ่านต่อ →" : "เร็วๆ นี้"}
                  </span>
                </article>
              );

              return guide.href ? (
                <Link
                  key={guide.title}
                  href={guide.href}
                  className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
                >
                  {article}
                </Link>
              ) : (
                <div key={guide.title}>{article}</div>
              );
            })}
          </div>
        </section>

        {/* <section
          id="news"
          className="relative z-10 border-t border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row">
            <div className="flex-1">
              <p className="text-sm uppercase tracking-[0.3em] text-red-300">
                Lore Digest
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">เรื่องราว</h2>
              <p className="mt-4 text-zinc-300">
                ในวันที่ได้รับการยอมรับเป็นศิษย์อย่างเป็นทางการของสำนักธงมุน
                บนเขาเห็นฟ้าที่สงบสุขมาตลอด อาจารย์และเหล่าศิษย์พี่ต่างก็ถูกจินซอยอน
                และพรรคพวกสังหาร
              </p>
              <p className="mt-4 text-zinc-400">
                เราเรียบเรียงเหตุการณ์และตัวละครสำคัญให้อ่านจบภายใน 10 นาที
                เข้าใจแรงจูงใจตัวร้ายและบทสรุปของทุกอำนาจภายในซีซันเดียว
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-zinc-300">
                <span className="h-px w-12 bg-zinc-600" />
                ติดตามบทใหม่ทุกวันพุธ
              </div>
            </div>
            <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40">
              <h3 className="text-xl font-semibold">Road to Master Class</h3>
              <p className="mt-2 text-sm text-zinc-300">
                โครงสร้างบทเรียนที่จะทยอยปล่อยในอีกไม่กี่สัปดาห์ต่อจากนี้
              </p>
              <ol className="mt-6 space-y-6">
                {timeline.map((item, index) => (
                  <li key={item.title} className="relative pl-10">
                    <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-xs font-semibold text-red-300">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-sm text-zinc-400">{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section> */}

        {/* <section
          id="store"
          className="relative z-10 border-t border-white/10 bg-zinc-900/80 px-6 py-16"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-800/70 to-zinc-900/80 p-10 shadow-2xl shadow-black/50 lg:flex-row">
            <div className="flex-1">
              <p className="text-sm uppercase tracking-[0.3em] text-red-300">
                Toolkit
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                ศูนย์รวมไฟล์และเครื่องมือ
              </h2>
              <p className="mt-4 text-zinc-300">
                โหลด macro template, overlay สำหรับสตรีม และไฟล์ build planner
                ที่เราออกแบบให้ใช้งานได้ทั้ง mobile และ PC
              </p>
            </div>
            <div className="flex flex-1 flex-wrap items-center gap-4">
              {["App Store", "Google Play", "BlueStacks", "Epic Games"].map(
                (store) => (
                  <button
                    key={store}
                    className="flex flex-1 items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-left text-sm text-white transition hover:bg-white/20 min-w-[150px]"
                  >
                    <span>{store}</span>
                    <span className="text-xs text-white/70">ดาวน์โหลด</span>
                  </button>
                ),
              )}
            </div>
          </div>
        </section> */}

        {/* <section className="relative z-10 border-t border-white/10 bg-zinc-950 px-6 py-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl border border-white/5 bg-white/5 p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-red-300">
                Community
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                เชื่อมต่อกับชุมชน
              </h2>
              <p className="mt-4 text-zinc-300">
                เข้าร่วมไลฟ์ Q&amp;A และชุมชนผู้เล่นภาษาไทยที่พร้อมแบ่งปัน build
                ทุกระดับ
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border border-white/10 bg-zinc-900/80 px-6 py-5 text-white transition hover:border-red-400 hover:text-red-200"
                >
                  <div className="text-sm uppercase tracking-wide text-zinc-400">
                    {item.label}
                  </div>
                  <div className="mt-2 text-xl font-semibold">{item.handle}</div>
                  <div className="mt-3 text-xs text-zinc-500">
                    กดเพื่อติดตามข่าวสารทันที
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      {/* <footer className="border-t border-white/10 bg-black/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-6 text-xs text-zinc-500 sm:flex-row sm:justify-between">
          <div>© {new Date().getFullYear()} Blade &amp; Soul Chronicle</div>
          <div className="flex gap-4">
            <a href="#">เครติตทีมงาน</a>
            <a href="#">นโยบายส่วนตัว</a>
            <a href="#">ติดต่อ</a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
