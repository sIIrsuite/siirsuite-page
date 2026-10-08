import { SiteLayout, SiteLink } from './components/SiteLayout.jsx';
import siirLogo from '../assets/siir.svg';
import PatternExplorer from './components/PatternExplorer.jsx';

export default function HomePage() {
  return (
    <SiteLayout site="root">
<main id="main">
<section className="hero" aria-labelledby="hero-title"><div><p className="eyebrow">Art · Maths · Programming</p><h1 id="hero-title">A little logic.<br />A little wonder.</h1><p className="intro">Exploring art through mathematics and programming. Making things to see, hear, and play with.</p><div className="actions"><a className="button primary" href="#projects">Explore the projects</a><a className="button" href="#about">About Siirsuite</a></div></div><div><PatternExplorer /><p className="caption">Two sine waves. One curve. A small experiment in seeing sound.</p></div></section>
<section className="section" id="projects"><div className="section-head"><h2>Things taking shape</h2><span className="eyebrow">01 / The first project</span></div><article className="project"><SiteLink className="project-logo" site="siir"  aria-label="Discover Siir"><img className="mark" src={siirLogo} alt="sIIr" width="150" height="100" /></SiteLink><div><span className="pill">Android</span><span className="pill">Open source</span><h3>A music observatory<br />for the curious.</h3><p>Sound has a shape. Siir lets you look closer: analyze a recording, stir music-reactive ink, or grow a melody from simple rules.</p><div className="actions"><SiteLink className="button primary" site="siir" >Discover Siir</SiteLink><a className="button" href="https://github.com/siirsuite/siir">Explore the source</a></div></div></article></section>
<section className="section"><div className="section-head"><h2>Between a rule and a feeling</h2></div><div className="principles"><article><span className="index">01 / Mathematics</span><h3>Start with a rule.</h3><p>A wave, a pattern, a simple system. Mathematics gives us a way to ask what might happen next.</p></article><article><span className="index">02 / Programming</span><h3>Let it unfold.</h3><p>Code turns an idea into something we can change, observe, and explore for ourselves.</p></article><article><span className="index">03 / Art</span><h3>See what emerges.</h3><p>A rhythm we did not expect. A shape we want to follow. Something that makes us pause and look again.</p></article></div></section>
<section className="section about" id="about"><div><p className="eyebrow">An independent exploration</p><h2>Room for curiosity.</h2></div><div><p>Siirsuite is a place for my explorations of art through maths and programming. Siir is the first of these experiments: a way to make the structures inside music visible, and to make music from structure.</p><p>The work is open source. Follow along, look under the hood, or take an idea somewhere new.</p><a href="https://github.com/siirsuite">Find Siirsuite on GitHub</a></div></section>
</main>
    </SiteLayout>
  );
}
