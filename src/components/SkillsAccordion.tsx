import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LANGUAGES = [
  "TypeScript", "Python", "Golang", "Java", "JavaScript", "Bash", "Elixir", "Lua", "SQL"
];

const FRAMEWORKS = ["Next.js", "React", "React Native", "Router v7", "Astro", "Molecular", "Hono",
  "Express", "FastAPI", "Pydantic", "Gin", "Fiber", "Nest.js"
  ];

const DEV_TOOLS = [
  "Git", "Docker", "Kubernetes", "GitHub Actions", "Cypress", "Nginx", "Neovim", "Grafana", "Prometheus", "Elasticsearch", "Kafka", "RabbitMQ"
];

const DATABASES = [ "PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis"];


function List(items: String[]) {
  const list = items.map((item) => (
    <li key={item.toString()} className="tw:mb-4">
      {item}
    </li>
  ));
  return <ul className="tw:list-disc tw:grid tw:grid-cols-2">{list}</ul>;
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

