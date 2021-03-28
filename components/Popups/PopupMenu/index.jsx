import Link from "next/link";
import { Ul, Li } from "../../StyledComponents/Lists";
import { PopupBase } from "../PopupBase";
import { RoundBtn } from "../../StyledComponents/Buttons";


const PopupMenu = ( {handleClick} ) => {
    return(
        <PopupBase p={3} bg="white" width={[1, 1/2]} height="fit-content">
            <Ul marginRight="auto" marginLeft="auto" flexDirection="column" alignItems="flex-start">
                <Link href="/">
                    <Li>Instrumentopplæring</Li>
                </Link>

                <Link href="/">
                    <Li>Metodikk og verktøy</Li>
                </Link>

                <Link href="/">
                    <Li>Undervisningsopplegg og ressurser</Li>
                </Link>

                <Link href="/">
                    <Li>Opplæring</Li>
                </Link>
            </Ul>

            <RoundBtn 
                    bg="white"
                    id="closeMenuBtn" 
                    handleClick={handleClick}>X
            </RoundBtn>
        </PopupBase>
    )
}

export default PopupMenu;

