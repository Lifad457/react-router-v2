import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: 27px;
    margin-bottom: 5em;
    
    & > h3 {
        color: var(--clr-alert);
    }
`
export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;   

    & > input {
        border: 1px solid rgba(209, 213, 219);
        height: 40px;
        text-indent: 10px;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
        font-weight: var(--fw-regular);
    }

    & > input:focus {
        outline: none;
    }

    & > input:first-of-type {
        border-radius: 6px 6px 0px 0px;
    }

    & > input:last-of-type {
        border-radius: 0px 0px 6px 6px;
        border-top: none;
    }

    & > button {
        background-color: #FF8C38;
        border: none;
        border-radius: 6px;
        height: 55px;
        margin-top: 22px;
        color: white;
        font-weight: var(--fw-bold);
        font-size: var(--fs-normal);
        cursor: pointer;
    }
`
