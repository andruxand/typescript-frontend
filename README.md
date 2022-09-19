# Aplicación Frontend AFEX
Repositorio para prueba técnica de Afex frontend


## Pasos para iniciar
1. Instalar las dependencias:
```
npm i
```

2. Copiar archivo /environments/.env.development a la raíz del proyecto y renombrarlo a .env
```
cp ./environments/.env.development .env
```

3. Iniciar la aplicación:
```
npm run dev
```

La aplicación corre en [http://localhost:3000](http://localhost:3000).




## Para desarrollo

Instalar los hooks de Husky para validar conventional commits, EsLint y Prettier:
```
npm run prepare
```



## Otros comando disponibles


### Generar archivos compilados
```
npm run build
```

Generará la carpeta build/ con los archivos compilados de la aplicación. La aplicación corre en [http://localhost:3001](http://localhost:3001).



### Generar Preview del contenido estático
```
npm run preview
```


### Correr tests
```
npm run test
```


### Correr tests con coverage
```
npm run coverage
```


### Verificar código con EsLint
```
npm run lint
```


### Correr Prettier
```
npm run prettier
```


### Eliminar carpeta build/
```
npm run clean
```