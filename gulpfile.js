//para importar las dependencias
import path from 'path'
import fs from 'fs'
import {src,dest, watch, series} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass);

import terser from 'gulp-terser';
import sharp from 'sharp';

export function Sass(done){
    src('src/scss/app.scss', {sourcemaps: true})
        .pipe(sass({
            style: 'compressed'
        }).on('error', sass.logError)) //Para los errores .pipe(sass().on('error', sass.logError))
        .pipe(dest('build/css', {sourcemaps: true}))
    done();
}

export async function crop(done) {
    const inputFolder = 'src/img/gallery/full'
    const outputFolder = 'src/img/gallery/thumb';
    const width = 250;
    const height = 180;
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder, { recursive: true })
    }
    const images = fs.readdirSync(inputFolder).filter(file => {
        return /\.(jpg)$/i.test(path.extname(file));
    });
    try {
        images.forEach(file => {
            const inputFile = path.join(inputFolder, file)
            const outputFile = path.join(outputFolder, file)
            sharp(inputFile) 
                .resize(width, height, {
                    position: 'centre'
                })
                .toFile(outputFile)
        });

        done()
    } catch (error) {
        console.log(error)
    }
}

export function js(done) {
    src('src/js/app.js')
    .pipe(terser())
    .pipe(dest('build/js'))

    done();
}

// para crear el watch

export function dev(){
    watch('src/scss/**/*.scss', Sass) //Aqui le digo que dentro de cualquier archivo creado me le agregue watch los que tengan la extencion .scss
    watch('src/js/**/*.js', js) //Aqui le digo que dentro de cualquier archivo creado me le agregue watch los que tengan la extencion .scss
}

export default series(crop,Sass, js, dev)
