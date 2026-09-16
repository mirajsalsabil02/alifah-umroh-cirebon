import { createFileRoute } from "@tanstack/react-router";
import heroKaaba from "@/assets/hero-kaaba.jpg";
import pilgrimsGroup from "@/assets/pilgrims-group.jpg";
import madinah from "@/assets/madinah.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alifah Tour Cirebon — Biro Perjalanan & Wisata Umroh Terpercaya" },
      {
        name: "description",
        content:
          "Alifah Tour Cabang Cirebon: biro perjalanan Umroh amanah, bimbingan sesuai sunnah, hotel berkelas dekat Haram. Rating sempurna 5.0 dari jamaah nyata. Konsultasi gratis via WhatsApp.",
      },
      { property: "og:title", content: "Alifah Tour Cirebon — Umroh dengan Bimbingan Sepenuh Hati" },
      {
        property: "og:description",
        content:
          "Wujudkan kerinduan ke Baitullah bersama Alifah Tour Cabang Cirebon. Rating 5.0, hotel berkelas, bimbingan sesuai sunnah.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* --- Shared constants --- */
const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor WhatsApp resmi Alifah Tour Cirebon
const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const NAV = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Paket Umroh", href: "#paket" },
  { label: "Lokasi", href: "#lokasi" },
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 text-gold ${className}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M12 2l2.95 6.32 6.9.6-5.23 4.53 1.57 6.78L12 17.27 6.81 20.23l1.57-6.78L3.15 8.92l6.9-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <FeatureBar />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <Packages />
        <LeadForm />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ============================= HEADER ============================= */
function Header() {
  return (
    <header
      id="beranda"
      className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#beranda" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-lg font-bold text-primary-foreground shadow-card">
            ﷽
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-lg font-bold text-primary">Alifah Tour</span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Cabang Cirebon
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="hidden text-sm font-semibold text-primary sm:block"
          >
            0812-3456-7890
          </a>
          <a
            href={waLink("Assalamualaikum, saya ingin konsultasi tentang paket Umroh Alifah Tour Cirebon.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition hover:brightness-110"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Konsultasi Gratis</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/* ============================= HERO ============================= */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroKaaba}
          alt="Ka'bah di Masjidil Haram, Makkah"
          width={1280}
          height={1600}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/80 to-primary-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent to-primary-deep/40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Rating Sempurna 5.0 dari 13 Jamaah
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-balance text-primary-foreground sm:text-5xl lg:text-6xl">
            Wujudkan Kerinduan ke Baitullah Bersama Bimbingan Sepenuh Hati &amp; Penuh Berkah
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Alifah Tour Cabang Cirebon menemani perjalanan suci Anda dengan layanan amanah,
            hotel berkelas dekat Haram, dan bimbingan ibadah sesuai sunnah. Berangkat tenang,
            pulang dengan hati yang berseri.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#paket"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-gold-foreground shadow-elegant transition hover:brightness-105"
            >
              Lihat Paket Umroh
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href={waLink("Assalamualaikum, saya ingin konsultasi gratis tentang jadwal keberangkatan Umroh.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-7 py-3.5 text-sm font-bold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Konsultasi Gratis via WhatsApp
            </a>
          </div>

          <p className="mt-6 text-xs font-medium text-primary-foreground/60">
            Terdaftar resmi · Bimbingan manasik lengkap · Pendampingan dari Cirebon sampai Tanah Suci
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================= FEATURE BAR ============================= */
function FeatureBar() {
  const items = [
    { title: "100% Kepastian", desc: "Visa & tiket terjamin" },
    { title: "Hotel Berkelas", desc: "Dekat Masjidil Haram" },
    { title: "Bimbingan Sunnah", desc: "Pembimbing berpengalaman" },
    { title: "5.0 / 5.0 Rating", desc: "13 ulasan jamaah nyata" },
  ];
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((it) => (
          <div key={it.title} className="flex items-center gap-3 py-5 lg:justify-center">
            <CheckIcon className="h-6 w-6 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-bold text-foreground">{it.title}</p>
              <p className="text-xs text-muted-foreground">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================= ABOUT ============================= */
function About() {
  const values = [
    { title: "Amanah & Pasti", desc: "Setiap dana jamaah dikelola dengan transparan. Keberangkatan dijamin sesuai jadwal." },
    { title: "Sesuai Sunnah", desc: "Ibadah umroh dilakukan mengikuti tuntunan Rasulullah ﷺ dengan pembimbing berkompeten." },
    { title: "Pelayanan Sepenuh Hati", desc: "Tim merawat setiap jamaah layaknya keluarga sendiri, dari proses manasik hingga kepulangan." },
    { title: "Kenyamanan Tanpa Khawatir", desc: "Akomodasi, transportasi, dan konsumsi disiapkan terbaik agar fokus beribadah." },
  ];
  return (
    <section id="tentang" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={pilgrimsGroup}
                alt="Jamaah Alifah Tour Cabang Cirebon"
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card p-5 shadow-card sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                  <ShieldIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-primary">5.0</p>
                  <Stars />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Tentang Kami
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-balance text-foreground sm:text-4xl">
              Mengenal Alifah Tour Cabang Cirebon
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Alifah Tour Cabang Cirebon hadir sebagai sahabat perjalanan ibadah Anda. Kami
              memahami bahwa Umroh bukan sekadar perjalanan fisik, melainkan panggilan jiwa
              untuk kembali kepada Allah. Karena itulah, kami menghadirkan layanan yang
              amanah, tertib, dan penuh keberkahan.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Berlokasi di jantung Kota Cirebon, kami siap melayani calon jamaah di Cirebon
              dan sekitarnya dengan pendampingan menyeluruh — mulai dari pendaftaran,
              bimbingan manasik, keberangkatan, hingga kepulangan dengan selamat.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-border bg-card p-5 shadow-card"
                >
                  <div className="mb-2 flex items-center gap-2 text-primary">
                    <CheckIcon className="h-5 w-5" />
                    <h3 className="font-heading text-base font-bold text-foreground">{v.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================= WHY CHOOSE US ============================= */
function WhyChooseUs() {
  const reasons = [
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Kantor Resmi di Cirebon",
      desc: "Pusat layanan berlokasi di Kesambi, Cirebon — mudah dikunjungi untuk konsultasi langsung dan administrasi tanpa perantara.",
    },
    {
      icon: <StarIcon className="h-6 w-6" />,
      title: "Rating Sempurna 5.0",
      desc: "Dari 13 ulasan jamaah nyata, kami meraih bintang penuh. Kepercayaan ini kami jaga dengan kualitas layanan yang konsisten.",
    },
    {
      icon: <HomeIcon className="h-6 w-6" />,
      title: "Hotel Strategis & Berkelas",
      desc: "Akomodasi dekat dengan Masjidil Haram dan Masjid Nabawi, sehingga jamaah lebih leluasa beribadah dan beristirahat.",
    },
    {
      icon: <BookIcon className="h-6 w-6" />,
      title: "Pembimbing Berpengalaman",
      desc: "Muthawif dan pembimbing yang memahami manasik sesuai sunnah, siap membimbing setiap langkah ibadah Anda.",
    },
  ];
  return (
    <section id="keunggulan" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">Keunggulan Kami</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-balance text-foreground sm:text-4xl">
            Mengapa Jamaah Cirebon Memilih Kami?
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Bukan sekadar menjual paket perjalanan, kami menjaga amanah ibadah Anda dari
            awal hingga akhir dengan sepenuh hati.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground transition group-hover:bg-gold group-hover:text-gold-foreground">
                {r.icon}
              </div>
              <p className="mt-5 font-heading text-xs font-bold tracking-wider text-muted-foreground">
                0{i + 1}
              </p>
              <h3 className="mt-1 font-heading text-xl font-bold text-foreground">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================= TESTIMONIALS ============================= */
function Testimonials() {
  const reviews = [
    {
      name: "Hj. Siti Aminah",
      meta: "Jamaah Umroh Reguler",
      text: "Alhamdulillah, ibadah umroh berjalan lancar. Pembimbingnya sabar dan sangat membantu. Hotel dekat dengan Haram. Pasti rekomendasi ke keluarga di Cirebon.",
    },
    {
      name: "Bpk. Ahmad Fauzi",
      meta: "Jamaah Umroh VIP",
      text: "Pelayanan profesional dan amanah. Dari manasik sampai kepulangan semua tertata rapi. Bikin keluarga tenang beribadah tanpa khawatir urusan teknis.",
    },
    {
      name: "Ibu Nurhayati",
      meta: "Jamaah Umroh Ramadhan",
      text: "Pengalaman berkesan. Tim Alifah Tour Cirebon merawat kami seperti keluarga sendiri. Barakallah, semoga semakin banyak jamaah yang diberkahi.",
    },
  ];
  return (
    <section id="testimoni" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">Kata Jamaah</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-balance text-foreground sm:text-4xl">
            Apa Kata Jamaah Nyata Kami?
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Stars className="text-lg" />
            <span className="font-heading text-2xl font-bold text-primary">5.0</span>
            <span className="text-sm text-muted-foreground">dari 13 ulasan</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft font-heading text-base font-bold text-primary">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.meta}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Ingin melihat ulasan lainnya?{" "}
          <a
            href="https://www.google.com/search?q=Alifah+Tour+Cabang+Cirebon+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline underline-offset-4 hover:text-gold"
          >
            Lihat semua ulasan Google →
          </a>
        </p>
      </div>
    </section>
  );
}

/* ============================= PACKAGES ============================= */
function Packages() {
  const paket = [
    {
      name: "Umroh Reguler Barokah",
      price: "Rp 28.500.000",
      durasi: "9 Hari",
      featured: false,
      fitur: [
        "Tiket pesawat PP (kelas ekonomi)",
        "Hotel bintang 3 dekat Haram",
        "Bimbingan manasik lengkap",
        "Pembimbing berpengalaman",
        "Bus AC ziarah Makkah & Madinah",
        "Konsumsi & perlengkapan umroh",
      ],
    },
    {
      name: "Umroh VIP Khidmat",
      price: "Rp 36.900.000",
      durasi: "11 Hari",
      featured: true,
      fitur: [
        "Tiket pesawat PP (kelas premium)",
        "Hotel bintang 4-5 dekat Haram",
        "Bimbingan manasik privat",
        "Muthawif eksklusif per kelompok",
        "Bus AC ziarah + handling bandara VIP",
        "Konsumsi premium & perlengkapan lengkap",
      ],
    },
    {
      name: "Umroh Ramadhan & Syawal",
      price: "Rp 39.500.000",
      durasi: "12 Hari",
      featured: false,
      fitur: [
        "Keberangkatan musim Ramadhan",
        "Hotel bintang 4 dekat Haram",
        "Ibadah Umroh + ibadah Ramadhan",
        "Bimbingan khusus Ramadhan & i'tikaf",
        "Bus AC ziarah Makkah & Madinah",
        "Konsumsi sahur & iftar setiap hari",
      ],
    },
  ];
  return (
    <section id="paket" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">Pilihan Paket</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-balance text-foreground sm:text-4xl">
            Pilihan Paket Umroh Unggulan
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Pilih paket yang paling sesuai dengan kebutuhan dan keberkahan ibadah Anda. Semua
            paket sudah termasuk layanan berstandar Alifah Tour Cirebon.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {paket.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:shadow-elegant ${
                p.featured ? "border-primary ring-2 ring-primary/20" : "border-border"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground shadow-card">
                  Paling Diminati
                </span>
              )}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={p.featured ? heroKaaba : madinah}
                  alt={p.name}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-36 w-full object-cover"
                />
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">Durasi {p.durasi}</p>
              <p className="mt-4 font-heading text-3xl font-bold text-primary">{p.price}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.fitur.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-foreground/85">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Assalamualaikum, saya tertarik dengan paket ${p.name} (${p.price}). Mohon info jadwal keberangkatan selanjutnya.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                <WhatsAppIcon className="h-4 w-4" />
                Tanya Paket Ini
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          *Harga dapat berubah sewaktu-waktu mengikuti tarif penerbangan &amp; musim. Hubungi kami
          untuk penawaran terkini dan jadwal keberangkatan.
        </p>
      </div>
    </section>
  );
}

/* ============================= LEAD FORM ============================= */
function LeadForm() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-primary-soft shadow-card">
          <div className="grid lg:grid-cols-2">
            <div className="p-9 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                Konsultasi Gratis
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-balance text-foreground sm:text-4xl">
                Masih Bingung Memilih Paket atau Jadwal Keberangkatan?
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Tim Alifah Tour Cabang Cirebon siap membantu Anda. Kirimkan data Anda, dan kami
                akan mengirimkan brosur lengkap beserta jadwal keberangkatan terdekat — tanpa
                biaya konsultasi.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-foreground/85">
                {["Brosur paket lengkap via WhatsApp", "Jadwal keberangkatan terbaru", "Saran paket sesuai kebutuhan & budget"].map(
                  (t) => (
                    <li key={t} className="flex gap-2.5">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{t}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <form
              className="space-y-4 bg-card p-9 sm:p-12"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const fd = new FormData(form);
                const nama = fd.get("nama");
                const telepon = fd.get("telepon");
                const pesan = fd.get("pesan");
                const text = `Assalamualaikum, saya ${nama} (${telepon}). Saya ingin mendapatkan brosur & konsultasi Umroh. ${pesan ?? ""}`;
                window.open(waLink(text), "_blank");
              }}
            >
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-foreground">Nama Lengkap</label>
                <input
                  name="nama"
                  required
                  placeholder="Nama Anda"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-foreground">No. WhatsApp</label>
                <input
                  name="telepon"
                  type="tel"
                  required
                  placeholder="0812-xxxx-xxxx"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-foreground">Pertanyaan / Paket yang Diminati</label>
                <textarea
                  name="pesan"
                  rows={3}
                  placeholder="Contoh: saya tertarik paket Umroh Reguler untuk keberangkatan tahun depan."
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-card transition hover:brightness-110"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Dapatkan Brosur &amp; Konsultasi Sekarang
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Dengan mengirim, Anda menyetujui untuk dihubungi via WhatsApp oleh tim kami.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================= LOCATION ============================= */
function Location() {
  const address =
    "Gg. Lapang Bola II Dalam No.113, Drajat, Kec. Kesambi, Kota Cirebon, Jawa Barat 45133";
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    "Alifah Tour Cirebon, " + address
  )}&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Alifah Tour Cirebon, " + address
  )}`;

  return (
    <section id="lokasi" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">Kunjungi Kami</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-balance text-foreground sm:text-4xl">
              Kunjungi Kantor Resmi Cabang Cirebon
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Tim kami siap menyambut Anda untuk konsultasi langsung mengenai rencana ibadah
              umroh. Datang ke kantor kami, atau hubungi via WhatsApp untuk membuat janji.
            </p>

            <div className="mt-8 space-y-5">
              <InfoRow icon={<MapPinIcon className="h-5 w-5" />} title="Alamat Kantor">
                {address}
              </InfoRow>
              <InfoRow icon={<ClockIcon className="h-5 w-5" />} title="Jam Operasional">
                Senin – Sabtu, 08.00 – 17.00 WIB
                <br />
                Ahad &amp; Hari Besar: Tutup / Sesuai Janji
              </InfoRow>
              <InfoRow icon={<WhatsAppIcon className="h-5 w-5" />} title="Kontak">
                0812-3456-7890 · WhatsApp tersedia
              </InfoRow>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-card transition hover:brightness-110"
              >
                <MapPinIcon className="h-4 w-4" />
                Buka di Google Maps
              </a>
              <a
                href={waLink("Assalamualaikum, saya ingin membuat janji kunjungan ke kantor Alifah Tour Cirebon.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-bold text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Buat Janji Kunjungan
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
            <iframe
              title="Lokasi Alifah Tour Cabang Cirebon"
              src={mapEmbed}
              className="h-[380px] w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================= FOOTER ============================= */
function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-foreground text-primary shadow">
                ﷽
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-heading text-lg font-bold">Alifah Tour</span>
                <span className="text-[11px] font-medium uppercase tracking-wider text-primary-foreground/70">
                  Cabang Cirebon
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              Biro perjalanan dan wisata Umroh amanah untuk jamaah Cirebon dan sekitarnya.
              Berangkat dengan tenang, pulang penuh berkah.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href="https://www.facebook.com/alifahtourcirebon/" label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/niaryunialifah/" label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={waLink("Assalamualaikum, saya ingin bertanya tentang paket Umroh.")} label="WhatsApp">
                <WhatsAppIcon className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-gold-soft">
              Navigasi
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition hover:text-gold">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-gold-soft">
              Kontak &amp; Alamat
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
              <li className="flex gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>
                  Gg. Lapang Bola II Dalam No.113, Drajat, Kec. Kesambi, Kota Cirebon, Jawa Barat 45133
                </span>
              </li>
              <li className="flex gap-3">
                <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>0812-3456-7890</span>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>Senin – Sabtu, 08.00 – 17.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Alifah Tour Cabang Cirebon. Bismillah, semoga setiap
          langkah ibadah diberkahi.
        </div>
      </div>
    </footer>
  );
}

/* ============================= FLOATING WA ============================= */
function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Assalamualaikum, saya ingin konsultasi tentang paket Umroh Alifah Tour Cirebon.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Konsultasi via WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant transition hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

/* ============================= SMALL HELPERS ============================= */
function InfoRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
        {icon}
      </span>
      <div>
        <p className="font-heading text-base font-bold text-foreground">{title}</p>
        <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground transition hover:bg-gold hover:text-gold-foreground"
    >
      {children}
    </a>
  );
}

/* ============================= ICONS ============================= */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.039zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={3} aria-hidden>
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2l2.95 6.32 6.9.6-5.23 4.53 1.57 6.78L12 17.27 6.81 20.23l1.57-6.78L3.15 8.92l6.9-.6L12 2z" />
    </svg>
  );
}
function HomeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M3 11l9-8 9 8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function BookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M4 5a2 2 0 012-2h12v18H6a2 2 0 01-2-2V5z" strokeLinejoin="round" />
      <path d="M4 19a2 2 0 012-2h12" strokeLinejoin="round" />
    </svg>
  );
}
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8v8.44C19.61 23.08 24 18.09 24 12.07z" />
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default Index;
