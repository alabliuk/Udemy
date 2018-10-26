class CalcController {

    constructor() {
        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcE1 = document.querySelector("#display");
        this._dateE1 = document.querySelector("#data");
        this._timeE1 = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {
        this.setDisplayDateTime();

        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);
    }

    addEventListenerAll(element, events, fn) {
        events.split(" ").forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }

    clearAll() {
        this._operation = [];
    }

    clearEntry() {
        this._operation.pop();
    }

    addOperation(value) {
        this._operation.push(value);
        console.log(this._operation);
    }

    setError() {
        this.displayCalc = "Error";
    }

    execBtn(value) {
        switch (value) {
            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                
                break;

            case 'subtracao':
               
                break;

            case 'divisao':
               
                break;

            case 'multiplicacao':
               
                break;

            case 'porcento':
               
                break;

            case 'igual':
                
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;
        }
    }

    initButtonsEvents() {
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, "click drag", e => {
                // *** btn.className.baseVal -> retorna o nome do botao em string
                let textBtn = btn.className.baseVal.replace('btn-', '');

                this.execBtn(textBtn);
            })

            // *** colocando o cursor de 'maozinha' quando o mouse fica sobre o botão
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            })
        });
    }

    setDisplayDateTime() {
        // Data por extenso
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime() {
        return this._timeE1.innerHTML;
    }

    set displayTime(value) {
        this._timeE1.innerHTML = value;
    }

    get displayDate() {
        return this._dateE1.innerHTML;
    }

    set displayDate(value) {
        this._dateE1.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcE1.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcE1 = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDate = value;
    }
}