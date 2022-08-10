interface HeaderProps{
  text: string;
}
const Header = ({ text}: HeaderProps) => {
  return <>{text}</>
};
export default Header;