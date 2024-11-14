import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* image ka aik tag band kiya hai aur baqi ko set krna hai  bs yhi  aur baki link ko bhi dekh lein gay */}
      {/* baqi outline aur banner white aur dark blue puchu ga */}
      {/* acha agar tailwind say na hua to us kay blocks utha lein gy */}
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="#" className="nav__logo">Abbas</a>
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
              <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
              <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
              <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
              <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className='bx bx-menu'></i>
          </div>
        </nav>
      </header>

      <main className="l-main">
        {/* <!--===== HOME =====--> */}
        <section className="home bd-grid" id="home">
          <div className="home__data">
            <h1 className="home__title">Hi,<br />I'm <span className="home__title-color">Abbas</span><br /> Next.js Developer</h1>

            <a href="https://www.linkedin.com/in/abbas-asad" className="button">Contact</a>
          </div>

          <div className="home__social">
            <a href="https://www.linkedin.com/in/abbas-asad" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
            <a href="https://www.youtube.com/@abbastech07" className="home__social-icon"><i className='bx bxl-youtube' ></i></a>
            <a href="https://github.com/abbas-asad" className="home__social-icon"><i className='bx bxl-github' ></i></a>
          </div>

          <div className="home__img">
            {/* <svg className="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <mask id="mask0" mask-type="alpha">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" /> */}
            <Image width={360} height={390} className="home__blob-img mb-32" src="/assets/about.png" alt="" />
            {/* <Image width={5} height={5} className="home__blob-img" x="50" y="60" src="/assets/perfil.png" /> */}
            {/* </g>
            </svg> */}
          </div>
        </section>

        {/* <!--===== ABOUT =====--> */}
        <section className="about section " id="about">
          <h2 className="section-title">About</h2>

          <div className="about__container bd-grid">
            <div className="about__img">
              <Image width={1000} height={1000} src="/assets/about.png" alt="" />
            </div>

            <div>
              <h2 className="about__subtitle">I'm Abbas</h2>
              <p className="about__text">Next.js developer focused on building responsive, SEO-friendly applications with optimal performance. Experienced in server-side rendering, data handling, and crafting seamless user experiences. Dedicated to continuous learning and delivering high-quality results.</p>
            </div>
          </div>
        </section>

        {/* <!--===== SKILLS =====--> */}
        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>

          <div className="skills__container bd-grid">
            <div>
              <h2 className="skills__subtitle">Professional Skills</h2>
              <p className="skills__text">A passionate front-end developer focused on crafting clean, intuitive user experiences through efficient and appealing code.</p>
              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-javascript skills__icon'></i>
                  <span className="skills__name">JAVASCRIPT</span>
                </div>
                <div className="skills__bar skills__html">

                </div>
                <div>
                  <span className="skills__percentage">95%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-react skills__icon'></i>
                  <span className="skills__name">REACT</span>
                </div>
                <div className="skills__bar skills__css">

                </div>
                <div>
                  <span className="skills__percentage">85%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-bootstrap skills__icon' ></i>
                  <span className="skills__name">BOOTSTRAP</span>
                </div>
                <div className="skills__bar skills__js">

                </div>
                <div>
                  <span className="skills__percentage">65%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-nodejs skills__icon'></i>
                  <span className="skills__name">NODE.JS</span>
                </div>
                <div className="skills__bar skills__ux">

                </div>
                <div>
                  <span className="skills__percentage">85%</span>
                </div>
              </div>
            </div>

            <div>
              <Image width={500} height={500} src="/assets/work3.avif" alt="" className="skills__img" />
            </div>
          </div>
        </section>

        {/* <!--===== WORK =====--> */}
        <section className="work section" id="work">
          <h2 className="section-title">Work</h2>

          <div className="work__container bd-grid">
            <a href="" className="work__img">
              <Image width={1000} height={1000} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} src="/assets/work1.jpg" alt="" />
            </a>
            <a href="" className="work__img">
              <Image width={1000} height={1000} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} src="/assets/work2.jpg" alt="" />
            </a>
            <a href="" className="work__img">
              <Image width={1000} height={1000} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} src="/assets/myfault.jpg" alt="" />
            </a>
            <a href="" className="work__img">
              <Image width={1000} height={1000} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} src="/assets/work4.jpg" alt="" />
            </a>
            <a href="" className="work__img">
              <Image width={1000} height={1000} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} src="/assets/work5.jpg" alt="" />
            </a>
            <a href="" className="work__img">
              <Image width={1000} height={1000} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} src="/assets/work6.jpg" alt="" />
            </a>
          </div>
        </section>

        {/* <!--===== CONTACT =====--> */}
        <section className="contact section" id="contact">
          <h2 className="section-title">Contact</h2>

          <div className="contact__container bd-grid">
            <form action="" className="contact__form">
              <input type="text" placeholder="Name" className="contact__input" />
              <input type="mail" placeholder="Email" className="contact__input" />
              <textarea name="" id="" cols={0} rows={10} className="contact__input"></textarea>
              <input type="button" value="Send Message" className="contact__button button" />
            </form>
          </div>
        </section>
      </main>

      {/* <!--===== FOOTER =====--> */}
      <footer className="footer">
        <p className="footer__title">Abbas</p>
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/abbas-asad" className="footer__icon"><i className='bx bxl-linkedin' ></i></a>
          <a href="https://www.youtube.com/@abbastech07" className="footer__icon"><i className='bx bxl-youtube' ></i></a>
          <a href="https://github.com/abbas-asad" className="footer__icon"><i className='bx bxl-github' ></i></a>
        </div>
        <p className="footer__copy">&#169; 2024 Abbas Asad Portfolio. All rigths reserved</p>
      </footer>

    </>
  );
}
