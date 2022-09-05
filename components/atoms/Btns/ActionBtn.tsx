interface ActionBtnAtomProps {
  action: any;
  content: JSX.Element;
}
const ActionBtnAtom = ({ action, content }: ActionBtnAtomProps) => {
  return <button onClick={() => action()}>{content}</button>;
};
export default ActionBtnAtom;
