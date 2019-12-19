import moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

class Game {
    constructor(object) {
        this.id = object.guid;
        this.name = object.name;
        this.description = object.deck;
        this.releaseDate = moment(object.original_release_date, DATE_FORMAT);
        this.image = object.image.small_url;
        this.iconImage = object.image.icon_url;
    }
}

export default Game;