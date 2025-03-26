import Image from "next/image";

function Fanh() {
  return (
    <div id="Fanh">
      <p className="my-8 italics  text-md md:text-base underline 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-justify">
        Η <span className="font-bold">Φανή </span> σας έχει την πιο ψαγμένη
        πρόταση:
      </p>
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          <div className="w-full flex flex-col gap-8">
            <p>
              Η <span className="text-our-red">Isabel Allende</span>, μία από
              τις σημαντικότερες συγγραφείς του 20ου αιώνα, έχει τη δύναμη να
              ζωντανεύει τους χαρακτήρες της με μια εξαιρετική οξυδέρκεια. Στο "
              <span className="text-our-red">Σπίτι των Πνευμάτων</span>" η
              Allende δημιουργεί έναν κόσμο όπου οι ψυχολογικές εντάσεις, οι
              οικογενειακές σχέσεις και οι πνευματικές διαδρομές συνδέονται με
              εντυπωσιακό τρόπο.
            </p>
            <p>
              Το "Σπίτι των Πνευμάτων" είναι ένα συναρπαστικό μυθιστόρημα που
              εκτείνεται σε <span className="text-our-red">πολλές γενιές</span>,
              συνδυάζοντας στοιχεία μαγικού ρεαλισμού με ιστορική μυθοπλασία. Η
              πλοκή περιστρέφεται γύρω από την{" "}
              <span className="text-our-red">οικογένεια Trueba</span>, της
              οποίας οι ζωές είναι συνυφασμένες με τις πολιτικές και κοινωνικές
              ανατροπές της χώρας τους.
            </p>
          </div>
          <img
            src="./newsletters/experience/thehouseofspirit_book.jpg"
            alt="i_dunamh_tou_tora"
            className="w-[50%] lg:w-[25%] h-auto max-w-[2268px]"
          />
        </div>

        <div className="flex flex-col gap-8">
          <p>
            Η ιστορία ξεκινά με τον πατριάρχη της οικογένειας, Esteban Trueba,
            έναν πλούσιο γαιοκτήμονα που ερωτεύεται την Clara del Valle, μια
            μυστηριώδη και διορατική νεαρή γυναίκα. Παρά τις ταξικές τους
            διαφορές, ο Esteban είναι αποφασισμένος να παντρευτεί την Clara.
          </p>

          <p>
            Το μυθιστόρημα διερευνά{" "}
            <span className="text-our-red">θέματα αγάπης</span>,{" "}
            <span className="text-our-red">εξουσίας </span> και{" "}
            <span className="text-our-red">κοινωνικής δικαιοσύνης</span> στο
            πλαίσιο της πολιτικής αναταραχής σε μια χώρα της Λατινικής Αμερικής.
            Η Allende συνδυάζει επιδέξια στοιχεία φαντασίας και πραγματικότητας,
            ενσωματώνοντας μαγικά στοιχεία όπως οι ψυχικές ικανότητες της Κλάρα
            και η παρουσία πνευμάτων στο σπίτι της Τρουέμπα.
          </p>

          <p>
            Τελικά, το "Σπίτι των Πνευμάτων"  είναι ένα σαρωτικό έπος που
            φωτίζει την <span className="text-our-red">πολυπλοκότητα</span> της
            ανθρώπινης φύσης και τη διαρκή{" "}
            <span className="text-our-red">δύναμη της αγάπης</span> και της
            ανθεκτικότητας απέναντι στις αντιξοότητες.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fanh;
