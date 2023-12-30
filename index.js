class Tasks {

    #id;
    #name;
    #description;
    #dateOfCreation;
    #status;

    constructor(name, description, creationDate, isCompleted = false) {
        this.#id = 'id' + Math.random().toString(16).slice(2);
        this.#name = name;
        this.#description = description;
        this.#dateOfCreation = this.validateAndFormatDate(creationDate);
        this.#status = isCompleted;
    };

    validateAndFormatDate(dateString) {
        const dateRegex = /^(0[1-9]|[12][0-9]|3[01])[\/.](0[1-9]|1[0-2])[\/.](\d{4})\s(\d{2}:\d{2}:\d{2})$/;
        if (!dateRegex.test(dateString)) {
            throw new Error('Invalid date format. Please use dd.mm.yyyy HH:mm:ss or dd/mm/yyyy HH:mm:ss');
        };

        const [day, month, year, time] = dateString.split(/[\/.]/);
        return `${year}-${month}-${day} ${time}`;
    }

    toggleCompletionStatus() {
        this.#status = !this.#status;
    }

    get id() {
        return this.#id;
    };

    get name() {
        return this.#name;
    }

    get description() {
        return this.#description;
    }

    get dateOfCreation() {
        return this.#dateOfCreation;
    }

    get status() {
        return this.#status;
    }

};