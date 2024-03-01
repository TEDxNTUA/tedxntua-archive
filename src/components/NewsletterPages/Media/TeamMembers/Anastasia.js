import Image from "next/image";

function Anastasia() {
  return (
    <div id="Anastasia">
      <p className="w-full mb-4 md:mb-12 italics font-bold">
        Η <span className="font-bold">Αναστασία</span> μετά από άπειρα movie
        nights προτείνει:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8">
        <div className="md:col-span-3 md:flex md:flex-col md:gap-8">
          {/* <Image */}
          <img
            src="/newsletters/media/society-of-snow1.jpeg"
            alt="image"
            // fill={true}
            width={300}
            height={300}
            className="w-full h-auto hidden md:block"
          />

          <p className="mb-6">
            Tο{" "}
            <a
              className="hover:cursor-pointer underline text-our-red"
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
            “μέχρι πού μπορεί να φτάσει ο άνθρωπος για να επιβιώσει;”. Βασίζεται
            στην αληθινή ιστορία της Ουρουγουανής ομάδας rugby που επιβίωσε από
            τη συντριβή του αεροπλάνου που την μετέφερε πάνω από τις Άνδεις και
            κυκλοφόρησε πρόσφατα στο Netflix.
          </p>
        </div>
        <div className="md:col-span-2 md:flex md:flex-col md:gap-8">
          {/* <Image */}
          <img
            src="/newsletters/media/society-of-snow3.jpeg"
            alt="image"
            // fill={true}
            width={300}
            height={300}
            className="w-full h-auto hidden md:block"
          />
          <p className="mb-6">
            Επειδή δεν πήρα τα μάτια μου ούτε στιγμή από την οθόνη, της βάζω ένα
            <span className="text-our-red font-bold"> 11/10</span> και την
            συνιστώ ανεπιφύλακτα!
          </p>
          <div className="flex justify-end">
            <span className="font-bold">-Αναστασία</span>
          </div>
        </div>
      </div>
      <p className="mb-6 block md:hidden">
        Βασίζεται στην αληθινή ιστορία της Ουρουγουανής ομάδας rugby που
        επιβίωσε από τη συντριβή του αεροπλάνου που την μετέφερε πάνω από τις
        Άνδεις και κυκλοφόρησε πρόσφατα στο Netflix.
      </p>
      <p className="mb-6 block md:hidden">
        Επειδή δεν πήρα τα μάτια μου ούτε στιγμή από την οθόνη, της βάζω ένα
        <span className="text-our-red font-bold"> 11/10</span> και την συνιστώ
        ανεπιφύλακτα!
      </p>
      {/* <Image */}
      <img
        src="/newsletters/media/society-of-snow1.jpeg"
        alt="image"
        // fill={true}
        width={300}
        height={300}
        className="w-full h-auto md:hidden"
      />
    </div>
  );
}

export default Anastasia;
