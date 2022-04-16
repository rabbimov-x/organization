import styled from "styled-components" 


export const TableStyle = styled.div`
width: 100%;
height: 100vw;
padding: 2px 5%;
overflow-y: auto; 
    &::-webkit-scrollbar{
        width: 5.94px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #B6D3FF;
        border-radius: 8px;
    }  
    &::-webkit-scrollbar-track{
        background-color: #F5F7FB;
        border-radius: 8px;
    } 
`
TableStyle.Tab = styled.table`
    width: 100%;
    margin: 0;
    padding: 0;
    border-collapse: collapse;
    font-family: var(--familyR);
    font-size: var(--size14);
    line-height: 17px;
     
`
export const Tr = styled.tr`
/* border-bottom: 0.5px solid #A9ABBA; */
&:nth-child(odd){
background-color: var(--shade-2);
}

&:nth-child(even){
background: #fff;
}
`
Tr.Td = styled.td`
border: none;
padding: 15px 20px;
`

Tr.Th = styled.th`
border: none;
padding: 15px 20px;
text-align: left;

`