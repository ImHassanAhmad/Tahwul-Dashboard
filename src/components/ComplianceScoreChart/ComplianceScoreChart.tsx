import { type FC, useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const CHART_COLOR_BELOW_70 = '#DB1F26';
const CHART_COLOR_70_AND_ABOVE = '#1EA54E';

export interface ComplianceScoreChartProps {
    score: number;
    subtitle: string;
    className?: string;
}

const ComplianceScoreChart: FC<ComplianceScoreChartProps> = ({ score, subtitle, className = '' }) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);

    const fillColor = score < 70 ? CHART_COLOR_BELOW_70 : CHART_COLOR_70_AND_ABOVE;

    useEffect(() => {
        if (!chartRef.current) return;

        const options: ApexCharts.ApexOptions = {
            chart: {
                type: 'radialBar',
                height: 520,
                sparkline: { enabled: false },
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    hollow: {
                        size: '65%',
                        margin: 0,
                        background: 'transparent',
                    },
                    track: {
                        background: '#E8E8E8',
                        strokeWidth: '100%',
                        margin: 0,
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            show: false,
                        },
                    },
                },
            },
            fill: {
                type: 'solid',
                colors: [fillColor],
            },
            stroke: {
                lineCap: 'round',
            },
            labels: [subtitle],
            series: [score],
        };

        chartInstance.current = new ApexCharts(chartRef.current, options);
        chartInstance.current.render();

        return () => {
            chartInstance.current?.destroy();
            chartInstance.current = null;
        };
    }, [score, subtitle, fillColor]);

    return (
        <div className={`relative min-h-0 ${className}`.trim()}>
            <div ref={chartRef} className="min-h-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none">
                <p className="mb-6 text-[44px] font-bold leading-4 text-[#1D3557]">{score}%</p>
                <p className="text-sm font-normal leading-4 text-[#8597A8] mt-1">{subtitle}</p>
            </div>
        </div>
    );
};

export default ComplianceScoreChart;
