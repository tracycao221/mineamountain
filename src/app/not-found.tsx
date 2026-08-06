import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <section className="page-intro">
        <span className="mini-label">404</span>
        <h1 className="mt-3 text-4xl font-extrabold text-white">This route is not on the mountain</h1>
        <p className="mt-4 max-w-2xl leading-7 text-white/68">The page may have moved while overlapping guides were consolidated. Use a current destination below.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="button-primary">Home</Link>
          <Link href="/guides/" className="button-secondary">Guides</Link>
          <Link href="/wiki/" className="button-secondary">Wiki</Link>
          <Link href="/contact/" className="button-secondary">Report a broken link</Link>
        </div>
      </section>
    </main>
  );
}
