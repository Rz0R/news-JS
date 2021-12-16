import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'eff1daf2be084b91ade7291fe0681eb0',
        });
    }
}

export default AppLoader;
