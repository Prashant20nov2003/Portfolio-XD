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
  "Tailwind CSS",
  "CSS",
  "SCSS",
];

const FRAMEWORKS = ["React", "Node.js", "ShadcnUI", "TailwindCSS","Express", "Astro.js", "Next.js" , "SvelteKit" , "Mux", "Gin" , "Chi"];

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
    </Accordion>
  );
}

