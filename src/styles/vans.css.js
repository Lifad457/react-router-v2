import styled from "styled-components";

export const VansContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5em;
`
export const VansTitle = styled.h1`
    font-size: var(--fs-extra-large);
    font-weight: var(--fw-black);
`
export const VansFiltersContainer = styled.div`
    display: flex;
`
const VansFilter = `
    display: flex;
    flex-direction: column;
    background-color: var(--clr-secondary);
    border-radius: 0.3em;
    padding: .7em 3em;
    margin-right: 2em;
    font-weight: var(--fw-semi-bold);
    cursor: pointer;
`
export const VansFilterSimple = styled.div`
    ${VansFilter}
`
export const VansFilterLuxury = styled.div`
    ${VansFilter}
`
export const VansFilterRugged = styled.div`
    ${VansFilter}
`
export const VansFilterClear = styled.div`
    font-weight: var(--fw-semi-bold);
    cursor: pointer;
    padding: .7em 0;
    &:after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: var(--clr-black);
    }
`
export const VansListContainer = styled.div`
    margin-top: 2em;
    display: grid;
    grid-gap: 4em;
    grid-template-columns: repeat(auto-fill, minmax(250, 250px));
`