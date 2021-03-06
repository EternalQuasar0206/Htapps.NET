function Set(args) {
    content = [];
    define = function() {
        Array.from(args).forEach(function(x) {
            if(!content.includes(x)) {
                content.push(x);
            }
        });
    }
    
    define();
    return {
        content: content,
        size: content.length,
        add: function(x) {
            if(!this.content.includes(x)) {
                this.size++;
                this.content.push(x);
            }
            else {
                return false;
            }
            return true;
        },
        clear: function() {
            this.size = 0;
            this.content = [];
        },
        remove: function(x) {
            var final = [];
            this.content.forEach(function(n) {
                if (n != x) {
                    final.push(n);
                }
                else {
                    this.size--;
                }
            });
            this.content = final;
        },
        forEach: function(callback) {
            return this.content.forEach(callback);
        },
        has: function(x) {
            return this.content.includes(x);
        }
    };
}