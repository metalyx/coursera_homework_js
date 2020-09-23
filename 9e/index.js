module.exports = {

    sub : [],
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (this.sub.indexOf(subscriber) == -1)
        {
            this.sub.push(subscriber);
        }

        var keys = Object.keys(subscriber);
        
        if (keys.indexOf(event) == -1)
        {
            subscriber[event] = [];
        }

        subscriber[event].push(handler);
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        var keys = Object.keys(subscriber);
        if (this.sub.indexOf(subscriber) != -1)
        {
            delete this.sub[this.sub.indexOf(subscriber)][event];  
        }
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        this.sub.map(function (subscriber){
            if (subscriber[event]){
                var handlers = subscriber[event];
                for (var i = 0; i < handlers.length; i++)
                {
                    handlers[i].apply(subscriber);
                }
            }
        });



        return this;

    }
};
