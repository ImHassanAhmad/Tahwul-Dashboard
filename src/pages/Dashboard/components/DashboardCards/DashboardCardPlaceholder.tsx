import { type FC, useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import Card from '../../../../components/Card';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const PERFORMANCE_DATA = [87, 76, 80, 42, 88, 79, 55, 88, 78, 55, 88, 79];

const DashboardCardPlaceholder: FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);

    useEffect(() => {
        if (!chartRef.current) return;

        const options: ApexCharts.ApexOptions = {
            chart: {
                type: 'bar',
                height: 220,
                toolbar: { show: false },
                sparkline: { enabled: false },
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    columnWidth: '60%',
                    distributed: false,
                    dataLabels: { position: 'top' },
                },
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: 'vertical',
                    shadeIntensity: 0.9,
                    gradientToColors: ['#0078D7'],
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.5,
                },
            },
            colors: ['#2E75B6'],
            stroke: {
                show: false,
            },
            xaxis: {
                categories: MONTHS,
                labels: {
                    style: {
                        colors: '#6B7280',
                        fontSize: '12px',
                    },
                },
                axisBorder: { show: false },
                axisTicks: { show: false },
            },
            yaxis: {
                min: 0,
                max: 100,
                tickAmount: 5,
                labels: {
                    style: {
                        colors: '#6B7280',
                        fontSize: '12px',
                    },
                },
                axisBorder: { show: false },
                axisTicks: { show: false },
            },
            grid: {
                borderColor: '#E5E7EB',
                strokeDashArray: 0,
                xaxis: { lines: { show: false } },
                yaxis: { lines: { show: true } },
            },
            series: [
                {
                    name: 'Performance',
                    data: PERFORMANCE_DATA,
                },
            ],
            tooltip: {
                enabled: true,
                y: {
                    formatter: (val: number) => `${val}%`,
                },
            },
        };

        chartInstance.current = new ApexCharts(chartRef.current, options);
        chartInstance.current.render();

        return () => {
            chartInstance.current?.destroy();
            chartInstance.current = null;
        };
    }, []);

    return (
        <Card variant="light" className="p-4 h-[322px] flex flex-col w-[calc(100%-352px)]">
            <p className="text-base font-bold leading-4 text-[#1D3557] mb-3">12-Month Performance</p>
            <div ref={chartRef} className="flex-1 min-h-0" />
        </Card>
    );
};

export default DashboardCardPlaceholder;
