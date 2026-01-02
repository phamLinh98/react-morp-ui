import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            exports: 'named',
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve({
            extensions: ['.js', '.jsx'],
        }),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-react'],
            extensions: ['.js', '.jsx'],
            exclude: 'node_modules/**',
        }),
    ],
};
