# Aplicación Frontend (React TypeScript + Tailwind)
Repositorio para prueba técnica de Afex frontend


## Pasos para iniciar
1. Instalar las dependencias:
```
npm i
```

2. Iniciar la aplicación:
```
npm run dev
```

La aplicación corre en [http://localhost:3000](http://localhost:3000).

Es posible cambiar la URL de la API en la aplicación desde el archivo ./src/config/api.config.ts.




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
