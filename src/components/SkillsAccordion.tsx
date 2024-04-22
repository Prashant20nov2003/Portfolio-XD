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
  "Python",
  "Java",
  "Bash",
  "Lua",
  "Java",
  "Elixir",
  "SQL",
];

const FRAMEWORKS = ["React", "NextJS", "Vue", "NuxtJS", "HTMX", "NodeJS", "ExpressJS", "SpringBoot", "tRPC", "gRPC", "TailwindCSS", "ShadcnUI", "SvelteKit", "AstroJS", "Chi", "NestJS", "Hono", "Jest", "Vitest", "Mock Service Worker", "Laravel"];

const DEV_TOOLS = [
  "Git", "Cypress", "Postman", "Ngnix", "Neovim", "Docker", "Kubernetes", "Github Actions", "Jenkins", "Ansible", "Grafana",
"Prometheus", "Loki", "BullMQ", "RabbitMQ", "Kafka",
];

const DATABASES = [ "PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis",
  , "Turso" , "ElasticSearch"];





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
        <AccordionTrigger>Frameworks and Libraries</AccordionTrigger>
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

