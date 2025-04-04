import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Posts from "@/components/Posts";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/Button";
import { getPosts } from "@/lib/posts";
import { ArrowRightIcon, FileDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const blogDirectory = path.join(process.cwd(), "content");
const AMAN_BIRTH_YEAR = 2002;
const LIMIT = 2; // max show 2
const AMAN_AGE = 22;

export default async function Home() {
  const posts = await getPosts(blogDirectory, 5);

  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-lg"
          src="/aman-meenia.jpg"
          alt="Photo of Aman"
          width={175}
          height={175}
          priority
        />
        <div className="flex flex-col">
          <h1 className="title text-5xl">hi aman here 👋</h1>
          <p className="mt-4 font-light">
            {AMAN_AGE}
            -year-old software developer from India 🇮🇳
          </p>
          <p className="mt-2 font-light">
            I like to develop full-stack, solve DSA puzzles on my platform
            <Link
              href="https://logiclab.amanmeenia.com"
              className="text-blue-600 hover:text-blue-800"
            >
              {" "}
              LogicLab{" "}
            </Link>
            , and dive deep into coding challenges. When I&apos;m not crafting
            web wonders or mastering Neovim tricks, you&apos;ll find me brewing
            the perfect cup of instant coffee to fuel my next coding adventure.
            Passionate about pushing the boundaries of web development and
            always excited to learn and share new tech insights.
          </p>

          <section className="mt-8 flex items-center gap-8">
            <Link href="/Aman-Meenia-Resume.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-3xl">recent posts</h2>
          <LinkWithIcon
            href="/blog"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Posts posts={posts} />
      </section>
    </article>
  );
}
