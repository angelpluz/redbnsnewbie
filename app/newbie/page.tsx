import Image from "next/image";
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
import ProgressionGrid from "./ProgressionGrid";

export const metadata = {
  title: "คู่มือมือใหม่ Blade & Soul",
  description:
    "ไกด์การเริ่มเล่น Blade & Soul สำหรับผู้เล่นไทย พร้อมภาพประกอบและลำดับขั้นตอนครบถ้วน",
};

const ensureImage = (relativePath: string, fallback: string) => {
  const normalized = relativePath.replace(/^\/+/, "");
  const filePath = path.join(process.cwd(), "public", normalized);
  return fs.existsSync(filePath) ? relativePath : fallback;
};

const heroImage = ensureImage("/img/top.jpg", "/img/1.webp");

const imageLibrary = {
  1: ensureImage("/img/1.webp", heroImage),
  2: ensureImage("/img/2.webp", heroImage),
  3: ensureImage("/img/3.webp", heroImage),
  4: ensureImage("/img/4.webp", heroImage),
  5: ensureImage("/img/5.webp", heroImage),
  6: ensureImage("/img/6.webp", heroImage),
  top: heroImage,
};

const progressionSteps = [
  {
    title: "upstatus พื้นฐาน",
    description: "อัป status หลักให้พร้อมก่อนบุกดันเจี้ยน.",
    highlights: ["อัปโจมคะแนนโจมตี", "ดูองค์ประกอบข่มขู่ / พลังฮงมุน"],
    image: imageLibrary[1],
  },
  {
    title: "กดรับเควสเพื่อรับผลท้อที่แอ่งน้ำ",
    description: "จุดเริ่มต้นของการหาของเริ่มต้น.",
    highlights: ["เตรียมตัวเข้าฟาร์มแอ่งน้ำ", "ตั้ง Macro Skill ให้พร้อม"],
    image: imageLibrary[2],
  },
  {
    title: "เตรียมไปแอ่งน้ำ",
    description: "เช็กข้อมูลแผนที่และไอเทมที่ควรมีระหว่างทาง.",
    highlights: ["จำลองเส้นทางแผนที่", "ของที่ควรมีติดตัว"],
    image: imageLibrary[3],
  },
  {
    title: "ดันเจี้ยนแอ่งน้ำ",
    description: "ส่งเควส รับผลท้อ และปลดล็อกดันเจี้ยนแรก.",
    highlights: ["ส่งเควสรับท้อ 1000", "เควสเริ่มต้นที่ต้องทำ"],
    image: imageLibrary[4],
  },
  {
    title: "เควสต์ประจำวัน/สัปดาห์ แอ่งน้ำ",
    description: "ฟาร์มท้อและสะสมค่าแลกเปลี่ยนให้ไวที่สุด.",
    highlights: ["วิ่งพร้อมเพื่อนเพื่อทำเควสให้เร็ว", "เลือกเควส EXP สูงหรือข้ามภารกิจยาก"],
    image: imageLibrary[5],
  },
  {
    title: "ของที่ต้องแลก",
    description: "จัดลำดับการแลกอุปกรณ์ก่อน-หลังเพื่อให้เล่นลูทีนได้ง่าย.",
    highlights: ["เลือกอุปกรณ์สวมใส่ที่จำเป็นก่อน", "โซลชีลด์ก่อนปิดท้ายด้วยอาวุธ"],
    image: imageLibrary[6],
  },
];
export default function NewbieGuidePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-white/10 bg-black/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-sm font-semibold text-red-300 transition hover:text-white"
          >
            ← กลับหน้าหลัก
          </Link>
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Beginner Hub
          </span>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-10">
        <section className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
          <Image
            src={heroImage}
            alt="ฉากเปิด Blade & Soul"
            fill
            sizes="(max-width: 1024px) 100vw, 832px"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/30" />
          <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-10">
            <p className="text-xs uppercase tracking-[0.4em] text-red-200">
              BNS Beginner
            </p>
            <h1 className="text-4xl font-semibold leading-tight">
              เส้นทางมือใหม่: ตั้งแต่รับดาบเล่มแรกจนพร้อมลงดันเจี้ยน
            </h1>
            <p className="text-zinc-300">
              ทำตาม Step-by-Step พร้อมภาพประกอบ 6 จุดสำคัญ
              เพื่อไม่พลาดระบบใหม่และของแจกทุกวัน
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#progression"
                className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
              >
                เริ่มตามแผน
              </Link>
              <a
                href="https://discord.com"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                เข้าดิสคอร์ดผู้เล่นไทย
              </a>
            </div>
          </div>
        </section>

        <section id="progression" className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-red-300">
              Progression
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              มือใหม่ต้องทำอะไร
            </h2>
            <p className="mt-2 text-zinc-400">
              ทำตามลำดับนี้จะช่วยให้ค่าพลังถึงเกณฑ์ลงดันเจี้ยนประจำวันได้
            </p>
          </div>
          <ProgressionGrid steps={progressionSteps} />
        </section>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex-1">
              <p className="text-sm uppercase tracking-[0.3em] text-red-300">
                Daily Checklist
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                ตารางกิจกรรมมือใหม่
              </h2>
              <p className="mt-3 text-sm text-zinc-300">
                ใช้รายการนี้เป็น Template เช็กทุกวันว่าคุณทำเควสต์และกิจกรรมครบแล้ว
                หรือยัง
              </p>
              <div className="mt-6 grid gap-4 text-sm text-zinc-200 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-4">
                  <h3 className="text-base font-semibold">กิจกรรมประจำวัน</h3>
                  <ul className="mt-2 space-y-1 text-zinc-400">
                    <li>- Main Quest / Side Quest 2 เส้น</li>
                    <li>- Daily Challenge + Tower</li>
                    <li>- Rift Boss หรือ Battleground</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-4">
                  <h3 className="text-base font-semibold">ของที่ต้องมี</h3>
                  <ul className="mt-2 space-y-1 text-zinc-400">
                    <li>- ยาฟื้น HP 30+</li>
                    <li>- Soul Shield mix 3/5/8</li>
                    <li>- Charm ป้องกันธาตุ</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-3xl border border-white/10 bg-zinc-950/60 p-6">
              <h3 className="text-lg font-semibold text-white">
                ปรับ Mindset ให้พร้อม
              </h3>
              <p className="mt-3 text-sm text-zinc-300">
                จารึกเป้าหมาย 3 ข้อในสัปดาห์นี้ แล้วรีวิวความคืบหน้าทุกคืนก่อนนอน
                เพื่อไม่ให้พลาดลำดับอัปเกรด
              </p>
              <div className="mt-6 space-y-4 text-sm text-zinc-200">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="font-semibold text-red-200">Step 1</p>
                  <p>อัปอาวุธหลักถึง Stage 3 พร้อมออฟเสริม</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="font-semibold text-red-200">Step 2</p>
                  <p>เข้า guild + Discord เพื่อจับกลุ่มลง RAID</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="font-semibold text-red-200">Step 3</p>
                  <p>ทำ Challenge Mode ครบ 3 ครั้ง/สัปดาห์</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
