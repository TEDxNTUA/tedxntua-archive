import Image from "next/image";

function Anastasia() {
  return (
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
        <span className="italic">αν καταφέρεις να το δεις μέχρι το τέλος</span>{" "}
        - θα σε αφήσει σίγουρα με έναν κόμπο στο στομάχι, να αναρωτιέσαι “μέχρι
        πού μπορεί να φτάσει ο άνθρωπος για να επιβιώσει;”.
      </p>
      <p className="w-full text-white text-xxs md:text-md lg:text-lg xl:text-xl text-justify mb-6">
        Βασίζεται στην αληθινή ιστορία της Ουρουγουανής ομάδας rugby που
        επιβίωσε από τη συντριβή του αεροπλάνου που την μετέφερε πάνω από τις
        Άνδεις και κυκλοφόρησε πρόσφατα στο Netflix.
      </p>
      <p className="w-full text-white text-xxs md:text-md lg:text-lg xl:text-xl text-justify mb-6">
        Επειδή δεν πήρα τα μάτια μου ούτε στιγμή από την οθόνη, της βάζω ένα
        <span className="text-[#eb0028] font-bold"> 11/10</span> και την συνιστώ
        ανεπιφύλακτα!
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
  );
}

export default Anastasia;
