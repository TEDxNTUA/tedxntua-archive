import NewsletterTitle from "@/components/NewsletterPages/NewsletterTitle";

export default function MediaNewsletter() {
  return (
    <div
      className="bg-neutral-800"
      style={{
        backgroundImage: `url('/newsletters/newsletter_media/background.png')`,
        backgroundSize: "cover", // Optional: adjust as needed
      }}
    >
      <div className="h-20 lg:h-28"></div>
      {/* <h1 className="text-white w-[75%] text-7xl text-center font-bold py-16 md:w-[80%] mx-auto">
        <span className="text-[#eb0028]">TEDx</span>Media NEwsletter
      </h1> */}
      <NewsletterTitle />

      <p className="w-[80%] md:w-[70%] text-white text-xs text-justify mx-auto">
        Καλωσήρθες στο ολόφρεσκο μας newsletter! Νομίζουμε πως ήρθε η ώρα να
        γνωρίσεις λίγο καλύτερα την ομάδα του TEDxNTUA 2024. Γι’ αυτό από σήμερα
        και κάθε δεύτερη εβδομάδα μια διαφορετική ομάδα του TEDxNTUA θα
        μοιράζεται νέα από τον κόσμο μας, ψαγμένες προτάσεις, απόψεις και πολλά
        ακόμα.
        <br />
        Είμαστε η Αλίκη, η Αναστασία, ο Κώστας και ο Τόλης, η φετινή ομάδα Media
        & Marketing του TEDxNTUA 2024 και έχουμε την χαρά να κάνουμε curate το
        πρώτο newsletter!
      </p>
    </div>
  );
}
