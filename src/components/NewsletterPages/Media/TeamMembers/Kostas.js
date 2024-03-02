function Kostas() {
  return (
    <div id="Kostas">
      <p className="mt-12 mb-8 italics md:mb-12 italics font-bold text-md md:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-justify">
        Ο <span className="font-bold">Κώστας</span> που όλη την ώρα βρίσκει τα
        πιο ψαγμένα άρθρα παρουσιάζει
      </p>
      <ul className="list-disc grid grid-cols-1 md:gap-8 w-[90%] mx-auto">
        <li className="w-full mb-6 md:flex md:flex-col md:gap-4 md:order-2">
          <p>
            {" "}
            Τι κοινό έχει η{" "}
            <span className="text-our-red">άνοδος του ναζισμού</span>, το{" "}
            <span className="text-our-red"> TikTok</span> και το
            <span className="text-our-red"> TED</span>; Η απάντηση βρίσκεται σε
            μία{" "}
            <a
              className="hover:cursor-pointer underline italics font-bold text-our-red"
              href="https://www.noemamag.com/the-secret-history-and-strange-future-of-charisma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              λέξη
            </a>{" "}
            με ελληνική προέλευση, αλλά πολύ νεφελώδες νόημα.
          </p>
        </li>
        <li className="w-full mb-6 md:col-span-3 md:flex md:flex-col md:gap-8 md:order-1">
          <p>
            <span className="text-our-red">«Η Ελλάδα ποτέ δεν θα αλλάξει»</span>{" "}
            Πόσες φορές έχουμε ακούσει αυτή την φράση; Έχω να σας προτείνω ένα{" "}
            <a
              className="hover:cursor-pointer underline italics font-bold text-our-red"
              href="https://greekanalyst.substack.com/s/changing-greece"
              target="_blank"
              rel="noopener noreferrer"
            >
              blog/newsletter
            </a>{" "}
            αφιερωμένο σε εκείνους που πιστεύουν πως η Ελλάδα{" "}
            <span className="text-our-red">μπορεί</span> να αλλάξει. Από
            επιστήμονες, επιχειρηματίες, επαγγελματίες και ακαδημαϊκούς, αυτό το
            newsletter συγκεντρώνει τις εξελίξεις και τις ιστορίες των ανθρώπων
            που οικοδομούν το μέλλον της χώρας.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Kostas;
