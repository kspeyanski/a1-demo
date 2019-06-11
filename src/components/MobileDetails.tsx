import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
} from '@progress/kendo-react-charts';
import { geometry } from '@progress/kendo-drawing';

export interface MobileDetailsProps {
    dataItem: any;
}

const mobilePhoneData = [
    { title: 'Мобилен интернет на максимална скорост', min: 0, max: 6000, current: 4564, unit: 'MB' },
    { title: 'Международни разговори към ЕС', min: 0, max: 200, current: 12, unit: 'минути' },
    { title: 'Обем на данни в ЕС и Балкани', min: 0, max: 200, current: 128, unit: 'MB' },
    { title: 'Роуминг ЕС и Балкани', min: 0, max: 200, current: 84, unit: 'минути' },
    { title: 'Роуминг SMS в ЕС и Балкани', min: 0, max: 200, current: 168, unit: '' },
]

export const MobileDetails: React.FunctionComponent<MobileDetailsProps> = () => {
    const [loaded, setLoaded] = React.useState(false);

    const loadData = () => {
        let timeout = setTimeout(() => { setLoaded(true); }, 1500)

        return () => { clearTimeout(timeout); }
    }

    React.useEffect(loadData, []);

    return (
        <div className="mobile-details" style={{ position: 'relative', height: 400 }}>
            {loaded
                ? (
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-7">
                                <div className="row">
                                    {mobilePhoneData.map((data, idx) => (
                                        <React.Fragment key={idx}>
                                            <div className="col-6 mt-3">{data.title}</div>
                                            <div className="col-6 mt-3">
                                                <Chart transitions={false} style={{ height: 50 }} zoomable={false}>
                                                    <ChartSeries>
                                                        <ChartSeriesItem gap={0} border={{ width: 0 }} type="bullet" color="red" data={[data.current]} />
                                                    </ChartSeries>
                                                    <ChartValueAxis>
                                                        <ChartValueAxisItem
                                                            labels={{
                                                                visual: labelsVisual.bind(null, data.min, data.max),
                                                                content: (e) => {
                                                                    if (e.value === data.min) {
                                                                        return `${data.current} ${data.unit}`
                                                                    } else if (e.value === data.max) {
                                                                        return String(data.max)
                                                                    }

                                                                    return ''
                                                                }
                                                            }}
                                                            plotBands={[{ from: 0, to: data.max, color: '#EAECEF' }]}
                                                            line={{ visible: false }}
                                                            min={data.min}
                                                            max={data.max}
                                                            minorTicks={{ visible: false }}
                                                            majorTicks={{ visible: false }}
                                                            majorGridLines={{ visible: false }}
                                                        />
                                                    </ChartValueAxis>
                                                </Chart>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="PlanBox_box__1ZjUb p-4 text-center">
                                    <h3 className="text-center">A1 предплатена услуга</h3>
                                    <div className="mt-5">
                                        <p className="mb-0 text-black">Валидност на картата: <span className="text-muted text-xs">До дата 19.06.2020</span></p>
                                        <p className="text-black">Последно зареждане: <span className="text-muted text-xs">20.05.2019</span></p>
                                        <h6 className="mt-5">Текуща сметка</h6>
                                        <p className="text-muted text-xs">Валидна до 18.08.2019</p>
                                        <p className="PlanBox_currentBill__GUSbo text-black text-xl mb-0">5.65 лв.</p>
                                        <Button className="text-underline btn-link" primary={true} look="flat">Зареди А1 предплатена услуга</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                : <div role="status" className="loader-spinner spinner-border-xl spinner-border text-primary"><span className="sr-only">Loading...</span></div>}
        </div>);
}

const labelsVisual = (min: number, max: number, args: any) => {
    const visual = args.createVisual();
    if (args.value === min) {
        visual.transform(geometry.transform().translate(args.rect.size.width / 2, 0));
    } else if (args.value === max) {
        visual.transform(geometry.transform().translate(-args.rect.size.width, 0));
    }

    return visual;
}