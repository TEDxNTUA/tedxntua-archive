function Kostas() {
  return (
    <div id="Kostas">
      <p className="text-white text-xs md:text-md lg:text-lg xl:text-xl text-justify w-full mb-8 italics font-bold">
        Ο <span className="font-bold">Κώστας</span> που όλη την ώρα βρίσκει τα
        πιο ψαγμένα άρθρα παρουσιάζει
      </p>
      <ul className="text-white list-disc">
        <li className="text-xs md:text-md lg:text-lg xl:text-xl text-justify w-full mb-6">
          {" "}
          Τι κοινό έχει η{" "}
          <span className="text-[#eb0028]">άνοδος του ναζισμού</span>, το{" "}
          <span className="text-[#eb0028]"> TikTok</span> και το
          <span className="text-[#eb0028]"> TED</span>; Η απάντηση βρίσκεται σε
          μία{" "}
          <a
            className="hover:cursor-pointer underline text-[#eb0028]"
            href="https://www.noemamag.com/the-secret-history-and-strange-future-of-charisma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            λέξη
          </a>{" "}
          με ελληνική προέλευση, αλλά πολύ νεφελώδες νόημα.
        </li>

        <li className="text-white text-xxs md:text-md lg:text-lg xl:text-xl text-justify w-full mb-6">
          <span className="text-[#eb0028]">«Η Ελλάδα ποτέ δεν θα αλλάξει»</span>{" "}
          Πόσες φορές έχουμε ακούσει αυτή την φράση; Έχω να σας προτείνω ένα{" "}
          <a
            className="hover:cursor-pointer underline text-[#eb0028]"
            href="https://greekanalyst.substack.com/s/changing-greece"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog/newsletter
          </a>{" "}
          αφιερωμένο σε εκείνους που πιστεύουν πως η Ελλάδα{" "}
          <span className="text-[#eb0028]">μπορεί</span> να αλλάξει. Από
          επιστήμονες, επιχειρηματίες, επαγγελματίες και ακαδημαϊκούς, αυτό το
          newsletter συγκεντρώνει τις εξελίξεις και τις ιστορίες των ανθρώπων
          που οικοδομούν το μέλλον της χώρας.
        </li>
      </ul>
    </div>
  );
}

export default Kostas;
