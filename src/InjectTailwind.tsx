import React, { ReactNode } from "react";
import { StyledEngineProvider } from "@mui/material";

interface InjectTailwindType {
    children: ReactNode;
}

export default function InjectTailwind(props:InjectTailwindType) {
    return <StyledEngineProvider injectFirst>{props.children}</StyledEngineProvider>
}