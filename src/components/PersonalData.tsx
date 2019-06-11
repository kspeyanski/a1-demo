import * as React from 'react';

import { Tooltip } from '@progress/kendo-react-tooltip';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Dialog } from '@progress/kendo-react-dialogs';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { IntlProvider, load } from '@progress/kendo-react-intl';

import weekData from 'cldr-core/supplemental/weekData.json';
import bgCaGregorian from 'cldr-dates-full/main/bg/ca-gregorian.json';
import dateFields from 'cldr-dates-full/main/bg/dateFields.json';

load(weekData, bgCaGregorian, dateFields);

const user = {
    username: 'kspeyanski',
    email: 'peyanski@progress.com',
    firstname: 'Кирил',
    surname: 'Стефанов',
    lastname: 'Пеянски'
}

const genders = [
    'Мъж',
    'Жена'
]

export const PersonalData = () => {
    const [edit, setEdit] = React.useState(false);
    const [emailTouched, setEmailTouched] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleEmailChangeClick = (event: any) => { event.preventDefault(); setEdit(true) }
    const handleEmailChange = () => { setEmailTouched(true); }
    const handleShowPasswordClick = () => { setShowPassword(!showPassword) }
    const handleDialogCloseClick = () => { setEdit(false) }

    return (
        <React.Fragment>
            <IntlProvider locale="bg">
                <form>
                    <div className="row">
                        <div className="col-4">
                            <div className="form-group">
                                <Tooltip position={"right"} content={TooltipContent}>
                                    <label
                                        htmlFor="username"
                                        className="LabeledInput_label__1IEuc">
                                        Потребителско име
                             <i className="ico info-square red size-40" id="username_tooltip" title="Въведете потребителското име,<br /> с което си се регистрирал в Моят А1!" />
                                    </label>
                                </Tooltip>
                                <div className="input-group">
                                    <Input disabled={true} readOnly={true} value={user.username} className="TextInput_input__2--mZ form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-8 d-flex align-items-end mt-n3">
                            <div className="col-6">
                                <div className="form-group">
                                    <Tooltip>
                                        <label
                                            htmlFor="username"
                                            className="LabeledInput_label__1IEuc">
                                            E-mail адрес
                            </label>
                                    </Tooltip>
                                    <div className="input-group">
                                        <Input disabled={true} readOnly={true} value={user.email} className="TextInput_input__2--mZ form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <Button primary={true} look="flat" onClick={handleEmailChangeClick}>Промени e-mail адрес</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4  ">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <div className="col-4">
                                    <div className="mb-0 form-group">
                                        <label htmlFor="firstname" className="LabeledInput_label__1IEuc">Име</label>
                                        <div className="input-group">
                                            <Input
                                                id="firstname"
                                                type="text"
                                                defaultValue={user.firstname}
                                                className="TextInput_input__2--mZ form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mb-0 form-group">
                                        <label htmlFor="surname" className="LabeledInput_label__1IEuc">Презиме</label>
                                        <div className="input-group">
                                            <Input
                                                id="surname"
                                                type="text"
                                                defaultValue={user.surname}
                                                className="TextInput_input__2--mZ form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mb-0 form-group">
                                        <label htmlFor="lastname" className="LabeledInput_label__1IEuc">Фамилия</label>
                                        <div className="input-group">
                                            <Input
                                                id="lastname"
                                                type="text"
                                                defaultValue={user.lastname}
                                                className="TextInput_input__2--mZ  form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs mt-2 mb-3 text-gray">Имената ще бъдат използвани при извършване на онлайн поръчки през сайта на А1, затова е препоръчително да са на кирилица</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="form-group">
                                <label htmlFor="birthdate">Дата на раждане</label>
                                <div className="input-group">
                                    <DatePicker
                                        width={"100%"}
                                        format="dd MMMM yyyy"
                                        id="birthdate"
                                        name="birthdate"
                                        defaultValue={new Date(1997, 1, 20)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group">
                                <label >Пол</label>
                                <div className="form-group">
                                    <DropDownList
                                        name="gender"
                                        data={genders}
                                        defaultValue="Мъж"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 row">
                        <div className="col">
                            <Button primary={true} type="submit">Запази</Button>
                        </div>
                    </div>
                </form>
            </IntlProvider>
            {edit && (
                <Dialog style={{ justifyContent: 'flex-start', margin: '2rem' }} width={1140} closeIcon={false}>
                    <div style={{ position: 'relative' }}>
                        <form>
                            <div className="modal-header justify-content-center border-0">
                                <h3 className="modal-title">Въведи нов e-mail адрес</h3>
                                <button onClick={handleDialogCloseClick} type="button" className="close" aria-label="Close"><span aria-hidden="true">×</span></button>
                            </div>
                            <div className="modal-body d-flex justify-content-center border-0">
                                <div className="modal-content-wrapper">
                                    <div className="position-relative w-100">
                                        <Input
                                            type="email"
                                            name="email"
                                            validityStyles={emailTouched}
                                            onChange={handleEmailChange}
                                            required={true}
                                            placeholder="E-mail адрес"
                                            style={{ width: '100%' }} />
                                    </div>
                                    <hr />
                                    <label htmlFor="password">Въведи настоящата си парола за вход в профила</label>
                                    <div className="position-relative w-100">
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            name="password"
                                            placeholder="Парола"
                                            style={{ width: '100%' }}
                                        />
                                        <i
                                            onClick={handleShowPasswordClick}
                                            className="ico eye red size-32 position-absolute PasswordInput_icon__3edLE"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-center border-0">
                                <Button type={"submit"} primary={true}>Потвърди</Button>
                            </div>
                        </form>
                    </div>
                </Dialog>)}
        </React.Fragment>
    )
}

const TooltipContent = (args: any) => {
    return <div className="text-center">{args.title.split('<br />').map((text: string) => <React.Fragment>{text}<br /></React.Fragment>)}</div>
}