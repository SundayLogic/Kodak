import React from "react";
import {useRouter} from "next/router";
interface LinkAtomProps {
    reference: any;
    content?: any;
}
const LinkAtom = ({reference, content}:LinkAtomProps) => {
    const router = useRouter();
    return(
        <button onClick={() => router.push(reference)}>
            {content}
        </button>
    );
};
export default LinkAtom;