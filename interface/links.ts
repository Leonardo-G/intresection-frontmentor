import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface InterfaceLinks {
    title: string;
    icon?: IconDefinition;
    modalLinks?: InterfaceModalLinks[]
}

interface InterfaceModalLinks {
    icon?: IconDefinition;
    title: string;
    color?: string;
}