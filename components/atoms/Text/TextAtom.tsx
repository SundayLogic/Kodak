type TextTypes = "TITLE" | "OVERVIEW" | "LINK" | "PAGE" | "SECTION" | "DESCRIPTION_LINK";
interface TextAtomProps {
  text: string;
  type: TextTypes;
}
const TextAtom = ({text,type}:TextAtomProps) => {
  const textGenerator = () => {
    let finalCode;
    switch (type) {
      case "TITLE":
        finalCode = <h1 className="md:text-h1 opacity-80 text-shadow-lg">{text}</h1>;
        break;
      case "OVERVIEW":
        finalCode = <p className="text-lg text-shadow-sm">{text}</p>;
        break;
      case "DESCRIPTION_LINK":
        finalCode = <p className="text-subtitle tracking-wider">{text}</p>;
        break;
      default:
        finalCode = <h1>text not found</h1>;
    }
    return finalCode;
  };
  return textGenerator();
};
export default TextAtom;
