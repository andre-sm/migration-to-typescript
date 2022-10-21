import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '0d3c9dfaafa44beab2beef242a96a3b1',
        });
    }
}

export default AppLoader;
