import * as React from 'react';

export interface LayoutProps {

}

export const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}