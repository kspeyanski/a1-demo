import * as React from 'react';

import { MobilePhoneInput } from '../shared/MobilePhoneInput';

import { Input } from '@progress/kendo-react-inputs';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { Grid, GridColumn, GridCellProps, GridDetailRowProps } from '@progress/kendo-react-grid';
import { classNames } from '@progress/kendo-react-common';
import { MobileDetails } from './MobileDetails';

const ddlItems = [
    { text: 'Всички Услуги', value: 'all' },
    { text: 'Мобилен Телефон', value: 'mobile' }
]

const mobilePhonesData = [
    { mobile: '0888232425', expanded: false, hasOffer: false },
    { mobile: '0888612353', expanded: false, hasOffer: true },
    { mobile: '0888232819', expanded: false, hasOffer: false },
]

const inputStyle: React.CSSProperties = {
    width: '100%'
}

export const Private = () => {
    const [ddlValue, setDdlValue] = React.useState(ddlItems[0]);
    const [gridData, setGridData] = React.useState(mobilePhonesData);

    const handleDdlChange = (event: DropDownListChangeEvent) => {
        setDdlValue(event.target.value);
    }

    const handleExpandCellClick = (dataItem: any) => {
        const newData = [...gridData];
        const selected = newData.find((item) => item.mobile === dataItem.mobile);
        if (selected) {
            selected.expanded = !selected.expanded
        }

        setGridData(newData);
    }

    const ExpandCell = (props: GridCellProps) => {
        return (
            <td
                colSpan={props.colSpan}
                className={classNames("d-flex  justify-content-center align-content-center expand-cell cursor-pointer", { 'bg-white': props.dataItem.expanded })}
                onClick={handleExpandCellClick.bind(null, props.dataItem)}
            >
                <i className={classNames("p-3 ico size-18", { 'arrowup': props.dataItem.expanded, 'arrowdown': !props.dataItem.expanded })} />
            </td>)
    }

    return (
        <div className="bg-white disableMobileSticky" id="private">
            <h5 className="py-4">Текущо потребление</h5>
            <div className="mb-3 row">
                <div className="pb-0 col-5">
                    <Input placeholder="Търси" style={inputStyle} />
                </div>
                <div className="pb-0 col-3">
                    <DropDownList
                        style={inputStyle}
                        data={ddlItems}
                        textField={'text'}
                        value={ddlValue}
                        onChange={handleDdlChange}
                    />
                </div>
                <div className="d-flex align-items-center col-4">
                    <Button primary={true} className="text-right btn-link text-underline" look={'flat'}>Добави услуга към профила си</Button>
                </div>
            </div>
            <div>
                <Grid
                    data={gridData}
                    rowRender={CustomRow}
                    className="no-header custom-detail"
                >
                    <GridColumn field="mobile" cell={PersonalCell} />
                    <GridColumn field="hasOffer" cell={OfferCell} width={200} />
                    <GridColumn field="expanded" title=" " cell={ExpandCell} width={65} />
                </Grid>
            </div>
        </div>
    )
}



const PersonalCell = (props: GridCellProps) => {
    const [edit, setEdit] = React.useState(false);

    const handleEditClick = () => {
        setEdit(true);
    }

    const handleCancelClick = () => {
        setEdit(false);
    }

    return (
        <td
            colSpan={props.colSpan}
            className="justify-content-start align-content-center borderless bg-gray"
        >
            <span className="d-flex align-items-center">
                <i className="ico size-40 mobile-phone ServiceInformation_icon__3bjMl mr-2 mr-md-3" />
                {edit
                    ? (<div>
                        <form method="POST" target="#">
                            <MobilePhoneInput required={true} />
                            <Button className="ml-3 align-self-end" look="flat" onClick={handleCancelClick}>Отказ</Button>
                            <Button primary={true} className="ml-3" look="flat" type="submit">Запази</Button>
                        </form>
                    </div>)
                    : (<div>
                        <div className="d-flex">
                            <span className="text-black serif small DescriptionDisplay_description__2LMnI">Мобилен телефон</span>
                            <i onClick={handleEditClick} className="d-flex k-icon align-self-start ico pencil size-28"></i>
                        </div>
                        <p className="m-0 text-xs DescriptionDisplay_msisdn__2pkTg">{props.dataItem.mobile}</p>
                    </div>
                    )}
            </span>
        </td >
    )
}


const OfferCell = (props: GridCellProps) => {
    return (
        <td
            colSpan={props.colSpan}
            className="justify-content-center align-content-center bg-gray border-left-0"
        >
            {props.dataItem.hasOffer ? <Button look="flat" className="special-offer p-0">
                <i className="ico box size-14"></i>
                Персонална оферта</Button> : null}
        </td>
    )
}

const CustomRow = (rowElement: React.ReactElement, props: GridDetailRowProps) => {
    return (
        <React.Fragment>
            {rowElement}
            {props.dataItem.expanded
                ? <tr className="k-detail-row">
                    <td className="k-detail-cell bg-white p-3" colSpan={rowElement.props.children.length}>
                        <MobileDetails dataItem={props.dataItem} />
                    </td>
                </tr>
                : null}
        </React.Fragment>);
}