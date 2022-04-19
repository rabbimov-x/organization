import styled from "styled-components" 


export const TableStyle = styled.div`
width: 100%;
height: 100vh;
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
    tr:first-child{
    th:first-child{
        border-top-left-radius: 15px;
    }
    th:last-child{
        border-top-right-radius: 15px;
    }
}
    tr:last-child{
        td:first-child{
            border-bottom-left-radius: 15px;
        }
        td:last-child{
            border-bottom-right-radius: 15px;
        }
    }
    .mr5{
        margin-right: 15px;
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
    td {
   background-color: var(--shade-4);
    }
}

&:nth-child(even){
    td {
     background: #fff;
    }
}
`
Tr.Td = styled.td`
border: none;
padding: 15px 20px;
background-color: var(--shade-2);
text-align: center;
font-size: var(--size15);
font-family: var(--familyR);
color: var(--info-dark)
`

Tr.Th = styled.th`
border: none;
padding: 15px 20px;
background-color: var(--shade-1);
font-size: var(--size15);
font-weight: bold;
font-family: var(--familyR);
color: var(--info-dark)
`