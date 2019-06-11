import * as React from 'react';
import { TabStrip, TabStripTab, TabStripSelectEventArguments } from '@progress/kendo-react-layout';

import { data as initialData } from '../data/servicesGridData';
import { Input } from '@progress/kendo-react-inputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Grid, GridColumn, GridCellProps, GridDetailRowProps } from '@progress/kendo-react-grid';
import { IntlProvider, load } from '@progress/kendo-react-intl';

import bgCaGregorian from 'cldr-dates-full/main/bg/ca-gregorian.json';
import { MobilePhoneInput } from '../shared/MobilePhoneInput';
import { Button } from '@progress/kendo-react-buttons';
import { classNames } from '@progress/kendo-react-common';

load(bgCaGregorian);

export const PrivateClients = () => {
    const [tab, setTab] = React.useState(0);
    const [data, setData] = React.useState(initialData);

    const handleTabSelect = (event: TabStripSelectEventArguments) => {
        setTab(event.selected)
    }


    const handleExpandCellClick = (dataItem: any) => {
        const newData = [...data];
        const selected = newData.find((item) => item.mobile === dataItem.mobile);
        if (selected) {
            selected.expanded = !selected.expanded
        }

        setData(newData);
    }

    const ExpandCell = (props: GridCellProps) => {
        return (
            <td
                colSpan={props.colSpan}
                className={classNames("d-flex  justify-content-center align-content-center expand-cell",
                    {
                        'bg-white': props.dataItem.expanded,
                        'bg-gray': !props.dataItem.expanded
                    }
                )
                }
                onClick={handleExpandCellClick.bind(null, props.dataItem)}
            >
                <i className={classNames("p-3 ico size-18", { 'arrowup': props.dataItem.expanded, 'arrowdown': !props.dataItem.expanded })} />
            </td>)
    }

    return (
        <div className="px-4">
            <IntlProvider locale="bg">
                <TabStrip selected={tab} onSelect={handleTabSelect} className="tabstrip-nested">
                    <TabStripTab title="Услуги">
                        <div className="mb-2 row">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <i className="ico size-40 search gray" />
                                            </div>
                                            <div className="position-relative w-100">
                                                <Input
                                                    style={{ width: '100%' }}
                                                    placeholder="Търси по номер или име на услуга"
                                                    className="TextInput_input__2--mZ form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="position-relative">
                                            <DropDownList
                                                style={{ width: '100%' }}
                                                defaultValue="Всички Услуги"
                                                data={['Всички Услуги', 'Мобилен Телефон']}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-auto mb-3 col-md-4">
                                <DropDownList
                                    style={{ width: '100%' }}
                                    data={['Всички договори', 'Без договор']}
                                    defaultValue="Всички договори"
                                    valueRender={CustomValueRender}
                                />
                            </div>
                        </div>
                        <Grid
                            data={data}
                            rowRender={CustomRow}
                            className="custom-detail"
                        >
                            <GridColumn title="Номер на услуга" cell={PersonalCell} field="mobile" />
                            <GridColumn title="Име на услуга" cell={MobilePhoneCell} field="name" width={300} />
                            <GridColumn title="№ на договор	" field="contractId" />
                            <GridColumn title="Тип услуга" field="type" />
                            <GridColumn title="Край на отчетен период" field="endDate" format="{0:D}" width={300} />
                            <GridColumn title=" " field="expanded" width={65} cell={ExpandCell} />
                        </Grid>
                    </TabStripTab>
                    <TabStripTab title="Договори">
                        TODO
                </TabStripTab>
                </TabStrip>
            </IntlProvider>
        </div>)
}


