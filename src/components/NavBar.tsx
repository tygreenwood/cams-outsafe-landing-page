import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";

type LinkObject = {
    name: string,
    to?: string
}

const NavBar = () => {
    const links: LinkObject[] = [
        {
            name: "Home",
            to: "/"
        },
        {
            name: "Campus Alert Management System"
        },
        {
            name: "About",
            to: "/about"
        }
    ]
    return (
        <NavBarDiv>
            {
                links.map((el) => el.to ? <NavStyles to={el.to}>{el.name}</NavStyles> : <TitleHeader>{el.name}</TitleHeader>)
            }
        </NavBarDiv>
    )
}

const TitleHeader = styled.h1`
    margin: 0;
`

const NavBarDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #363732;
    color: white;
    padding: 12px;
`

const NavStyles = styled(NavLink)`
    color: white;
    font-size: larger;
    &:hover {
        color: #F07167;
    }
    transition-duration: 0.3s;
`

export default NavBar;