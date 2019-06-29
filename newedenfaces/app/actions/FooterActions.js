import alt from '../alt';//import an instance of alt, not the Alt module in the npm directories itself

class FooterActions {
    constructor() {
        this.generateActions(
            'getTopCharactersSuccess',
            'getTopCharactersFail'
        );
    }

    getTopCharacters() {
        $.ajax({ url: '/api/characters/top'})
            .done((data) => {
                this.actions.getTopCharactersSuccess(data)
            })
            .fail((jqXhr) => {
                this.actions.getTopCharactersFail(jqXhr)
            });
    }
}

export default alt.createActions(FooterActions);