import * as React from 'react';
import { TabStrip, TabStripTab, TabStripSelectEventArguments } from '@progress/kendo-react-layout';
import { classNames } from '@progress/kendo-react-common';
import { PrivateClients } from '../components/PrivateClients';



export const MyServices = () => {
    const [tab, setTab] = React.useState(1);

    const handleTabSelect = (event: TabStripSelectEventArguments) => {
        setTab(event.selected);
    }

    return (
        <div id="services" className="content content-wrapper container p-0">
            <div className="d-md-flex d-xs-block justify-content-between p-4">
                <h2 className="mb-0">Моите Услуги</h2>
            </div>
            <TabStrip className="mt-4 d-block tabstrip-root" tabPosition={'top'} selected={tab} onSelect={handleTabSelect}>
                <TabStripTab title={customTabTitle({ title: 'Бизнес', icon: 'group' })}>
                    TODO
                </TabStripTab>
                <TabStripTab title={customTabTitle({ title: 'Частни', icon: 'users' })}>
                    <PrivateClients />
                </TabStripTab>
            </TabStrip>
        </div>
    )
}

const customTabTitle = (args: any) => {
    return (<React.Fragment>
        <i className={classNames('ico size-32', args.icon)}></i>
        {args.title}
    </React.Fragment>)
}