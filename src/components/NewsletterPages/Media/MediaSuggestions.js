import Image from "next/image";
function MediaSuggestions() {
  return (
    <div>
      <div id="Anastasia">
        <p className="text-white text-xs md:text-md lg:text-lg xl:text-xl text-justify w-full mb-4 italics font-bold">
          Η <span className="font-bold">Αναστασία</span> μετά από άπειρα movie
          nights προτείνει:
        </p>
        <p className="text-white text-xxs md:text-md lg:text-lg xl:text-xl text-justify w-full mb-6">
          Tο{" "}
          <a
            className="hover:cursor-pointer underline text-[#eb0028]"
            href="https://www.imdb.com/title/tt16277242/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Society of the Snow
          </a>{" "}
          -{" "}
          <span className="italic">
            αν καταφέρεις να το δεις μέχρι το τέλος
          </span>{" "}
          - θα σε αφήσει σίγουρα με έναν κόμπο στο στομάχι, να αναρωτιέσαι
          “μέχρι πού μπορεί να φτάσει ο άνθρωπος για να επιβιώσει;”.
        </p>
        <p className="w-full text-white text-xxs md:text-md lg:text-lg xl:text-xl text-justify mb-6">
          Βασίζεται στην αληθινή ιστορία της Ουρουγουανής ομάδας rugby που
          επιβίωσε από τη συντριβή του αεροπλάνου που την μετέφερε πάνω από τις
          Άνδεις και κυκλοφόρησε πρόσφατα στο Netflix.
        </p>
        <p className="w-full text-white text-xxs md:text-md lg:text-lg xl:text-xl text-justify mb-6">
          Επειδή δεν πήρα τα μάτια μου ούτε στιγμή από την οθόνη, της βάζω ένα
          <span className="text-[#eb0028] font-bold"> 11/10</span> και την
          συνιστώ ανεπιφύλακτα!
        </p>
        <Image
          src="/newsletters/media/society-of-snow1.jpeg"
          alt="image"
          // fill={true}
          width={300}
          height={300}
          className="w-full h-auto"
        />
      </div>
      <div className="h-12"></div>
      <div id="Kostas">
        <p className="text-white text-xs md:text-md lg:text-lg xl:text-xl text-justify w-full mb-4 italics font-bold">
          Ο <span className="font-bold">Κώστας</span> που όλη την ώρα βρίσκει τα
          πιο ψαγμένα άρθρα παρουσιάζει
        </p>
        <ul className="text-white">
          <li className="text-white text-xxs md:text-md lg:text-lg xl:text-xl text-justify w-full mb-6">
            {" "}
            Τι κοινό έχει η{" "}
            <span className="text-[#eb0028]">άνοδος του ναζισμού</span>, το{" "}
            <span className="text-[#eb0028]"> TikTok</span> και το
            <span className="text-[#eb0028]"> TED</span>; Η απάντηση βρίσκεται
            σε μία{" "}
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
            <span className="text-[#eb0028]">
              «Η Ελλάδα ποτέ δεν θα αλλάξει»
            </span>{" "}
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
        <div className="border-y-2 border-white flex flex-col">
          <p className="text-[#eb0028] font-bold text-lg">
            “Mα εγώ μες τα βιβλία μου θα ‘θελα να ‘χα χαθεί” - Barbie:
          </p>
          <p className="text-white text-xs text-left ">
            Βασιλοπούλα και Χωριατοπούλα
          </p>
        </div>
      </div>
    </div>
  );
}

export default MediaSuggestions;
