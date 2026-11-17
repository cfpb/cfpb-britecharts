import { useEffect, useRef } from 'react';
import { select } from 'd3';

/**
 * Mount a Britecharts chart on a div and redraw it when the data or
 * caller-supplied dependencies change.
 *
 * @template TChart
 * @template TData
 * @param {object} options
 * @param {() => TChart} options.chartFactory
 * @param {TData} options.data
 * @param {(chart: TChart, containerWidth: number) => void} options.configure
 * @param {Record<string, Function>=} options.onEvents
 * @param {unknown[]=} options.dependencies
 * @returns {import('react').RefObject<HTMLDivElement | null>}
 */
export function useBritechart({
    chartFactory,
    data,
    configure,
    onEvents,
    dependencies = [],
}) {
    const containerRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current || !data) {
            return undefined;
        }

        if (!chartInstanceRef.current) {
            chartInstanceRef.current = chartFactory();
        }

        const chart = chartInstanceRef.current;
        const container = select(containerRef.current);
        const containerWidth = containerRef.current.clientWidth || 700;

        configure(chart, containerWidth);

        if (onEvents) {
            Object.entries(onEvents).forEach(([event, handler]) => {
                if (typeof chart.on === 'function') {
                    chart.on(event, handler);
                }
            });
        }

        container.datum(data).call(chart);

        return () => {
            container.selectAll('*').remove();
            container.datum([]);
        };
    }, [data, ...dependencies]);

    return containerRef;
}
