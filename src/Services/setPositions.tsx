import { Positions } from "../components/Dropdowns/baseDropdown";

export interface PostionsInterface {
    size: number; 
    position: "center"|"left"|"right";
}

export const SetPositions = ({size, position}:PostionsInterface) => {
    switch(position) {
        case Positions.CENTER: {
            const calculate = size/2;
            const center = {right: `-${calculate}px`};
            return center;
        }
        case Positions.LEFT: {
            const left = {right: 0};
            return left;
        }
        case Positions.RIGHT: {
            const right = {right: 0}
            return right;
        }
        default: {
            const calculate = size/2;
            const center = {right: `-${calculate}px`};
            return center;
        }
    }
}