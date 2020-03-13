import _React from 'react';

declare global {
    const React: typeof _React; // the React types _also_ exported by the React namespace, but export them again here just in case.
    const Route1: any;
    const Route2: any;
}