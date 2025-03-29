function Anastasia() {
  return (
    <div id="Anastasia">
      <p className="my-8 italics md:mb-12 italics font-bold text-md md:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-justify">
        Η <span className="font-bold">Αναστασία</span> μετά από άπειρα movie nights προτείνει:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-8">
        <div className="col-span-1 xl:col-span-2 flex flex-col justify-between">
          <div>
            <p className="mb-6 To">
              Tο{" "}
              <a
                className="hover:cursor-pointer underline hover:text-our-red decoration-2 italics font-bold"
                href="https://www.imdb.com/title/tt16277242/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Society of the Snow
              </a>{" "}
              - <span className="italic">αν καταφέρεις να το δεις μέχρι το τέλος</span> - θα σε
              αφήσει σίγουρα με έναν κόμπο στο στομάχι, να αναρωτιέσαι “μέχρι πού μπορεί να φτάσει ο
              άνθρωπος για να επιβιώσει;”.
            </p>
            <p className="mb-6 basizetai">
              Βασίζεται στην αληθινή ιστορία της Ουρουγουανής ομάδας rugby που επιβίωσε από τη
              συντριβή του αεροπλάνου που την μετέφερε πάνω από τις Άνδεις και κυκλοφόρησε πρόσφατα
              στο Netflix.
            </p>
            <p className="mb-6 epeidi md:hidden lg:block">
              Επειδή δεν πήρα τα μάτια μου ούτε στιγμή από την οθόνη, της βάζω ένα
              <span className="text-our-red font-bold"> 11/10</span> και την συνιστώ ανεπιφύλακτα!
            </p>
          </div>
        </div>

        <div className="col-span-1">
          <img
            src="./newsletters/media/society-of-snow1.jpeg"
            alt="image"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
      <p className="my-6 epeidi hidden md:block lg:hidden">
        Επειδή δεν πήρα τα μάτια μου ούτε στιγμή από την οθόνη, της βάζω ένα
        <span className="text-our-red font-bold"> 11/10</span> και την συνιστώ ανεπιφύλακτα!
      </p>
    </div>
  );
}

export default Anastasia;
