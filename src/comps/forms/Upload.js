import React from 'react';

export default class Upload extends React.Component {
    componentDidMount() {
        // this.$upload = $(this.upload);
//  this.$progress = $(this.progress);

        var bar = this.progress;

        window.UIkit.upload(this.upload, {

            url: '',
            multiple: true,

            beforeSend: function () {
                console.log('beforeSend', arguments);
            },
            beforeAll: function () {
                console.log('beforeAll', arguments);
            },
            load: function () {
                console.log('load', arguments);
            },
            error: function () {
                console.log('error', arguments);
            },
            complete: function () {
                console.log('complete', arguments);
            },

            loadStart: function (e) {
                console.log('loadStart', arguments);

                bar.removeAttribute('hidden');
                bar.max = e.total;
                bar.value = e.loaded;
            },

            progress: function (e) {
                console.log('progress', arguments);

                bar.max = e.total;
                bar.value = e.loaded;
            },

            loadEnd: function (e) {
                console.log('loadEnd', arguments);

                bar.max = e.total;
                bar.value = e.loaded;
            },

            completeAll: function () {
                console.log('completeAll', arguments);

                setTimeout(function () {
                    bar.setAttribute('hidden', 'hidden');
                }, 1000);

                alert('Upload Completed');
            }

        });
    }

    componentWillUnmount() {

    }

    render() {

        //TODO: link to select some doesn't work, try jquery or something
        //TODO: initialize progress as it's not actually hidden
        return (

    <div>
                <div ref={el => this.upload = el} className="js-upload uk-placeholder uk-text-center">
                    <span data-uk-icon="icon: cloud-upload"></span>
                    <span className="uk-text-middle">Attach <strong>pictures</strong> by dropping them here or</span>
                    <div data-uk-form-custom>
                        <input type="file" data-multiple/>
                        <span className="uk-link">selecting some</span>
                    </div>
                </div>

                {/* <progress ref={el => this.progress = el} className="uk-progress" value="0" max="100" data-hidden></progress> */}
    </div>
        )
    }
}