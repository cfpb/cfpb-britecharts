import { select } from 'd3-selection';

const DATA_MARKS = '.line, .layer, .area-outline, .row-wrapper';

function upsertDescriptive(svgSelection, tag, className, text) {
    const selector = `${tag}.${className}`;
    let el = svgSelection.select(selector);

    if (!text) {
        if (!el.empty()) {
            el.remove();
        }

        return;
    }

    if (el.empty()) {
        el = svgSelection.insert(tag, ':first-child').attr('class', className);
    }

    el.text(text);
}

/**
 * Apply ARIA roles and accessible name/description on the chart root.
 * @param {Function} chart Chart instance
 */
export function syncAccessibility(chart) {
    const svgSelection = chart.__svg;

    if (!svgSelection || svgSelection.empty()) {
        return;
    }

    const node = svgSelection.node();

    if (node && String(node.tagName).toLowerCase() === 'svg') {
        svgSelection.attr('role', 'graphics-document document');
    }

    upsertDescriptive(svgSelection, 'title', 'britechart-a11y-title', chart.__ariaLabel);
    upsertDescriptive(svgSelection, 'desc', 'britechart-a11y-desc', chart.__ariaDescription);

    if (chart.__ariaLabel) {
        svgSelection.attr('aria-label', chart.__ariaLabel);
    } else {
        svgSelection.attr('aria-label', null);
    }

    if (chart.__ariaDescription) {
        svgSelection.attr('aria-description', chart.__ariaDescription);
    } else {
        svgSelection.attr('aria-description', null);
    }
}

function applyKeyboardNavigation(chart) {
    const svgSelection = chart.__svg;

    if (!svgSelection || svgSelection.empty()) {
        return;
    }

    svgSelection.selectAll(DATA_MARKS).each(function applyMark(datum) {
        const el = select(this);

        el.attr('tabindex', 0)
            .attr('role', 'graphics-symbol')
            .attr('focusable', 'true');

        if (!el.attr('aria-label') && datum) {
            const label = datum.name || datum.topicName || datum.key || (datum.topic != null ? String(datum.topic) : '');

            if (label) {
                el.attr('aria-label', String(label));
            }
        }

        el.on('focus.britechart-a11y', function onFocus() {
            select(this).classed('bc-is-focused', true);
        });
        el.on('blur.britechart-a11y', function onBlur() {
            select(this).classed('bc-is-focused', false);
        });
    });
}

/**
 * Watch the chart container and redraw when its width changes.
 * @param {Function} chart Chart instance
 */
export function bindAutoResize(chart) {
    if (chart.__resizeObserver) {
        chart.__resizeObserver.disconnect();
        chart.__resizeObserver = null;
    }

    if (!chart.__autoResize || typeof ResizeObserver === 'undefined') {
        return;
    }

    const container = chart.__container;

    if (!container) {
        return;
    }

    const target = container.parentElement || container;
    let lastWidth = Math.round(target.getBoundingClientRect().width);

    chart.__resizeObserver = new ResizeObserver((entries) => {
        if (chart.__resizing) {
            return;
        }

        const width = Math.round(entries[0].contentRect.width);

        if (!width || Math.abs(width - lastWidth) < 2) {
            return;
        }

        if (typeof chart.width === 'function' && chart.width() === width) {
            lastWidth = width;

            return;
        }

        lastWidth = width;
        chart.__resizing = true;

        try {
            if (typeof chart.width === 'function') {
                chart.width(width);
            }

            if (chart.__selection) {
                chart(chart.__selection);
            }
        } finally {
            chart.__resizing = false;
        }
    });

    chart.__resizeObserver.observe(target);
}

/**
 * Record the rendered root and container. Called from buildSVG.
 * @param {Function} chart Chart instance
 * @param {object} svgSelection D3 selection for the chart root
 * @param {Element} container DOM node passed to the chart
 */
export function noteChartRender(chart, svgSelection, container) {
    chart.__svg = svgSelection;
    chart.__container = container;
    syncAccessibility(chart);

    if (chart.__autoResize) {
        bindAutoResize(chart);
    }
}

/**
 * Apply accessibility to marks after the chart has drawn them.
 * @param {Function} chart Chart instance
 */
export function finalizeChart(chart) {
    syncAccessibility(chart);
    applyKeyboardNavigation(chart);
}
