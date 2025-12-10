function Home() {
  return (
    <div className="container mt-4 text-center">
      <h1>Explore Divination</h1>
      <p className="lead">
        Explore interactive tarot readings, memory features, and creative card
        layouts.
      </p>

      <img
        src="/images/homepic.png"
        alt="Tarot themed homepage"
        className="img-fluid mt-3 home-image"
      />

      {/* History Section */}
      <h1 className="mt-5">The Origins of Tarot</h1>
      <div className="history text-start">
        <p className="history text-start">
          <p>
            <strong>14th–15th Century</strong>
            <br />
            Playing cards first appeared in Europe in the late 1300s, likely
            introduced from China via the Islamic world. By the early 1400s,
            Italian aristocrats commissioned lavish hand‑painted decks for
            entertainment, including the famous <em>Visconti‑Sforza decks</em>.
            Around the 1430s, a new set of 22 illustrated “triumph” cards (
            <em>trionfi</em>) was added to the standard four suits, creating
            what we now call the <strong>Major Arcana</strong>.
          </p>
          <p>
            <strong>The First Complete Decks (Late 1400s)</strong>
            <br />
            The <em>Sola Busca deck</em> (c. 1490s) is the earliest surviving
            complete 78‑card Tarot deck. These early decks were primarily used
            for trick‑taking card games, not divination.
          </p>

          <p>
            <strong>Spread Across Europe (16th–17th Century)</strong>
            <br />
            Tarot became popular in France, Switzerland, and Austria. The{" "}
            <em>Tarot de Marseille</em>, a woodcut style deck, emerged in the
            1600s and became one of the most influential designs.
          </p>

          <p>
            <strong>
              Occult and Mystical Reinterpretation (18th–19th Century)
            </strong>
            <br />
            In the late 1700s, French writer <em>
              Antoine Court de Gébelin
            </em>{" "}
            claimed Tarot contained hidden wisdom from ancient Egypt, sparking
            its association with mysticism.{" "}
            <em>Etteilla (Jean‑Baptiste Alliette)</em> published one of the
            first Tarot guides for fortune‑telling, assigning meanings to
            upright and reversed cards. In the 19th century, occultists like
            <em> Éliphas Lévi</em> connected Tarot to astrology, numerology, and
            the Kabbalah.
          </p>
          <p>
            <strong>
              The Golden Dawn and Rider–Waite–Smith (Late 19th–Early 20th
              Century)
            </strong>
            <br />
            The <em>Hermetic Order of the Golden Dawn</em>, an influential
            occult society, integrated Tarot into its teachings. In 1909,{" "}
            <em>Arthur Edward Waite</em> and artist <em>Pamela Colman Smith</em>{" "}
            published the <strong>Rider–Waite–Smith deck</strong>, which
            revolutionized Tarot by illustrating all 78 cards with symbolic
            scenes. This deck remains the most widely used today.
          </p>

          <p>
            <strong>Modern Developments (20th–21st Century)</strong>
            <br />
            In the 1940s, <em>Aleister Crowley</em> and artist{" "}
            <em>Lady Frieda Harris</em> created the
            <strong> Thoth Tarot</strong>, another highly influential deck. From
            the 1960s onward, Tarot expanded into New Age spirituality,
            psychology, and self‑reflection. Today, Tarot is used worldwide for{" "}
            <strong>
              divination, meditation, storytelling, and personal growth
            </strong>
            , with thousands of artistic variations available.
          </p>
        </p>
      </div>
    </div>
  );
}

export default Home;
