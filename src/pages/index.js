import withSplitting from '../withSplitting';

export const Start = withSplitting(() => import('./Start'));
export const About = withSplitting(() => import('./About'));
export const Experiment = withSplitting(() => import('./Experiment'));
export const LogIn = withSplitting(() => import('./LogIn'));
export const Finish = withSplitting(() => import('./Finish'));