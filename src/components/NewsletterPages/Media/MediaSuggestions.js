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

      <p style="text-align: justify;">
        Δεν είναι λίγες οι φορές που έχω νιώσει αυτό το αποπνικτικό συναίσθημα
        να με καταβάλει, όταν οι υποχρεώσεις της καθημερινότητας γίνονται
        ανυπόφορες, όταν η ρουτίνα καταντάει βαρετή, όταν ο χρόνος έχει κολλήσει
        και η ώρα απλά δεν περνάει. Θα ήθελα σε τέτοιες στιγμές, ανά πάσα ώρα
        και στιγμή, να είχα πρόσβαση στη βιβλιοθήκη μου. Στα{" "}
        <span style="color:#eb0028;">βιβλία</span>, που έχουν την δυνατότητα να
        μας ταξιδεύουν, να μας γεμίζουν συναισθήματα και να μας κάνουν να
        ονειρευόμαστε.&nbsp;
      </p>

      <p style="text-align: justify;">
        Πλέον δεν υπάρχει μόνο ένα είδος βιβλίου, ευκαιρία για διάβασμα υπάρχει
        πάντα και παντού. Είτε στην παραδοσιακή μορφή του, είτε σε μορφή e-book,
        είτε από την οθόνη του κινητού και του υπολογιστή. Καθένα, με τα θετικά
        και τα αρνητικά του βέβαια, μπορεί να μεταδώσει το ίδιο μαγικό
        συναίσθημα.
      </p>
      <p style="text-align: left;"></p>
      <p style="text-align: justify;">
        Έτσι λοιπόν, μετά από δύο χρόνια σκέψης και διάφορες λίστες pros and
        cons, αποφάσισα να αγοράσω ένα{" "}
        <span style="color:#eb0028;">kindle</span>, μια απόφαση που δεν
        μετανιώνω καθόλου.{" "}
      </p>
      <p style="text-align: justify;">
        Πέρα από την απόλυτη ελευθερία στον τρόπο προβολής της οθόνης μου, έχω
        την δυνατότητα να το παίρνω παντού μαζί μου, αφού χωράει ακόμα και στην
        πιο μικρή μου τσάντα. Πλέον, όπου και να βρίσκομαι μπορώ αν θέλω να χαθώ
        μέσα στα βιβλία μου.
      </p>
      <p style="text-align: justify;"> </p>
      <p style="text-align: left;">
        <strong>
          <span style="text-decoration:underline;">- Αλίκη</span>
        </strong>
      </p>
    </div>
  );
}

export default MediaSuggestions;
