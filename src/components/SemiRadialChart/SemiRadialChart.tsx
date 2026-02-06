import { type FC, useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';

const CHART_COLOR_BELOW_70 = '#DB1F26';
const CHART_COLOR_70_AND_ABOVE = '#1EA54E';
const MIN_CHART_HEIGHT = 120;

/** Use this height for the chart container when showing multiple semi-radial charts so they match in size. */
export const SEMI_RADIAL_CHART_CONTAINER_HEIGHT = 260;

export interface SemiRadialChartProps {
    score: number;
    subtitle: string;
    className?: string;
}

const SemiRadialChart: FC<SemiRadialChartProps> = ({ score, subtitle, className = '' }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);
    const [height, setHeight] = useState(MIN_CHART_HEIGHT);

    const fillColor = score < 70 ? CHART_COLOR_BELOW_70 : CHART_COLOR_70_AND_ABOVE;

    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const ro = new ResizeObserver((entries) => {
            const { height: h } = entries[0]?.contentRect ?? {};
            if (typeof h === 'number' && h > 0) {
                setHeight(Math.max(MIN_CHART_HEIGHT, Math.floor(h)));
            }
        });
        ro.observe(wrapper);
        setHeight(Math.max(MIN_CHART_HEIGHT, Math.floor(wrapper.getBoundingClientRect().height)));
        return () => ro.disconnect();
    }, []);

    useEffect(() => {
        if (!chartRef.current || height < MIN_CHART_HEIGHT) return;

        const options: ApexCharts.ApexOptions = {
            chart: {
                type: 'radialBar',
                height: height,
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
                        strokeWidth: '80%',
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
    }, [score, subtitle, fillColor, height]);

    return (
        <div ref={wrapperRef} className={`relative h-full w-full min-h-0 overflow-hidden ${className}`.trim()}>
            <div ref={chartRef} className="h-full min-h-0 w-full" style={{ minHeight: MIN_CHART_HEIGHT }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <p className="text-center font-bold text-[#1D3557] leading-tight mb-1 text-[clamp(1.5rem,5vw,3.25rem)]">{score}%</p>
                <p className="text-center text-sm sm:text-base font-normal text-[#8597A8] leading-tight max-w-[90%] truncate">{subtitle}</p>
            </div>
        </div>
    );
};

export default SemiRadialChart;
