import { CharacterType } from "../../context/type";

export interface CardProps {
    character: CharacterType;
    onPress?: () => void;
}