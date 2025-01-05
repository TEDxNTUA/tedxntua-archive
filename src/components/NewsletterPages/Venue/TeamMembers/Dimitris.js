function Dimitris() {
    return (
        <div id="tears-in-rain" className="text-white p-6 md:p-12">
          {/* Title Section */}
      <h1 className="text-4xl font-bold">
        Tears in rain <span className="italic text-gray-400">(Δημήτρης)</span>
      </h1>

      {/* Quote Section */}
      <p className="text-lg italic">“I've seen things you people wouldn't believe... Attack ships on fire off the shoulder of Orion... I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain... Time to die.”</p>

      {/* Greek Section */}
      <p className="text-lg">
        Λέει και κλείνει τα μάτια του για τελευταία φορά, ο
        <span className="text-ephemeral-neon"> Roy Batty</span>, ο κύριος ανταγωνιστής της ταινίας
        <span className="text-ephemeral-neon"> “Blade Runner”</span>, ενώ ένα λευκό περιστέρι ξεφεύγει από τα χέρια του και πετάει μακριά.
      </p>

      {/* Thematic Section */}
      <h2 className="text-2xl font-semibold italic text-ephemeral-neon">
        Κεντρικό θέμα της ταινίας, η ανθρωπιά
      </h2>

      {/* Main Content Section */}
      <p className="text-lg">
        Κομβικό σημείο για τον Roy, όταν βλέπει τον Deckard να κρέμεται στο κενό. Φοβάται να πεθάνει, όπως και ο ίδιος...
        <span className="text-ephemeral-neon"> σύντομη ζωή</span>. Πράγματα που εμείς, και ίσως και ο ίδιος ο πρωταγωνιστής, δεν καταλαβαίνουμε.
      </p>

      {/* Image Section */}
      <div className="flex justify-center py-6">
        <img
          src="./newsletters/venue/blade-runner.png"
          alt="Blade Runner Poster"
          width={300}
          height={450}
          className="rounded-lg"
        />
      </div>

      {/* Walk Section */}
      <h2 className="text-3xl font-semibold italic">...ένα περπάτημα...</h2>

      <p className="text-lg">
        “<span className="text-ephemeral-neon">Πάω για ένα περπάτημα</span>”, λέω. Βγαίνω από το σπίτι, φοράω τα ακουστικά μου...
        <span className="text-ephemeral-neon"> Συνήθισμένη</span> γιατί δεν πάω κάπου τυχαία.
      </p>

      {/* Footer Section */}
      <p className="text-lg italic">...ένα περπάτημα...</p>
    </div>
    
      );
  }
  
  export default Dimitris;
  