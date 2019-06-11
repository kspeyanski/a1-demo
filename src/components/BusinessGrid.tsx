import * as React from 'react';

import { data } from '../data/businessGridData';

import { Grid, GridColumn, GridCellProps } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';

const CustomCell = (props: GridCellProps) => {
    return (<td className="text-right"><Button primary={true} look="flat">Управлявай</Button></td>)
}

export const BusinessGrid = () => {
    return (
        <div className="grid-container">
            <Grid
                data={data}
            >
                <GridColumn field="name" title="Име на фирма" width={400} />
                <GridColumn field="bulstat" title="Булстат" />
                <GridColumn cell={CustomCell} />
            </Grid>
        </div>
    )
}