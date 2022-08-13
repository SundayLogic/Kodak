type TextTypes = "TITLE" | "OVERVIEW" | "LINK" | "PAGE" | "SECTION" | "DESCRIPTION_LINK";
interface TextAtomProps {
  text: any;
  type: any;
}
const TextAtom = ({text,type}:TextAtomProps) => {
  const textGenerator = () => {
    let finalCode;
    switch (type) {
      case "TITLE":
        finalCode = <h1 className="text-3xl text-center font-bold tracking-wider md:text-5xl lg:text-h1 md:text-start lg:w-[50vw] text-shadow-lg lg:opacity-90">{text}</h1>;
        break;
      case "OVERVIEW":
        finalCode = <p className="w-[80vw] md:w-[50vw] lg:w-[50vw] xl:w-[35vw] lg:text-paragraph text-shadow-sm">{text}</p>;
        break;
      case "DESCRIPTION_LINK":
        finalCode = <p className="text-subtitle tracking-wider">{text}</p>;
        break;
      case "SECTION":
        finalCode = <h2 className="pl-5 text-xl lg:text-2xl xl:text-3xl">{text}</h2>;
        break;
      default:
        finalCode = <h1>text not found</h1>;
    }
    return finalCode;
  };
  return textGenerator();
};
export default TextAtom;
