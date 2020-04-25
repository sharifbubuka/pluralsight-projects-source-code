    var numberOfCopies = 0;
    console.log(numberOfCopies);

    function copyTemplate() {
        var template = document.querySelector('template');
        var clone = document.importNode(template.content, true);

        //replace placeholders
        clone.querySelector('.adjective').textContent = "awesome";
        clone.querySelector('.number-of-copies').textContent = ++numberOfCopies;


        document.body.append(clone);
    }