//para importar las dependencias
import {src,dest, watch} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass);

export function Sass(done){
    src('src/scss/app.scss')
        .pipe(sass().on('error', sass.logError)) //Para los errores .pipe(sass().on('error', sass.logError))
        .pipe(dest('build/css'))
    done()
}

// para crear el watch

export function dev(){
    watch('src/scss/**/*.scss', Sass) //Aqui le digo que dentro de cualquier archivo creado me le agregue watch los que tengan la extencion .scss
}
