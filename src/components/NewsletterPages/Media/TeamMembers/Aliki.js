import Image from "next/image";

function Aliki() {
  return (
    <div id="Aliki">
      <p className="mb-6">
        Δεν είναι λίγες οι φορές που έχω νιώσει αυτό το αποπνικτικό συναίσθημα
        να με καταβάλει, όταν οι υποχρεώσεις της καθημερινότητας γίνονται
        ανυπόφορες, όταν η ρουτίνα καταντάει βαρετή, όταν ο χρόνος έχει κολλήσει
        και η ώρα απλά δεν περνάει. Θα ήθελα σε τέτοιες στιγμές, ανά πάσα ώρα
        και στιγμή, να είχα πρόσβαση στη βιβλιοθήκη μου. Στα{" "}
        <span className="text-our-red">βιβλία</span>, που έχουν την δυνατότητα
        να μας ταξιδεύουν, να μας γεμίζουν συναισθήματα και να μας κάνουν να
        ονειρευόμαστε.
      </p>
      <div className="border-y-2 border-white flex flex-col gap-2 my-12 py-3 lg:py-4">
        <p className="text-our-red font-bold text-lg">
          “Mα εγώ μες τα βιβλία μου θα ‘θελα να ‘χα χαθεί” - Barbie:
        </p>
        <p className="text-right text-sm">
          Barbie: Βασιλοπούλα και Χωριατοπούλα
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-7 md:gap-8">
        <div className="md:col-span-3 md:flex md:flex-col md:gap-8">
          <Image
            src="/newsletters/media/kindle.jpeg"
            alt="image"
            // fill={true}
            width={300}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:col-span-4 md:flex md:flex-col md:gap-4 lg:text-xl">
          <p className="my-6 md:mb-0">
            Πλέον δεν υπάρχει μόνο ένα είδος βιβλίου, ευκαιρία για διάβασμα
            υπάρχει πάντα και παντού. Είτε στην παραδοσιακή μορφή του, είτε σε
            μορφή e-book, είτε από την οθόνη του κινητού και του υπολογιστή.
            Καθένα, με τα θετικά και τα αρνητικά του βέβαια, μπορεί να μεταδώσει
            το ίδιο μαγικό συναίσθημα.
          </p>
          <p className="mb-6 md:mb-0">
            Έτσι λοιπόν, μετά από δύο χρόνια σκέψης και διάφορες λίστες pros and
            cons, αποφάσισα να αγοράσω ένα{" "}
            <span className="text-our-red">kindle</span>, μια απόφαση που δεν
            μετανιώνω καθόλου.{" "}
          </p>
          <div className="hidden 2xl:block">
            <p className="my-6 md:mb-0">
              Πέρα από την απόλυτη ελευθερία στον τρόπο προβολής της οθόνης μου,
              έχω την δυνατότητα να το παίρνω παντού μαζί μου, αφού χωράει ακόμα
              και στην πιο μικρή μου τσάντα. Πλέον, όπου και να βρίσκομαι μπορώ
              αν θέλω να χαθώ μέσα στα βιβλία μου.
            </p>
            <div className="flex justify-end">
              <span className="font-bold">-Αλίκη</span>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:hidden">
        <p className="my-6 md:mb-0">
          Πέρα από την απόλυτη ελευθερία στον τρόπο προβολής της οθόνης μου, έχω
          την δυνατότητα να το παίρνω παντού μαζί μου, αφού χωράει ακόμα και
          στην πιο μικρή μου τσάντα. Πλέον, όπου και να βρίσκομαι μπορώ αν θέλω
          να χαθώ μέσα στα βιβλία μου.
        </p>
        <div className="flex justify-end">
          <span className="font-bold">-Αλίκη</span>
        </div>
      </div>
    </div>
  );
}

export default Aliki;