'use client';
import {
    useDisclosure, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button
} from "@nextui-org/react";
import FormModal from "./FormModal.jsx";
import { BsGithub, BsFillStarFill } from "react-icons/bs";

export default function NavbarComponent() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <Navbar>
            <NavbarBrand>
                <a href="/"><p className="font-bold text-inherit">Maps</p></a>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem >
                    <Link color="foreground" href="/">
                        Todos
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link color="foreground" href="/?q=cafe">
                        Cafeterias
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link color="foreground" href="/?q=cowork">
                        Coworks
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link color="foreground" href="/?q=restaurant">
                        Restaurantes
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link color="foreground" href="/?q=other">
                        Otros
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link color="foreground" href="#">
                        <BsGithub />
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button onPress={onOpen} variant="flat" >
                        <BsFillStarFill />Recomendar un lugar
                    </Button>
                    <FormModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}