import * as React from 'react';

import { TabStrip, TabStripTab, TabStripSelectEventArguments } from '@progress/kendo-react-layout';
import { BusinessGrid } from '../components/BusinessGrid';
import { Private } from '../components/Private';

export const MyProfile = () => {
    const [tab, setTab] = React.useState(1);

    const handleTabSelect = (event: TabStripSelectEventArguments) => {
        setTab(event.selected);
    }

    return (
        <div id="my-profile" className="content content-wrapper container p-0">
            <div className="d-md-flex justify-content-between p-4">
                <h2 className="mb-0">Здравей, KendoReact</h2>
                <p className="align-self-end mb-0 text-sm text-muted">Последно влизане: 07.06.19 08:48</p>
            </div>
            <div className="row">
                <div className="order-1 col-9">
                    <section className="px-4 bg-white">
                        <TabStrip selected={tab} onSelect={handleTabSelect} animation={false}>
                            <TabStripTab title="Бизнес услуги" >
                                <BusinessGrid />
                            </TabStripTab>
                            <TabStripTab title="Частни услуги" >
                                <Private />
                            </TabStripTab>
                        </TabStrip>
                    </section>
                </div>
            </div>
        </div >
    )
}