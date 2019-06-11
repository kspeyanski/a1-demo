import * as React from 'react';
import { TabStrip, TabStripTab, TabStripSelectEventArguments } from '@progress/kendo-react-layout';
import { PersonalData } from '../components/PersonalData';
import { ChangePassword } from '../components/ChangePassword';

export const PersonalInfo = () => {
    const [tab, setTab] = React.useState(0);

    const handleTabSelect = (event: TabStripSelectEventArguments) => {
        setTab(event.selected);
    }

    return (
        <div className="content content-wrapper container p-0" id="personal-info">
            <div className="d-md-flex d-xs-block justify-content-between p-4">
                <h2 className="mb-0">Моят профил</h2>
            </div>
            <div className="row">
                <div className="col-12">
                    <section className="px-4 bg-white">
                        <TabStrip selected={tab} onSelect={handleTabSelect}>
                            <TabStripTab title="Лични Данни">
                                <PersonalData />
                            </TabStripTab>
                            <TabStripTab title="Смени Парола">
                                <ChangePassword />
                            </TabStripTab>
                        </TabStrip>
                    </section>
                </div>
            </div>
        </div>)
}