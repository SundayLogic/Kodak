import {useRouter} from "next/router";
interface LinkProps {
    ref: string;
    content: any
}
const Link = ({ref, content}:LinkProps) => {
    const router = useRouter();
    return(
        <button onClick={() => router.push(ref)}
        >{content}</button>
    );
};
export default Link;