import Image from "next/image";

function Tolis() {
  return (
    <div id="Tolis" className="text-white text-xs">
      {" "}
      <p className="text-justify">
        Νομίζω όλοι έχουμε ακούσει την Βίκυ Καγιά να εύχεται την viral ατάκα{" "}
        <span className="text-[#eb0028]">«σκατά, σκατά, σκατά»</span> στις
        διαγωνιζόμενες του GNTM. Γιατί όμως λέμε σκατά για να ευχηθούμε
        επιτυχία;{" "}
      </p>
      <p className="text-xs md:text-md lg:text-lg xl:text-xl text-justify w-full mb-8 italics font-bold my-8">
        Ο <span className="font-bold">Τόλης</span> διαβάζοντας ανελλιπώς
        επιστημονικά (λέμε τώρα) άρθρα, ανακάλυψε τον λόγο και θέλει να τον
        μοιραστεί:
      </p>
      <p className="text-xs md:text-md lg:text-lg xl:text-xl text-justify w-full mb-8 italics font-bold">
        Η φράση προέρχεται από την{" "}
        <span className="text-[#eb0028]">Γαλλία</span> όπου τα παλιά τα χρόνια
        (πριν την εποχή του TikTok και του Instagram) οι άνθρωποι άρχισαν να
        λένε «<span className="text-[#eb0028]">merde</span>», σκατά δηλαδή, για
        να ευχηθούν καλή τύχη ο ένας στον άλλον. &nbsp;Όταν παιζόταν μια
        παράσταση την εποχή που ακόμα κυκλοφορούσαν άμαξες, τα άλογα δεν είχαν
        άλλη επιλογή από τo να… κάνουν την ανάγκη τους έξω από το{" "}
        <span className="text-[#eb0028]">θέατρο</span>.
      </p>
      <p className="text-xs md:text-md lg:text-lg xl:text-xl text-justify w-full mb-8 italics font-bold">
        Έτσι, οι Γάλλοι ηθοποιοί συχνά εύχονταν μεταξύ τους να γεμίσει{" "}
        <span className="text-[#eb0028]">κοπριά</span> ο δρόμος έξω από το
        θέατρο, δηλαδή η παράσταση να έχει μεγάλη{" "}
        <span className="text-[#eb0028]">προσέλευση</span> και απήχηση!
      </p>
      <Image
        src="/newsletters/media/kagia.jpeg"
        alt="image"
        // fill={true}
        width={300}
        height={300}
        className="w-full h-auto"
      />
      <p className="text-xs md:text-md lg:text-lg xl:text-xl text-justify w-full my-8 italics font-bold">
        <em>
          Συνεπώς ευχόμαστε όλοι “σκατά, σκατά, σκατά” στο φετινό TEDxNTUA
          event!
        </em>
      </p>{" "}
    </div>
  );
}

export default Tolis;
