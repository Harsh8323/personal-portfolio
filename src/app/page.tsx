import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Harsh</Heading>
      <Paragraph className="max-w-xl mt-4">
        Passionate <Highlight>frontend developer</Highlight> who loves bringing
        ideas to life through code. I thrive on building cool, user-friendly
        projects that look great and work even better.
      </Paragraph>
      {/* <Paragraph className="max-w-xl mt-4">
        I&apos;m a senior software engineer with{" "}
        <Highlight>7 years of experience</Highlight> building scalable web apps
        that are performance optimized and good looking.
      </Paragraph> */}
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-4 mb-4"
      >
        Check out my latest work
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
