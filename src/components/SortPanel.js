import React from 'react';
import styled from 'styled-components';

export const MainTitle = styled.div`
    font-size: 25px;
    font-weight: bold;
`;

export const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 99%;
    background-color: whitesmoke;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    margin-bottom: 25px;
    padding: 40px 5px 10px 0px;
`;

export const SortWrapper = styled.div`
    display: flex;
`;

export const SortField = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    margin-left: 10px;
    padding: 0 0 0 5px;
    height: 30px;
`;

export const SortButtonWrapper = styled.div`
    background: gray;
    border-radius: 0 10px 10px 0;
    width: 25px;
`;

export const SortLabel = styled.label`
    font-weight: bold;
    margin: 5px;
`;

export const SortIcon = styled.a`
    font-size: 25px;
    display: block;
    height: 5px;
    margin-left: 5px;
    &:hover{
        cursor: pointer;
        color: lightgray;
        transition: 0.5s all;
      }
`;

const SortPanel = props => {
    return (
        <HeaderWrapper>
            <MainTitle> FH.de Vendor Management </MainTitle>
            <SortWrapper>
                <SortLabel>Sort all by: </SortLabel>

                <SortField>
                    <SortLabel> Name </SortLabel>
                    <SortButtonWrapper>
                        <SortIcon
                            className="fas fa-sort-up"
                            onClick={() => props.onSortItems(props.vendors, 'name', 'ASC')}
                        />
                        <SortIcon
                            className="fas fa-sort-down"
                            onClick={() => props.onSortItems(props.vendors, 'name', 'DESC')}
                        />
                    </SortButtonWrapper>

                </SortField>

                <SortField>
                    <SortLabel> Price </SortLabel>
                    <SortButtonWrapper>
                        <SortIcon
                            className="fas fa-sort-up"
                            onClick={() => props.onSortItems(props.vendors, 'price', 'ASC')}
                        />
                        <SortIcon
                            className="fas fa-sort-down"
                            onClick={() => props.onSortItems(props.vendors, 'price', 'DESC')}
                        />
                    </SortButtonWrapper>
                </SortField>

                <SortField>
                    <SortLabel> Size </SortLabel>
                    <SortButtonWrapper>
                        <SortIcon
                            className="fas fa-sort-up"
                            onClick={() => this.props.onSortItems(this.props.vendors, 'living_area_total', 'ASC')}
                        />
                        <SortIcon
                            className="fas fa-sort-down"
                            onClick={() => this.props.onSortItems(this.props.vendors, 'living_area_total', 'DESC')}
                        />
                    </SortButtonWrapper>
                </SortField>
            </SortWrapper>
        </HeaderWrapper>
    )
}

export default SortPanel;