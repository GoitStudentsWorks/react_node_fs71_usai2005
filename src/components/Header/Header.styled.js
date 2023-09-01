import styled from 'styled-components';


export const ContainerHeader = styled.div`

    padding: 24px 20px 95px 20px;

    
    @media screen and (min-width: 768px) {
        padding: 24px 32px 64px 32px;
    }

    @media screen and (min-width: 1440px) {
        width: calc(100vw - 289px);
        padding: 40px 32px 32px 32px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const MenuBtn = styled.button`
    margin-right: auto;

    background-color: transparent;

    stroke: #343434;

    @media screen and (min-width: 1440px) {
        display: none;
    }
`;

export const MenuIcon = styled.svg`
    width: 24px;
    height: 24px;

    @media screen and (min-width: 768px) {
        width: 34px;
        height: 34px;
    }
`;

export const PageTitle = styled.h1`
    @media screen and (max-width: 1439px) {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
        
        white-space: nowrap;
        clip-path: inset(100%);
        clip: rect(0 0 0 0);
        overflow: hidden;
    }

    margin: 0;
    margin-right: auto;

    color: #111111;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
    font-size: 32px;
    line-height: calc(32 / 32);
`;