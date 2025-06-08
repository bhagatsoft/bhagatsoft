import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header>
        <div><strong>BhagatSoft</strong></div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Your Vision, Our Code</h1>
          <p>We build fast, clean, and modern software and websites for your business.</p>
          <div className="cta-buttons">
            <Link href="/services">Explore Services</Link>
            <Link href="/contact">Get in Touch</Link>
          </div>
        </section>

        <section>
          <h2>What We Do</h2>
          <p>From concept to deployment, BhagatSoft is your reliable tech partner. Whether you need a full-featured web app or a stunning portfolio site, we deliver top-notch solutions tailored to your needs.</p>
        </section>
      </main>

      <footer>
        <p>
          © {new Date().getFullYear()} BhagatSoft |
          <a href="mailto:bhagatsoft@proton.me"> bhagatsoft@proton.me</a> |
          <a href="https://github.com/imegeek" target="_blank" rel="noopener"> GitHub</a>
        </p>
      </footer>
    </>
  );
}
