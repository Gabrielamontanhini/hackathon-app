import { StyledCall, StyledNotice, StyledTitle, TextFont, TextHeader, TextP } from "./styled";

export function Notice({ data }) {
    return (
        <StyledNotice>
            <StyledTitle>
                <TextHeader>{data.title}</TextHeader>
            </StyledTitle>
            <StyledCall>
                <TextP>{data.text}</TextP>
            </StyledCall>
            <TextFont>Fontes: {data.source}</TextFont>
        </StyledNotice>
    )
}