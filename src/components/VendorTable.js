import React from 'react';
import styled from 'styled-components';
import PriceInput from '../containers/PriceInput';

const TableDiv = styled.div`
  border: 2px solid gray;
  margin-bottom: 20px;
  max-height: 400px;
  overflow-y: scroll;
  display: table;
  width: 100%;
`;

const TableRow = styled.div`
  border-top: 1px solid gray;
  display: flex;
  justify-content: space-between;
`;

const TableCell = styled.div`
  background: #aed6e2;
  border-left: 1px solid gray;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  &:first-child {
    border-left: none;
  }
`;

const ColumnHeaderRow = styled.div`
  display: flex;
  justify-content: space-around;
  label {
    font-weight: bold;
  }
`;

const VendorName = styled.label`
    font-size: 25px;
    color: #dfe0ee;
    padding:0 0 0 30px;
`;

const Label = styled.label`
  align-self: center;
  color: darkslategray;
`;

export const TableHeader = styled.div`
  background: #093B5E;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 2px solid #093B5E;
`;

const VendorTable = props => {

  const { vendors } = props;

  return (
    vendors && Object.values(vendors).map(vendor =>
      <TableDiv key={vendor[0].vendor_verbose.id}>
        <TableHeader>
          <img src={vendor[0].vendor_verbose.logo['max-140x50']} alt="My logo" />
          <VendorName>{vendor[0].vendor_verbose.display_name} </VendorName>
        </TableHeader>

        <ColumnHeaderRow>
          <TableCell> <Label>House ID </Label></TableCell>
          <TableCell> <Label>Image</Label> </TableCell>
          <TableCell> <Label>Name</Label> </TableCell>
          <TableCell> <Label>Price</Label> </TableCell>
          <TableCell> <Label>Size</Label> </TableCell>
        </ColumnHeaderRow>

        {vendor.map(house => <TableRow>
          <TableCell> <Label> {house.id} </Label> </TableCell>
          <TableCell>
            <Image src={house.exterior_images[0]['fill-320x240']} alt="My logo" />
          </TableCell>
          <TableCell><Label> {house.name}</Label> </TableCell>
          <TableCell>
            <Label>
              <PriceInput
                type='text'
                value={house.price}
                id={house.internal_id}
                startedit={(house) => props.startEdit(house.internal_id)}
                canceledit={(house) => props.cancelEdit(house.internal_id)}
              />
            </Label>
          </TableCell>
          <TableCell><Label> {`${house.living_area_total} sqm`} </Label> </TableCell>
        </TableRow>
        )}
      </TableDiv>
    ))
}

export default VendorTable;
