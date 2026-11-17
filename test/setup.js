const svgBox = {
    x: 0,
    y: 0,
    width: 100,
    height: 20,
    top: 0,
    right: 100,
    bottom: 20,
    left: 0,
};

const identityMatrix = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0,
};

globalThis.xdescribe = globalThis.xdescribe || ((name, fn) => describe.skip(name, fn));
globalThis.xit = globalThis.xit || ((name, fn) => it.skip(name, fn));

if (typeof HTMLCanvasElement !== 'undefined') {
    const originalGetContext = HTMLCanvasElement.prototype.getContext;

    HTMLCanvasElement.prototype.getContext = function(type) {
        const context = originalGetContext.call(this, type);

        if (context) {
            return context;
        }

        return {
            font: '12px Arial',
            measureText: () => ({ width: 40 }),
            fillRect() {},
            drawImage() {},
        };
    };
}

if (typeof SVGElement !== 'undefined') {
    SVGElement.prototype.getBBox = () => svgBox;
    SVGElement.prototype.getComputedTextLength = () => 40;
    SVGElement.prototype.getScreenCTM = () => ({
        ...identityMatrix,
        inverse: () => identityMatrix,
    });

    const graphics = window.SVGGraphicsElement || SVGElement;
    const transformDescriptor = Object.getOwnPropertyDescriptor(graphics.prototype, 'transform');

    if (transformDescriptor && transformDescriptor.get) {
        Object.defineProperty(graphics.prototype, 'transform', {
            configurable: true,
            get() {
                const value = transformDescriptor.get.call(this);

                if (value && value.baseVal && typeof value.baseVal.consolidate !== 'function') {
                    value.baseVal.consolidate = () => ({ matrix: identityMatrix });
                }

                return value;
            },
        });
    }
}

if (typeof SVGSVGElement !== 'undefined' && SVGSVGElement.prototype.createSVGPoint) {
    const originalCreateSVGPoint = SVGSVGElement.prototype.createSVGPoint;

    SVGSVGElement.prototype.createSVGPoint = function() {
        const point = originalCreateSVGPoint.call(this);

        if (point && typeof point.matrixTransform !== 'function') {
            point.matrixTransform = () => ({ x: 0, y: 0 });
        }

        return point;
    };
}
