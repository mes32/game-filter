import moment from 'moment';

const DATE_OBJECT_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DATE_DISPLAY_FORMAT = 'MMMM Do, YYYY';

class Game {
    constructor(object) {
        this.id = object.guid;
        this.name = object.name;
        this.description = object.deck;
        this.url = object.site_detail_url;
        this.releaseDate = undefined;
        if (object.original_release_date) {
            this.releaseDate = moment(object.original_release_date, DATE_OBJECT_FORMAT);
        }
        this.image = object.image.small_url;
        this.iconImage = object.image.icon_url;
    }

    formatReleaseDate() {
        if (this.releaseDate) {
            return this.releaseDate.format(DATE_DISPLAY_FORMAT);
        }
        return '';
    }
}

export default Game;