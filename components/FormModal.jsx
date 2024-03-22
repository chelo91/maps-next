import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Textarea, Input } from "@nextui-org/react";

export default function FormModalComponent({ isOpen, onOpen, onOpenChange }) {

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                        <ModalBody>
                            <Input
                                autoFocus
                                label="Email"
                                placeholder="Ingresa tu correo electronico"
                                labelPlacement="outside"
                                />
                            <Input
                                label="Nombre"
                                placeholder="Ingresa tu nombre"
                                labelPlacement="outside"
                            />
                            <Textarea
                                label="Description"
                                labelPlacement="outside"
                                placeholder="Cuentanos en que te podemos ayudar :D"
                            />

                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="flat" onPress={onClose}>
                                Cancelar
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                Enviar
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
