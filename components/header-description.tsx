import { BlurFade } from "./magicui/blur-fade";

type HeaderDescriptionProps = {
  name: string;
  description: string;
};

export default function HeaderDescription(props: HeaderDescriptionProps) {
  return (
    <div className="header flex-1 min-w-0 space-y-2">
      <BlurFade delay={0.25} inView>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none inline-block">
          Hello, I'm {props.name}!
        </h1>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <span className="text-pretty text-lg tracking-tighter md:text-xl inline-block">
          {props.description}
        </span>
      </BlurFade>
    </div>
  );
}
