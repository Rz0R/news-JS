npm i
npm i typescript 
npx tsc --init
npm i ts-loader
добавить в файл конфига extensions: ['.ts', '.js'], и в module rules добавить 
{
                test: /.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
где '../dist' убрать 2 точки
npm run build
npm start 