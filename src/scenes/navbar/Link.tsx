import { SelectedPage } from "../../shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    name: string
};

const Link = ({ name, page, selectedPage, setSelectedPage }: Props) => {

    return (
        <AnchorLink
            className={`${selectedPage.toLowerCase() === name ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
        `}
            href={`#${name}`}
            onClick={() => setSelectedPage(name as SelectedPage)}
        >
            {page}
        </AnchorLink>
    );
};

export default Link;
