import { useState } from "react";
import { Briefcase, Download, Eye, FileText, GraduationCap, MapPin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import bgImage from "../img/background/pexels-artempodrez-7233109.jpg";
import cvUrl from "../img/Lavergne_Elsa_CV.pdf";
import proofImage from "../img/Preuve.png";
import targetSchools from "@/data/targetSchools.json";

type School = (typeof targetSchools)[number] & { pending?: string };

const careerData = [
  {
    year: "2025 - Present",
    title: "Digital Science Student and DevOps Apprentice",
    company: "ENSEEIHT",
    description: "I study digital science and computer networks in the ENSEEIHT engineering school. I also have an apprenticeship into the company AG-CARTO.",
  },
  {
    year: "2022-2025",
    title: "Bachelor's Degree in Computer Science",
    company: "Institute of Technology of Bayonne",
    description: "Developed and maintained multiple client projects, focusing on modern web technologies.",
  },
  {
    year: "2019 - 2022",
    title: "High School Student",
    company: "'Sud des Landes' Advanced high school",
    description: "High School Diploma with distinction - Specialized in Mathematics and Numerical science - I took Advanced mathematics and European English as additional courses",
  }
];

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

const Career = () => {
  const [openSchool, setOpenSchool] = useState<School | null>(null);
  const schools = targetSchools as School[];
  const mainChoices = schools.filter((s) => !s.pending);
  const bonusChoices = schools.filter((s) => s.pending);

  return (
    <section
      id="career"
      className="py-20 bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(132,100,166,0.6)' }} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Career Journey</h2>
            <p className="text-lg text-white/80">
              My professional path and educational background
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {careerData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="h-5 w-5 text-black" />
                        <span className="text-sm font-semibold text-black">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1 text-[rgb(76,29,113)]">{item.title}</h3>
                      <p className="text-black font-medium mb-2">{item.company}</p>
                      <p className="text-sm text-black">{item.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>

          {/* CV */}
          <div className="mt-16 bg-card rounded-xl shadow-card p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 animate-fade-in">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[rgba(132,100,166,0.20)]">
              <FileText className="h-8 w-8 text-[rgb(76,29,113)]" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-[rgb(76,29,113)]">My Curriculum Vitae</h3>
              <p className="text-sm text-black/70">
                Education, apprenticeship at AG-CARTO, projects and skills, all on one page.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild variant="outline" className="border-[rgb(132,100,166)] text-[rgb(76,29,113)] hover:bg-[rgba(132,100,166,0.15)] hover:text-[rgb(76,29,113)]">
                <a href={cvUrl} target="_blank" rel="noopener noreferrer">
                  <Eye className="h-4 w-4" /> View
                </a>
              </Button>
              <Button asChild className="bg-[rgb(76,29,113)] text-white hover:bg-[rgb(96,49,133)]">
                <a href={cvUrl} download="Lavergne_Elsa_CV.pdf">
                  <Download className="h-4 w-4" /> Download
                </a>
              </Button>
            </div>
          </div>

          {/* Target sheet */}
          <div id="target-sheet" className="mt-20 scroll-mt-24">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white mb-4">
                <GraduationCap className="h-4 w-4" /> International mobility
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">Target Sheet</h3>
              <p className="text-white/80 max-w-2xl mx-auto">
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

            <details className="group mt-10 rounded-xl bg-white/15 backdrop-blur-sm text-white">
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

export default Career;
