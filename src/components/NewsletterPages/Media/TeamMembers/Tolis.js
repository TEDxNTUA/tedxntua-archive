import Image from "next/image";

function Tolis() {
  return (
    <div id="Tolis">
      {" "}
      <p>
        Νομίζω όλοι έχουμε ακούσει την Βίκυ Καγιά να εύχεται την viral ατάκα{" "}
        <span className="text-our-red">«σκατά, σκατά, σκατά»</span> στις
        διαγωνιζόμενες του GNTM. Γιατί όμως λέμε σκατά για να ευχηθούμε
        επιτυχία;{" "}
      </p>
      <p className="my-8">
        Ο <span className="font-bold">Τόλης</span> διαβάζοντας ανελλιπώς
        επιστημονικά (λέμε τώρα) άρθρα, ανακάλυψε τον λόγο και θέλει να τον
        μοιραστεί:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-7 md:gap-8">
        <div className="md:col-span-3 md:flex md:flex-col">
          <p className="mb-8">
            Η φράση προέρχεται από την{" "}
            <span className="text-our-red">Γαλλία</span> όπου τα παλιά τα χρόνια
            (πριν την εποχή του TikTok και του Instagram) οι άνθρωποι άρχισαν να
            λένε «<span className="text-our-red">merde</span>», σκατά δηλαδή,
            για να ευχηθούν καλή τύχη ο ένας στον άλλον. &nbsp;Όταν παιζόταν μια
            παράσταση την εποχή που ακόμα κυκλοφορούσαν άμαξες, τα άλογα δεν
            είχαν άλλη επιλογή από τo να… κάνουν την ανάγκη τους έξω από το{" "}
            <span className="text-our-red">θέατρο</span>.
          </p>
          <div className="hidden xl:block">
            <p>
              Έτσι, οι Γάλλοι ηθοποιοί συχνά εύχονταν μεταξύ τους να γεμίσει{" "}
              <span className="text-our-red">κοπριά</span> ο δρόμος έξω από το
              θέατρο, δηλαδή η παράσταση να έχει μεγάλη{" "}
              <span className="text-our-red">προσέλευση</span> και απήχηση!
            </p>
          </div>
        </div>
        <div className="md:col-span-4 md:flex md:flex-col md:gap-8">
          {/* <Image */}
          <img
            src="./newsletters/media/kagia.jpeg"
            alt="image"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
      <p className="md:my-6 lg:my-6 xl:hidden">
        Έτσι, οι Γάλλοι ηθοποιοί συχνά εύχονταν μεταξύ τους να γεμίσει{" "}
        <span className="text-our-red">κοπριά</span> ο δρόμος έξω από το θέατρο,
        δηλαδή η παράσταση να έχει μεγάλη{" "}
        <span className="text-our-red">προσέλευση</span> και απήχηση!
      </p>
      <p className="w-full mb-8 md:my-8 italics font-bold">
        <em>
          Συνεπώς ευχόμαστε όλοι{" "}
          <span className="text-our-red">“σκατά, σκατά, σκατά”</span> στο φετινό
          TEDxNTUA event!
        </em>
      </p>{" "}
    </div>
  );
}

export default Tolis;