const GridDetailRow = (props: GridDetailRowProps) => {
    return (
        <div className="p-4">
            <div>
                <div className="pb-0"></div>
                <div className="bg-white d-flex justify-content-between pb-3">
                    <div className="btn-toolbar">
                        <Button look="outline">SIM настройки</Button>
                    </div>
                    <div className="btn-toolbar">
                        <Button primary={true} className="ml-2">Добави MB</Button>
                        <Button primary={true} className="ml-2">Добави минути/SMS</Button>
                        <Button primary={true} className="ml-2">Зареди предплатена услуга</Button>
                    </div>
                </div>
                <div className="py-4 border-top row">
                    <div className="mt-2 col-2"><h5>План</h5></div>
                    <div className="col-md-10">
                        <section>
                            <table className="m-0 table">
                                <tbody>
                                    <tr>
                                        <td className="border-0" data-title="Статус">
                                            <div className="td">
                                                <div className="d-flex justify-content-start">
                                                    Статус:<span className="pl-1">Активен</span>
                                                </div>
                                            </div>
                                        </td><td className="border-0" data-title="Валидност">
                                            <div className="td">
                                                <div className="d-flex justify-content-end">
                                                    Валидност:<time dateTime="1592600400000" className="pl-2">19.06.2020</time>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </div>
                </div>
                <div className="py-4 border-top row"><div className="mt-2 col-md-2"><h5>Активна оферта</h5></div><div className="col-md-10"><table className="responsive-table m-0 table"><colgroup><col span={1} style={{ width: '50%' }} /><col span={1} style={{ width: '50%' }} /></colgroup><tbody><tr><td className="border-0"><div className="td"><h6 className="m-0">A1</h6></div></td></tr></tbody></table></div></div>
            </div>
            <div className="py-4 border-top row"><div className="mt-2 col-md-2"><h5>Други услуги</h5></div><div className="col-md-10"><table className="m-0 responsive-table table"><colgroup><col span={1} style={{ width: '80%;' }} /><col span={1} style={{ width: '20%' }} /></colgroup><tbody><tr><td className="border-right-0" data-title="Услуга"><div className="td"><h6 className="m-0">Семейство и приятели</h6></div></td><td className="border-left-0 text-right"><div className="td"><button type="button" className="p-0 btn btn-link btn-sm">Управлявай</button></div></td></tr><tr><td className="border-right-0" data-title="Услуга"><div className="td"><h6 className="m-0">Любим номер</h6></div></td><td className="border-left-0 text-right"><div className="td"><button type="button" className="p-0 btn btn-link btn-sm">Управлявай</button></div></td></tr><tr><td className="border-right-0" data-title="Услуга"><div className="td"><h6 className="m-0">Зареждане на А1 предплатена услуга</h6></div></td><td className="border-left-0 text-right"><div className="td"><button type="button" className="p-0 btn btn-link btn-sm">Управлявай</button></div></td></tr><tr><td className="border-right-0" data-title="Услуга"><div className="td"><h6 className="m-0">Кредитен лимит</h6></div></td><td className="border-left-0 text-right"><div className="td"><button type="button" className="p-0 btn btn-link btn-sm">Управлявай</button></div></td></tr></tbody></table></div></div>
        </div>
    )
}

const CustomRow = (rowElement: React.ReactElement, props: GridDetailRowProps) => {
    return (
        <React.Fragment>
            {rowElement}
            {props.dataItem.expanded
                ? <tr className="k-detail-row">
                    <td className="k-detail-cell bg-white p-3" colSpan={rowElement.props.children.length}>
                        <GridDetailRow {...props} />
                    </td>
                </tr>
                : null}
        </React.Fragment>);
}

const MobilePhoneCell = (props: GridCellProps) => {
    const [edit, setEdit] = React.useState(false);

    const handleEditClick = () => {
        setEdit(true);
    }

    return (
        <td
            colSpan={props.colSpan}
            className="justify-content-start align-content-center borderless bg-gray"
        >
            <div className="d-flex align-items-center">
                {edit
                    ? (<div>
                        <form method="POST" target="#">
                            <MobilePhoneInput required={true} />
                            <Button type="submit" look="flat">
                                <i className="ico checkmark m-0 size-28 dark" />
                            </Button>
                        </form>
                    </div>)
                    : (<div className="d-flex align-items-center justify-content-end-m">
                        <div className="d-flex align-items-center justify-content-end-m">
                            Мобилен телефон
                            <i onClick={handleEditClick} className="ico pencil size-28 cursor-pointer" />
                        </div>
                    </div>
                    )}
            </div>
        </td >
    )
}

const PersonalCell = (props: GridCellProps) => {
    return (
        <td colSpan={props.colSpan} className="justify-content-start align-content-center borderless bg-gray">
            <span className="d-flex align-items-center">
                <i className="ico size-40 mobile-phone ServiceInformation_icon__3bjMl" />
                {props.dataItem.mobile}
            </span>
        </td >
    )
}

const CustomValueRender = (el: React.ReactElement<HTMLSpanElement>, value: any) => {
    const showCount = value === 'Всички договори'

    return <el.type {...el.props}>{value} {showCount ? <small className="text-muted ml-1">(0 договора)</small> : null}</el.type>
}