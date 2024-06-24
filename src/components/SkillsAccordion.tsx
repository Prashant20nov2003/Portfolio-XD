import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LANGUAGES = [
  "TypeScript", "Python", "Golang", "JavaScript", "Bash", "Lua"
];

const FRAMEWORKS = ["NextJS", "React", "React Native", "Cobra", "AstroJS", "Molecular", "Hono", "NodeJS", "ExpressJS", "FastAPI", "Pydantic", "gRPC", "Fiber", "NestJS", "Jest", "Mock Service Worker"];

const DEV_TOOLS = [
  "Git", "Cypress", "Postman", "Ngnix", "Neovim"," Docker", "Elasticsearch", "Kubernetes", "Jenkins", "Github Actions", "Ansible", "Grafana", "Prometheus"
  , "Loki", "Kafka", "BullMQ"," RabbitMQ"
];

const DATABASES = [ "PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis",
  , "KsqlDB"];





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

