import Image from "next/image";

function Lito() {
  return (
    <div id="Lito">
      <p className="my-8 italics  text-md md:text-base underline 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-justify">
        Η <span className="font-bold">Λητώ </span> ανακάλυψε ένα φοβερό βιβλίο
        το οποίο προτείνει σε όλους τους overthinkers:
      </p>
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row lg:gap-8 items-center lg:items-start">
          <div>
            <p>
              Μια απλή βόλτα στο{" "}
              <span className="text-our-red">μικρό βιβλιοπωλείο</span> του
              αεροδρομίου Αθηνών, και καθώς έψαχνα ένα βιβλίο να μου κρατά
              συντροφιά στις καλοκαιρινές μου διακοπές, με έφερε κοντά με ένα
              βιβλίο το οποίο έγινε πλέον, το αγαπημένο μου. Το βιβλίο λέγεται «
              <span className="text-our-red">Η δύναμη του Τώρα</span>
              », του συγγραφέα Eckhart Tolle, και συνδυάζει θέματα φιλοσοφίας,
              πνευματικότητας, επιστήμης, θρησκείας, ψυχολογίας και
              αυτοβελτίωσης, με απλή γραφή σε μορφή ερώτησης-απάντησης. Το
              συστήνω ανεπιφύλακτα σε όλους, αλλά ειδικότερα στους{" "}
              <span className="text-our-red">overthinkers</span> (και ξέρω ότι
              είμαστε πολλοί) γιατί πραγματεύεται την φιλοσοφία ότι πολύ απλά,
              δεν είμαστε ο νους μας και πως η ουσία της ύπαρξης μας πάει πολύ
              πέρα από αυτό.
            </p>
          </div>
          <img
            src="./newsletters/experience/i_dunamh_tou_tora.jpg"
            alt="i_dunamh_tou_tora"
            className="w-[50%] lg:w-[25%] h-auto max-w-[2268px]"
          />
        </div>

        <div>
          <p>
            Εξηγεί πως αν συνειδητά εγκαταλείψουμε την προσκόλληση μας στο
            παρελθόν και τις εμμονικές σκέψεις για το μέλλον, θα μπορούμε να
            αντιληφθούμε οτι η μόνη στιγμή που υπάρχει πραγματικά είναι η{" "}
            <span className="text-our-red">παρούσα στιγμή</span>, δηλαδή το
            Τώρα. Με αυτόν τον τρόπο θα μπορούμε να παρατηρήσουμε τις σκέψεις
            μας, χωρίς να ταυτιζόμαστε πλέον μαζί τους και να νιώθουμε ότι αυτές
            μας καθορίζουν, δίνωντας χώρο στον εαυτό μας να νιώσει βαθύτερα τα
            συναισθήματα που προκαλεί η κάθε στιγμή.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lito;
