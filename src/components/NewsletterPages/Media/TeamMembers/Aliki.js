import Image from "next/image";

function Aliki() {
  return (
    <div id="Aliki">
      <div className="border-y-2 border-white flex flex-col my-8 py-3 lg:py-4 gap-4 3xl:my-16">
        <p className="text-our-red font-bold text-base md:text-lg 3xl:text-2xl">
          “Mα εγώ μες τα βιβλία μου θα ‘θελα να ‘χα χαθεί”
        </p>
        <p className="text-left text-sm 3xl:text-base">
          Barbie: Βασιλοπούλα και Χωριατοπούλα
        </p>
      </div>

      {/* <Image */}

      <div className="mobile text-justify flex flex-col gap-8 mb-8 lg:hidden">
        <p>
          Δεν είναι λίγες οι φορές που έχω νιώσει αυτό το αποπνικτικό συναίσθημα
          να με καταβάλει, όταν οι υποχρεώσεις της καθημερινότητας γίνονται
          ανυπόφορες, όταν η ρουτίνα καταντάει βαρετή, όταν ο χρόνος έχει
          κολλήσει και η ώρα απλά δεν περνάει. Θα ήθελα σε τέτοιες στιγμές, ανά
          πάσα ώρα και στιγμή, να είχα πρόσβαση στη βιβλιοθήκη μου. Στα{" "}
          <span className="text-our-red">βιβλία</span>, που έχουν την δυνατότητα
          να μας ταξιδεύουν, να μας γεμίζουν συναισθήματα και να μας κάνουν να
          ονειρευόμαστε.
        </p>

        <p>
          Πλέον δεν υπάρχει μόνο ένα είδος βιβλίου, ευκαιρία για διάβασμα
          υπάρχει πάντα και παντού. Είτε στην παραδοσιακή μορφή του, είτε σε
          μορφή e-book, είτε από την οθόνη του κινητού και του υπολογιστή.
          Καθένα, με τα θετικά και τα αρνητικά του βέβαια, μπορεί να μεταδώσει
          το ίδιο μαγικό συναίσθημα.
        </p>
        <p>
          Έτσι λοιπόν, μετά από δύο χρόνια σκέψης και διάφορες λίστες pros and
          cons, αποφάσισα να αγοράσω ένα{" "}
          <span className="text-our-red">kindle</span>, μια απόφαση που δεν
          μετανιώνω καθόλου.
        </p>
        <img
          src="./newsletters/media/kindle.jpeg"
          alt="image"
          // fill="true"
          width={300}
          height={300}
          className="w-full h-auto object-cover"
        />
        <p className="my-6 md:mb-0">
          Πέρα από την απόλυτη ελευθερία στον τρόπο προβολής της οθόνης μου, έχω
          την δυνατότητα να το παίρνω παντού μαζί μου, αφού χωράει ακόμα και
          στην πιο μικρή μου τσάντα. Πλέον, όπου και να βρίσκομαι μπορώ αν θέλω
          να χαθώ μέσα στα βιβλία μου.
        </p>
      </div>

      <div className="desktop text-justify hidden lg:block">
        <div className="grid grid-cols-2 flex-col gap-8 mb-8">
          <div className="col-span-1 flex flex-col gap-8">
            <p>
              Δεν είναι λίγες οι φορές που έχω νιώσει αυτό το αποπνικτικό
              συναίσθημα να με καταβάλει, όταν οι υποχρεώσεις της
              καθημερινότητας γίνονται ανυπόφορες, όταν η ρουτίνα καταντάει
              βαρετή, όταν ο χρόνος έχει κολλήσει και η ώρα απλά δεν περνάει. Θα
              ήθελα σε τέτοιες στιγμές, ανά πάσα ώρα και στιγμή, να είχα
              πρόσβαση στη βιβλιοθήκη μου. Στα{" "}
              <span className="text-our-red">βιβλία</span>, που έχουν την
              δυνατότητα να μας ταξιδεύουν, να μας γεμίζουν συναισθήματα και να
              μας κάνουν να ονειρευόμαστε.
            </p>

            <div className="flex flex-col gap-8">
              <p className="hidden xl:block">
                Πλέον δεν υπάρχει μόνο ένα είδος βιβλίου, ευκαιρία για διάβασμα
                υπάρχει πάντα και παντού. Είτε στην παραδοσιακή μορφή του, είτε
                σε μορφή e-book, είτε από την οθόνη του κινητού και του
                υπολογιστή. Καθένα, με τα θετικά και τα αρνητικά του βέβαια,
                μπορεί να μεταδώσει το ίδιο μαγικό συναίσθημα.
              </p>
              <p className="hidden 2xl:block 3xl:hidden 4xl:block">
                Έτσι λοιπόν, μετά από δύο χρόνια σκέψης και διάφορες λίστες pros
                and cons, αποφάσισα να αγοράσω ένα{" "}
                <span className="text-our-red">kindle</span>, μια απόφαση που
                δεν μετανιώνω καθόλου.
              </p>
              <div className="hidden 2xl:block 3xl:hidden 4xl:block">
                <p>
                  Πέρα από την απόλυτη ελευθερία στον τρόπο προβολής της οθόνης
                  μου, έχω την δυνατότητα να το παίρνω παντού μαζί μου, αφού
                  χωράει ακόμα και στην πιο μικρή μου τσάντα. Πλέον, όπου και να
                  βρίσκομαι μπορώ αν θέλω να χαθώ μέσα στα βιβλία μου.
                </p>
                <div className="flex justify-end">
                  <span className="font-bold">-Αλίκη</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 gap-8">
            <img
              src="./newsletters/media/kindle.jpeg"
              alt="image"
              // fill="true"
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="below-grid flex flex-col gap-8">
          <p className="xl:hidden">
            Πλέον δεν υπάρχει μόνο ένα είδος βιβλίου, ευκαιρία για διάβασμα
            υπάρχει πάντα και παντού. Είτε στην παραδοσιακή μορφή του, είτε σε
            μορφή e-book, είτε από την οθόνη του κινητού και του υπολογιστή.
            Καθένα, με τα θετικά και τα αρνητικά του βέβαια, μπορεί να μεταδώσει
            το ίδιο μαγικό συναίσθημα.
          </p>
          <p className="2xl:hidden 3xl:block 4xl:hidden">
            Έτσι λοιπόν, μετά από δύο χρόνια σκέψης και διάφορες λίστες pros and
            cons, αποφάσισα να αγοράσω ένα{" "}
            <span className="text-our-red">kindle</span>, μια απόφαση που δεν
            μετανιώνω καθόλου.
          </p>
          <div className="2xl:hidden 3xl:block 4xl:hidden">
            <p>
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
    </div>
  );
}

export default Aliki;
