function Giannis() {
  return (
    <div id="Giannis">
      <div className="w-full flex flex-col gap-6 text-justify">
        <div className="mt-5 mb-10">
          <hr className="bg-white h-1" />
          <p className="text-ephemeral-neon text-xl text-center lg:text-2xl my-2 font-bold px-10 py-4">
            “Suggestions”
          </p>
          <hr className="bg-white h-1" />
        </div>
        <p className="underline">
          Είμαι ο <span className="font-semibold">Γιάννης</span> και είπα να σας βάλω κάτι χρήσιμο στο σημερινό unmuted! Οπότε ορίστε 6 μέρη
          που θα πρότεινα χωρίς δεύτερη σκέψη τόσο σε φοιτητές που μόλις μετακόμισαν αλλά και σε μόνιμους κατοίκους που έχουν βαρεθεί τα ίδια
          και τα ίδια.
        </p>

        <p> <span className="text-ephemeral-neon">- Ohh Boy:</span> Χαλαρή ατμόσφαιρα, φανταστικό ρυζόγαλο (για εμάς τους λίγους) και τα
          πάντα από γλυκά vegan και μη (προτείνω banoffee). Βολεύει για ήρεμη βολτούλα Παγκράτι &lt;3 ή για διάβασμα μιας και οι βιβλιοθήκες
          δενννν.
        </p>

        <p> <span className="text-ephemeral-neon">- Guerilla Chef Burgers:</span> Άμα είσαι αρχιτεκτονική και δεν το ξέρεις ντρέπομαι για
          λογαριασμό σου. Απ’ τα ωραιότερα smash burger στο χέρι και σε πολύ καλή τιμή δίπλα στο Κάτω Πολυτεχνείο.
        </p>

        <p> <span className="text-ephemeral-neon">- Strange Brew Taproom & Bottleshop:</span> Άπειρες μπύρες που αλλάζουν κάθε λίγους μήνες.
          Αν έχεις βαρεθεί τη κλασική Μάμος έλα εδώ. Βρίσκεται δίπλα στο Εθνικό Μουσείο Σύγχρονης Τέχνης και είναι πιο πολύ για χέρι και
          άραγμα στον δρόμο απέξω.
        </p>
        <p> <span className="text-ephemeral-neon">- Rakáki:</span> Κρητικό, top δεν έχω να πω κάτι άλλο.
        </p>
        <p> <span className="text-ephemeral-neon">- Olivia’s Brother:</span> Λίγο πιο βόρεια για εμάς του Πάνω Πολυτεχνείου. Ακραία γλυκά
          και φοβερό brunch (το red velvet των γενεθλίων μου θα είναι σίγουρα από εδώ). Φέρε λάπτοπ ή βιβλία και ξεκίνα.
        </p>
        <p> <span className="text-ephemeral-neon">- Tre Sorelle Pizza:</span> Επιστρέφουμε Παγκράτι γιατί μπορούμε. Πίτσα, cozy χώρος και
          πολύ ιταλικό για όσους θα πάνε ή έρχονται από Ιταλία και θέλουν μέτρο σύγκρισης.
        </p>
        <p className="italic flex justify-center"> Υ.Γ. Αν δεν σου άρεσαν τα μέρη μην ανησυχείς, δεν έχουμε όλοι καλό γούστο. (Με αγάπη πάντα) </p>


        <hr className="bg-white h-1" />
        <p className=" font-bold text-xl lg:text-3xl flex justify-center">Drum Roll Please...🥁</p>

        <p>Το θέμα του<span className="text-our-red"> TEDxNTUA </span>για το 2024 είναι γεγονός! Εσύ ξέρεις ποιο είναι; Πάτησε το παρακάτω button
          και δες την ανακοίνωση στο Instagram μας! Άντε τι περιμένεις;</p>
        <button 
          className="bg-ephemeral-neon text-white px-4 py-2 text-sm rounded-md"
          onClick={() => window.open("https://www.instagram.com/p/C5vsH6pN01X/", "_blank")}
        >
          Δες το θέμα!
        </button>

        <hr className="bg-white h-1" />

      </div>
    </div>
  );
}

export default Giannis;
