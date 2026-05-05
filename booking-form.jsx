// Booking form with form/whatsapp tabs, validation, success state
function BookingForm() {
  const [mode, setMode] = React.useState("form");
  const [submitted, setSubmitted] = React.useState(false);
  const [people, setPeople] = React.useState(2);
  const [data, setData] = React.useState({ name: "", phone: "", date: "", time: "20:30", notes: "" });

  React.useEffect(() => {
    const tabs = document.querySelectorAll('.form-tab');
    const handler = (e) => {
      const m = e.currentTarget.dataset.form;
      setMode(m);
      tabs.forEach(x => x.classList.toggle('active', x.dataset.form === m));
    };
    tabs.forEach(x => x.addEventListener('click', handler));
    return () => tabs.forEach(x => x.removeEventListener('click', handler));
  }, []);

  const set = (k, v) => setData(d => ({ ...d, [k]: v }));

  const peopleOptions = [2, 3, 4, 5, 6, 8, "10+"];
  const timeSlots = ["19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];

  // Default date = today
  React.useEffect(() => {
    const d = new Date();
    const iso = d.toISOString().split('T')[0];
    set("date", iso);
  }, []);

  const WEB3FORMS_KEY = "6e60f928-8c61-4396-998e-8e1e79974229"; // get free key at web3forms.com with mondo.felice@outlook.it

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!data.name || !data.phone) return;

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Prenotazione Veniu — ${data.name} · ${people} persone · ${data.date} ${data.time}`,
        from_name: "Veniu Booking Form",
        name: data.name,
        phone: data.phone,
        persone: String(people),
        data: data.date,
        orario: data.time,
        note: data.notes || "—",
      }),
    });

    setSubmitted(true);
  };

  const whatsappLink = () => {
    const msg = `Ciao Veniu! Vorrei prenotare un tavolo:%0A%0ANome: ${data.name || '...'}%0APersone: ${people}%0AData: ${data.date}%0AOrario: ${data.time}${data.notes ? '%0ANote: ' + encodeURIComponent(data.notes) : ''}`;
    return `https://wa.me/393792856777?text=${msg}`;
  };

  if (submitted) {
    return (
      <div className="booking-success">
        <div className="check-big">✓</div>
        <h3>Richiesta inviata!</h3>
        <p>Ti contattiamo entro 15 minuti per confermare il tavolo.<br/>
        Per modifiche: <a href="https://wa.me/393792856777" style={{color:'var(--ember-2)'}}>WhatsApp</a> · 0823 000 000</p>
        <button className="btn btn-ghost" style={{marginTop:24}} onClick={() => setSubmitted(false)}>Nuova prenotazione</button>
      </div>
    );
  }

  if (mode === "whatsapp") {
    return (
      <div style={{textAlign: 'center', padding: '12px 8px'}}>
        <div style={{
          width:64, height:64, borderRadius:'50%',
          background: 'oklch(0.72 0.16 145 / 0.15)',
          border: '1px solid oklch(0.72 0.16 145 / 0.5)',
          color:'var(--ok)',
          display:'inline-flex', alignItems:'center', justifyContent:'center',
          fontSize:28, marginBottom:18
        }}>●</div>
        <h3 style={{fontFamily:'var(--display)', fontSize:28, fontWeight:600, margin:'0 0 12px', letterSpacing:'-0.02em'}}>
          Scrivici su WhatsApp
        </h3>
        <p style={{color:'var(--fg-dim)', margin:'0 0 24px', maxWidth:'42ch', marginInline:'auto'}}>
          Il modo più rapido. Mandaci giorno, orario e numero di persone — confermiamo il tavolo in 15 minuti.
        </p>
        <a href="https://wa.me/393792856777?text=Ciao%20Veniu!%20Vorrei%20prenotare%20un%20tavolo" className="btn btn-whatsapp" style={{display:'inline-flex'}}>
          ● Apri WhatsApp
        </a>
        <div style={{marginTop:22, fontFamily:'var(--mono)', fontSize:11, textTransform:'uppercase', letterSpacing:'0.1em', color:'var(--fg-mute)'}}>
          o chiama · 0823 000 000
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-row">
        <div className="field">
          <label>Nome</label>
          <input type="text" placeholder="Come ti chiami?" value={data.name} onChange={e => set("name", e.target.value)} required />
        </div>
        <div className="field">
          <label>Telefono</label>
          <input type="tel" placeholder="+39 ..." value={data.phone} onChange={e => set("phone", e.target.value.replace(/[^\d\s+\-()]/g, ""))} pattern="[\d\s+\-()]{6,20}" title="Inserisci un numero di telefono valido" required />
        </div>
      </div>

      <div className="form-row single">
        <div className="field">
          <label>Quante persone?</label>
          <div className="people-pills">
            {peopleOptions.map(n => (
              <button type="button" key={n}
                className={"people-pill" + (people === n ? " active" : "")}
                onClick={() => setPeople(n)}>{n}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label>Data</label>
          <input type="date" value={data.date} onChange={e => set("date", e.target.value)} required />
        </div>
        <div className="field">
          <label>Orario</label>
          <select value={data.time} onChange={e => set("time", e.target.value)}>
            {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="form-row single">
        <div className="field">
          <label>Note (compleanno, allergie, ...)</label>
          <input type="text" placeholder="Opzionale" value={data.notes} onChange={e => set("notes", e.target.value)} />
        </div>
      </div>

      <div className="submit-row">
        <button type="submit" className="btn btn-primary">
          Prenota il tuo tavolo
          <span className="arrow">→</span>
        </button>
      </div>

      <div className="form-meta">
        <span><span className="ok">✓</span> Conferma in 15 min</span>
        <span>Annullamento libero · 2h prima</span>
      </div>
    </form>
  );
}

ReactDOM.createRoot(document.getElementById('form-content')).render(<BookingForm />);
