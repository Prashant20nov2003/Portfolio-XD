import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LANGUAGES= [
  "TypeScript", "Python", "Golang", "JavaScript", "Bash", "Elixir", "Lua", "SQL"
];

const FRAMEWORKS = ["Next", "React", "React Native", "Router v7", "Astro", "Hono",
  "Express", "FastAPI", "Pydantic", "gRPC"
  ];

const DEV_TOOLS = [
  "Git", "Docker", "Kubernetes", "Cypress", "Nginx", "Neovim", "RabbitMQ"
];




function List(items: readonly string[]) {
  const list = items.map((item) => (
    <li key={item} className="tw:mb-4">
      {item}
    </li>
  ));
  return <ul className="tw:list-disc tw:grid tw:grid-cols-2">{list}</ul>;
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
        <AccordionTrigger>Frameworks and Libraries</AccordionTrigger>
        <AccordionContent>{frameworks}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Developer Tools</AccordionTrigger>
        <AccordionContent>{devTools}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

