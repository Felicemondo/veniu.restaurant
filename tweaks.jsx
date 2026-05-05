// Tweak panel: variation knobs for the landing page
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "ember",
  "displayFont": "Playfair Display",
  "headlineVariant": "serata",
  "showStickyCta": true,
  "moreUrgency": false
}/*EDITMODE-END*/;

const ACCENTS = {
  ember:    { name: "Camel (brand)",     base: "0.66 0.09 75",  light: "0.78 0.08 80",  deep: "0.50 0.09 70" },
  crimson:  { name: "Flag Red",          base: "0.55 0.21 28",  light: "0.66 0.20 30",  deep: "0.42 0.20 25" },
  amber:    { name: "Amber caldo",       base: "0.72 0.15 70",  light: "0.84 0.13 80",  deep: "0.55 0.15 65" },
  bronze:   { name: "Bronzo profondo",   base: "0.58 0.10 60",  light: "0.72 0.09 70",  deep: "0.42 0.10 55" },
  thistle:  { name: "Thistle (cool)",    base: "0.78 0.02 320", light: "0.88 0.02 320", deep: "0.62 0.03 320" },
};

const FONTS = {
  "Playfair Display":    "Playfair Display, serif",
  "Cormorant Garamond":  "Cormorant Garamond, serif",
  "Bricolage Grotesque": "Bricolage Grotesque, sans-serif",
  "Fraunces":            "Fraunces, serif",
};

const HEADLINES = {
  serata:   { line1: "La serata che", line2: "stavi aspettando", em: "inizia da qui." },
  memoria:  { line1: "Caserta dopo", line2: "le 21 ha un",       em: "suono diverso." },
  brace:    { line1: "Brace accesa,",  line2: "luci basse,",       em: "serata vera." },
};

function VeniuTweaks() {
  const [values, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accent
  React.useEffect(() => {
    const a = ACCENTS[values.accent] || ACCENTS.ember;
    document.documentElement.style.setProperty('--ember', `oklch(${a.base})`);
    document.documentElement.style.setProperty('--ember-2', `oklch(${a.light})`);
    document.documentElement.style.setProperty('--ember-deep', `oklch(${a.deep})`);
  }, [values.accent]);

  // Apply font
  React.useEffect(() => {
    const f = FONTS[values.displayFont] || FONTS["Bricolage Grotesque"];
    document.documentElement.style.setProperty('--display', f);
    // Inject Google Font link if missing
    const id = "tweak-font-" + values.displayFont.replace(/\s+/g, '-');
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = `https://fonts.googleapis.com/css2?family=${values.displayFont.replace(/\s+/g, '+')}:wght@400;500;600;700&display=swap`;
      document.head.appendChild(link);
    }
  }, [values.displayFont]);

  // Apply headline variant
  React.useEffect(() => {
    const h = HEADLINES[values.headlineVariant] || HEADLINES.serata;
    const heroH1 = document.querySelector('.hero h1');
    if (heroH1) {
      heroH1.innerHTML = `${h.line1}<br>${h.line2}<br><em>${h.em}</em>`;
    }
  }, [values.headlineVariant]);

  // Sticky CTA
  React.useEffect(() => {
    const el = document.querySelector('.sticky-cta');
    if (el) el.style.display = values.showStickyCta ? '' : 'none';
  }, [values.showStickyCta]);

  // More urgency: swap "tonight" copy + add urgency line, use crimson for emphasis
  React.useEffect(() => {
    const t = document.querySelector('.float-tonight .text');
    if (t) {
      t.innerHTML = values.moreUrgency
        ? '<strong style="color:var(--crimson)">Solo 1 tavolo</strong> rimasto · 21:30'
        : '<strong>3 tavoli</strong> ancora liberi · 21:30';
    }
    const cred = document.querySelector('.credibility');
    if (cred) {
      let ext = cred.querySelector('.urgency-ext');
      if (values.moreUrgency && !ext) {
        ext = document.createElement('span');
        ext.className = 'urgency-ext';
        ext.style.color = 'var(--crimson)';
        ext.textContent = '· venerdì sold out';
        cred.appendChild(ext);
      } else if (!values.moreUrgency && ext) {
        ext.remove();
      }
    }
  }, [values.moreUrgency]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Identità">
        <TweakSelect label="Accento colore"
          value={values.accent}
          onChange={v => setTweak('accent', v)}
          options={Object.entries(ACCENTS).map(([k, v]) => ({ value: k, label: v.name }))} />
        <TweakSelect label="Font display"
          value={values.displayFont}
          onChange={v => setTweak('displayFont', v)}
          options={Object.keys(FONTS).map(k => ({ value: k, label: k }))} />
      </TweakSection>

      <TweakSection title="Copy">
        <TweakRadio label="Headline hero"
          value={values.headlineVariant}
          onChange={v => setTweak('headlineVariant', v)}
          options={[
            { value: 'serata', label: 'Serata' },
            { value: 'memoria', label: 'Caserta' },
            { value: 'brace', label: 'Brace' },
          ]} />
      </TweakSection>

      <TweakSection title="Conversione">
        <TweakToggle label="Sticky CTA mobile"
          value={values.showStickyCta}
          onChange={v => setTweak('showStickyCta', v)} />
        <TweakToggle label="Più urgenza (sold out, ultimo tavolo)"
          value={values.moreUrgency}
          onChange={v => setTweak('moreUrgency', v)} />
      </TweakSection>
    </TweaksPanel>
  );
}

const tweaksRoot = document.createElement('div');
document.body.appendChild(tweaksRoot);
ReactDOM.createRoot(tweaksRoot).render(<VeniuTweaks />);
