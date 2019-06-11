import * as React from 'react';

import { Input } from '@progress/kendo-react-inputs';
import { classNames } from '@progress/kendo-react-common';
import { Button } from '@progress/kendo-react-buttons';

const requirements = [
    { title: 'минимум 6 символа', check: (psw: string) => { return psw.length >= 6; } },
    { title: 'да съдържа поне една буква', check: (psw: string) => { return /[A-z]/.test(psw); } },
    { title: 'да съдържа поне една цифра', check: (psw: string) => { return /[1-9]/.test(psw); } }
]

export const ChangePassword = () => {
    const [oldPsw, setOldPsw] = React.useState('');
    const [newPsw, setNewPsw] = React.useState('');
    const [touched, setTouched] = React.useState(false);

    const [showOldPsw, setShowOldPsw] = React.useState(false);
    const [showNewPsw, setShowNewPsw] = React.useState(false);

    const handleOldPswChange = (event: any) => { setOldPsw(event.target.value) }
    const handleNewPswChange = (event: any) => { setNewPsw(event.target.value); setTouched(true) }

    const handleShowOldPswChange = () => { setShowOldPsw(!showOldPsw) }
    const handleShowNewPswChange = () => { setShowNewPsw(!showNewPsw) }

    const newPswValid = requirements.reduce((acc, current) => (
        acc && current.check(newPsw)
    ), true)

    return (
        <div className="row">
            <div className="col-4">
                <form action="">
                    <div className="form-group">
                        <div className="input-group">
                            <div className="position-relative w-100">
                                <Input
                                    style={{ width: '100%' }}
                                    placeholder="Стара Парола"
                                    value={oldPsw}
                                    onChange={handleOldPswChange}
                                    className="TextInput_input__2--mZ form-control"
                                    type={showOldPsw ? "text" : "password"}
                                    required={true}
                                    validityStyles={false}
                                />
                                <i
                                    onClick={handleShowOldPswChange}
                                    className="ico eye red size-32 position-absolute PasswordInput_icon__3edLE"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="position-relative w-100">
                                <Input
                                    style={{ width: '100%' }}
                                    placeholder="Нова Парола"
                                    value={newPsw}
                                    onChange={handleNewPswChange}
                                    className="TextInput_input__2--mZ form-control"
                                    required={true}
                                    type={showNewPsw ? "text" : "password"}
                                    valid={newPswValid}
                                    validityStyles={touched}
                                />
                                <i
                                    onClick={handleShowNewPswChange}
                                    className="ico eye red size-32 position-absolute PasswordInput_icon__3edLE"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <small className="text-left">
                            <p>Паролата трябва да бъде:</p>
                            <ul className="list-group">
                                {requirements.map((req, idx) => (
                                    <li key={idx} className="d-flex py-1 px-0 ListGroupItem_item__TZxlS list-group-item">
                                        <i
                                            className={classNames("ico mr-2 ListGroupItem_icon__zkAxG checkmark",
                                                { 'green': req.check(newPsw), 'gray': !req.check(newPsw) })} />
                                        <div
                                            className={classNames("flex-grow-q",
                                                { 'disabled': !req.check(newPsw) })}>{req.title}</div>
                                    </li>
                                ))}
                            </ul>
                        </small>
                    </div>
                    <Button disabled={!newPswValid} primary={true}>Запази</Button>
                </form>
            </div>
        </div>
    )
}