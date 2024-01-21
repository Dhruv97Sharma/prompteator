import Feed from "@components/Feed";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Create & Share
        <br className="max-md:hidden"/>
        <span className="blue_gradient text-center">Your AI Prompts</span>
      </h1>
      <p className="desc text-center">
        Promteator is a free to use prompt creator tool where 
        you can create, share and safely store your AI prompts to use
        them later with an AI tool.
      </p>
      <Feed />
    </section>
  );
}
