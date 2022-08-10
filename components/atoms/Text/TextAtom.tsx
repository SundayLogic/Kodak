interface TextAtomProps {
  text: string;
}
const TextAtom = ({ text}: TextAtomProps) => {
  return <>{text}</>
};
export default TextAtom;
