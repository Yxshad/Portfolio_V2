import { useState } from "react";
import { Download, Eye, FileText, GraduationCap, MapPin, Mail, Presentation, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import cepSlidesUrl from "../img/Lavergne_Elsa_CEP_AG-CARTO.pdf";
import proofImage from "../img/Preuve.png";
import targetSchools from "@/data/targetSchools.json";

type School = (typeof targetSchools)[number] & { pending?: string };

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const SchoolCard = ({ school, onOpen }: { school: School; onOpen: () => void }) => {
  const isBonus = Boolean(school.pending);
  return (
    <button
      type="button"
      onClick={onOpen}
      title="Read & download the cover letter"
      className={`group relative w-full h-full text-left rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
        isBonus
          ? "bg-white/80 border-2 border-dashed border-[rgb(132,100,166)]"
          : "bg-card shadow-card"
      }`}
    >
      {/* Download indicator, revealed on hover */}
      <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[rgb(76,29,113)] text-white opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-focus-visible:opacity-100 group-focus-visible:scale-100">
        <Download className="h-4 w-4" />
      </span>

      <span
        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold mb-4 ${
          isBonus
            ? "bg-transparent border border-[rgb(132,100,166)] text-[rgb(76,29,113)]"
            : "bg-[rgba(132,100,166,0.20)] text-[rgb(76,29,113)]"
        }`}
      >
        {isBonus && <Sparkles className="h-3 w-3" />}
        {school.rank}
      </span>

      <div className="flex items-start gap-3 mb-3">
        <span className="text-3xl leading-none" aria-hidden>{school.flag}</span>
        <div>
          <h4 className="text-lg font-bold text-[rgb(76,29,113)] leading-tight">{school.university}</h4>
          <p className="text-sm text-black/70 flex items-center gap-1 mt-1">
            <MapPin className="h-3 w-3" />
            {school.city}, {school.country}
          </p>
        </div>
      </div>

      <p className="text-xs font-semibold uppercase tracking-wide text-[rgb(132,100,166)] mb-1">
        {school.program} · {school.period}
      </p>
      <p className="text-sm text-black/80 mb-5">{school.why}</p>
      {school.pending && (
        <p className="text-xs italic text-[rgb(76,29,113)] mb-5">⏳ {school.pending}</p>
      )}

      <span className="flex items-center gap-2 border-t border-black/10 pt-3 text-sm font-medium text-[rgb(76,29,113)]">
        <Mail className="h-4 w-4" />
        <span className="group-hover:hidden">Cover letter</span>
        <span className="hidden group-hover:inline">Read &amp; download the cover letter</span>
      </span>
    </button>
  );
};

const cvFiles = [
  { lang: "EN", label: "English", file: "Lavergne_Elsa_CV_Anglais.pdf" },
  { lang: "FR", label: "Français", file: "Lavergne_Elsa_CV.pdf" },
];

const outlineBtn =
  "border-[rgb(132,100,166)] text-[rgb(76,29,113)] hover:bg-[rgba(132,100,166,0.15)] hover:text-[rgb(76,29,113)]";
const solidBtn = "bg-[rgb(76,29,113)] text-white hover:bg-[rgb(96,49,133)]";

const CEP = () => {
  const [openSchool, setOpenSchool] = useState<School | null>(null);
  const schools = targetSchools as School[];
  const mainChoices = schools.filter((s) => !s.pending);
  const bonusChoices = schools.filter((s) => s.pending);

  return (
    <section id="cep" className="py-20 bg-[rgb(243,238,248)]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[rgb(76,29,113)]">CEP</h2>
            <p className="text-lg text-black/70">
              My CV, my CEP presentation and the target sheet for my international mobility
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* CV */}
            <div className="bg-card rounded-xl shadow-card p-6 md:p-8 flex flex-col animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(132,100,166,0.20)]">
                  <FileText className="h-7 w-7 text-[rgb(76,29,113)]" />
                </div>
                <h3 className="text-xl font-bold text-[rgb(76,29,113)]">Curriculum Vitae</h3>
              </div>
              <p className="text-sm text-black/70 mb-6">
                Education, apprenticeship at AG-CARTO, projects and skills, all on one page.
                Available in English and French.
              </p>
              <div className="mt-auto space-y-3">
                {cvFiles.map((cv) => (
                  <div key={cv.lang} className="flex items-center justify-between gap-3 border-t border-black/10 pt-3">
                    <span className="text-sm font-medium text-black/80">
                      <span className="mr-2 rounded bg-[rgba(132,100,166,0.20)] px-2 py-0.5 text-xs font-semibold text-[rgb(76,29,113)]">{cv.lang}</span>
                      {cv.label}
                    </span>
                    <div className="flex gap-2">
                      <Button asChild size="sm" variant="outline" className={outlineBtn}>
                        <a href={assetUrl(cv.file)} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4" /> View
                        </a>
                      </Button>
                      <Button asChild size="sm" className={solidBtn}>
                        <a href={assetUrl(cv.file)} download>
                          <Download className="h-4 w-4" /> Download
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CEP presentation */}
            <div className="bg-card rounded-xl shadow-card p-6 md:p-8 flex flex-col animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(132,100,166,0.20)]">
                  <Presentation className="h-7 w-7 text-[rgb(76,29,113)]" />
                </div>
                <h3 className="text-xl font-bold text-[rgb(76,29,113)]">CEP Presentation</h3>
              </div>
              <p className="text-sm text-black/70 mb-6">
                AG-CARTO, its business model and my career evolution plan for 2026 - 2031.
              </p>
              <div className="mt-auto flex gap-3 border-t border-black/10 pt-3">
                <Button asChild variant="outline" className={outlineBtn}>
                  <a href={cepSlidesUrl} target="_blank" rel="noopener noreferrer">
                    <Eye className="h-4 w-4" /> View
                  </a>
                </Button>
                <Button asChild className={solidBtn}>
                  <a href={cepSlidesUrl} download="Lavergne_Elsa_CEP_AG-CARTO.pdf">
                    <Download className="h-4 w-4" /> Download
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <details className="group mt-6 bg-card rounded-xl shadow-card px-6 py-4">
            <summary className="cursor-pointer list-none text-sm font-medium text-[rgb(76,29,113)] flex items-center justify-between">
              <span>Preview the CEP slides</span>
              <span className="transition-transform group-open:rotate-180">▾</span>
            </summary>
            <iframe
              src={cepSlidesUrl}
              title="CEP presentation slides"
              className="mt-4 w-full aspect-video rounded-lg border"
            />
          </details>

          {/* Target sheet */}
          <div id="target-sheet" className="mt-20 scroll-mt-24">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(132,100,166,0.20)] px-4 py-1 text-sm font-medium text-[rgb(76,29,113)] mb-4">
                <GraduationCap className="h-4 w-4" /> International mobility
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-3 text-[rgb(76,29,113)]">Target Sheet</h3>
              <p className="text-black/70 max-w-2xl mx-auto">
                The universities I am aiming for my Erasmus+ exchange semester (S9, fall 2027).
                Click on a school to read the matching cover letter.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {mainChoices.map((school) => (
                <SchoolCard key={school.id} school={school} onOpen={() => setOpenSchool(school)} />
              ))}
            </div>

            {bonusChoices.length > 0 && (
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div className="md:col-start-2">
                  {bonusChoices.map((school) => (
                    <SchoolCard key={school.id} school={school} onOpen={() => setOpenSchool(school)} />
                  ))}
                </div>
              </div>
            )}

            <details className="group mt-10 rounded-xl bg-card shadow-card text-[rgb(76,29,113)]">
              <summary className="cursor-pointer list-none px-6 py-4 text-sm font-medium flex items-center justify-between">
                <span>Mobility discussed with my company tutor (proof of contact)</span>
                <span className="transition-transform group-open:rotate-180">▾</span>
              </summary>
              <div className="px-6 pb-6">
                <img
                  src={proofImage}
                  alt="Email to my apprenticeship tutor about the mobility abroad"
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                />
              </div>
            </details>
          </div>
        </div>
      </div>

      <Dialog open={openSchool !== null} onOpenChange={(open) => !open && setOpenSchool(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {openSchool && (
            <>
              <DialogHeader>
                <DialogTitle className="text-[rgb(76,29,113)] flex items-center gap-2">
                  <span aria-hidden>{openSchool.flag}</span> Cover letter · {openSchool.university}
                </DialogTitle>
                <DialogDescription>
                  {openSchool.program} · {openSchool.period}
                </DialogDescription>
              </DialogHeader>

              <article className="rounded-lg border bg-white p-6 text-sm leading-relaxed text-black/85 space-y-3">
                <p className="whitespace-pre-line text-right text-black/60">{openSchool.letter.recipient}</p>
                <p className="font-semibold">Subject: {openSchool.letter.subject}</p>
                <p>{openSchool.letter.salutation}</p>
                {openSchool.letter.paragraphs.map((p, i) => (
                  <p key={i} className="text-justify">{p}</p>
                ))}
                <p>{openSchool.letter.closing}</p>
                <p className="font-semibold text-[rgb(76,29,113)]">Elsa Lavergne</p>
              </article>

              <DialogFooter className="gap-2">
                <Button asChild variant="outline">
                  <a href={assetUrl(openSchool.pdf)} target="_blank" rel="noopener noreferrer">
                    <Eye className="h-4 w-4" /> Open PDF
                  </a>
                </Button>
                <Button asChild className="bg-[rgb(76,29,113)] text-white hover:bg-[rgb(96,49,133)]">
                  <a href={assetUrl(openSchool.pdf)} download>
                    <Download className="h-4 w-4" /> Download PDF
                  </a>
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CEP;
