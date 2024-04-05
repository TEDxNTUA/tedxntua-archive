import Image from "next/image";

function Nagia() {
  return (
    <div id="Nagia">
      <p className="my-8 italics text-md md:text-base underline 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-justify">
        H <span className="font-bold">Νάγια</span> εξηγεί πώς μια απόφαση της
        άλλαξε την ζωή της!
      </p>
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row lg:gap-8 items-center lg:items-start">
          <p>
            Μερικές φορές ξεχνάω ότι πριν ένα μήνα είχα μια ζωή σε μια άλλη
            χώρα. Τον Σεπτέμβριο του 2023, με τρεις σχεδόν υπέρβαρες βαλίτσες
            και μία backpack, ξέροντας τα βασικά, ξεκίνησα να φτιάχνω μια
            «προσωρινή» ζωή στο <span className="text-our-red">Μιλάνο</span>.
            Έπρεπε να μάθω ξανά νέες συνήθειες, μια νέα κουλτούρα, ένα νέο
            πανεπιστήμιο, να βρω τους ανθρώπους μου, να ενταχθώ, να στήσω τον
            χώρο που θα αποκαλούσα σπίτι. Και όλα αυτά έγιναν,{" "}
            <span className="text-our-red">με άλλαξαν</span>, και ένα κομμάτι
            της ζωής μου θα ανήκει για πάντα σε εκείνο το δωμάτιο, σε εκείνους
            τους δρόμους που βόλταρα, που πλέον έγιναν η συνήθεια μου, σε εκείνη
            την πόλη που μου πρόσφερε τόσα πολλά.
          </p>
          <img
            src="./newsletters/experience/tedxntua_milano.jpeg"
            alt="Nagia"
            className="w-[50%] lg:w-[25%] h-auto max-w-[2268px]"
          />
        </div>

        <div>
          <p>
            Δεν είναι εύκολο να αφήνεις πίσω ότι ξέρεις για να μάθεις κάτι
            καινούργιο, πόσο μάλλον αν είναι κάτι{" "}
            <span className="text-our-red">εφήμερο</span>. Πολλοί θα πουν «Δε
            βαριέσαι, σε λίγους μήνες θα είσαι πίσω στη βάση σου», ή κάτι
            ανάλογο. Εγώ θα πω πως <span className="text-our-red">αξίζει</span>,
            όσο και αν κρατήσει. Είναι μια πρόκληση του εαυτού σου, στο πλέγμα
            της επιβίωσης και της ανάπτυξης σου.
          </p>
          <p>
            <br />
          </p>
          <p>
            Στο τέλος, θα τα μαζέψεις όλα στις πλέον υπέρβαρες βαλίτσες, και
            όπου και αν πας, ότι έχεις μάθει στην «προσωρινή» σου εκείνη ζωή{" "}
            <span className="text-our-red">θα είναι μαζί σου</span>.
          </p>
        </div>
        <div className="mt-2 mb-10">
          <hr className="bg-white h-1" />
          <p className="text-our-red text-xl lg:text-2xl my-2 font-bold px-5">
            “Για να ταξιδέψουμε στη Δύναμη του Τώρα, θα χρειαστεί να αφήσουμε
            πίσω μας τον αναλυτικό μας νου.”
          </p>
          <hr className="bg-white h-1" />
        </div>
      </div>
    </div>
  );
}

export default Nagia;
