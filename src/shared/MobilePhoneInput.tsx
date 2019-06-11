import * as React from 'react';
import { MaskedTextBox, MaskedTextBoxProps } from '@progress/kendo-react-inputs';

const MOBILE_PHONE_VALIDITY_MSG = "Моля въведете валиден телефонен номер"
const MOBILE_PHONE_PLACEHOLDER = "Мобилен телефон";

export const MobilePhoneInput: React.FunctionComponent<MaskedTextBoxProps> = (props) => {
    const [touched, setTouched] = React.useState(false);

    const handleChange = () => {
        setTouched(true);
    }

    const mask = "\\0880 00 00 00";

    return (
        <MaskedTextBox
            {...props}
            mask={mask}
            value={props.value}
            onChange={handleChange}
            validityStyles={touched}
            placeholder={MOBILE_PHONE_PLACEHOLDER}
            validationMessage={MOBILE_PHONE_VALIDITY_MSG}
        />
    )
}