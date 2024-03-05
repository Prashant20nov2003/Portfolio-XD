import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LANGUAGES = [
  "Golang",
  "TypeScript",
  "JavaScript",
  "Lua",
  "NodeJS",
  "JSX",
  "SCSS",
  "PHP"
];

const FRAMEWORKS = ["React", "Node.js", "ShadcnUI", "TailwindCSS","ExpressJS", "AstroJS", "NextJS" , "SvelteKit" , "Chi", "Gorilla Mux" , "Laravel","NestJS"];

const DEV_TOOLS = [
  "Nvim",
  "Git",
  "VSCode",
  "Docker",
  "Kubernetes",
  "GitHub",
  "Jenkins",
  "GitHub Actions",
  "Terraform",
];

const DATABASES = ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis"];





function List(items: String[]) {
  const list = items.map((item) => (
    <li key={item.toString()} className="tw-mb-4">
      {item}
    </li>
  ));
  return <ul className="tw-list-disc tw-grid tw-grid-cols-2">{list}</ul>;
}

export default function SkillsAccordion() {
  const languages = List(LANGUAGES);
  const frameworks = List(FRAMEWORKS);
  const devTools = List(DEV_TOOLS);
  const Databases = List(DATABASES);
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Languages</AccordionTrigger>
        <AccordionContent>{languages}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Frameworks</AccordionTrigger>
        <AccordionContent>{frameworks}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Developer Tools</AccordionTrigger>
        <AccordionContent>{devTools}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Databases</AccordionTrigger>
        <AccordionContent>{Databases}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

