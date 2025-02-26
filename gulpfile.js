//para importar las dependencias
import {src,dest, watch, series} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass);

export function Sass(done){
    src('src/scss/app.scss', {sourcemaps: true})
        .pipe(sass().on('error', sass.logError)) //Para los errores .pipe(sass().on('error', sass.logError))
        .pipe(dest('build/css', {sourcemaps: true}))
    done();
}

export function js(done) {
    src('src/js/app.js')
    .pipe(dest('build/js'))

    done();
}

// para crear el watch

export function dev(){
    watch('src/scss/**/*.scss', Sass) //Aqui le digo que dentro de cualquier archivo creado me le agregue watch los que tengan la extencion .scss
    watch('src/js/**/*.js', js) //Aqui le digo que dentro de cualquier archivo creado me le agregue watch los que tengan la extencion .scss
}

export default series(Sass, js, dev)
