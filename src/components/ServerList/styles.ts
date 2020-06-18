import styled from 'styled-components';

export const Container = styled.div`
    grid-area:SL;

    display:flex;
    flex-direction:column;
    align-items: center;


    background-color: var(--tertiary);
    padding:11px 0;

    height:100vh;
    overflow-y:scroll;

    
    ::-webkit-scrollbar{
        width:4px;
    }


    ::-webkit-scrollbar-thumb{
        background-color:var(--symbol);
        border-radius:4px;
    }

    ::-webkit-scrollbar-track{
        background-color:var(--tertiary);
    }


    
    
`;


export const Separator = styled.div`
    width:32px;
    border-bottom:2px solid var(--quarternary);

    margin-bottom:8px;

`;