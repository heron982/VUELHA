const vuelha = new Vue({
    el: "#app",
    data: {
        button: [
            [[{ status: Boolean }], [{ status: Boolean }], [{ status: Boolean }]],
            [[{ status: Boolean }], [{ status: Boolean }], [{ status: Boolean }]],
            [[{ status: Boolean }], [{ status: Boolean }], [{ status: Boolean }]]
        ],
        turno: 1,
        jogadas: 0
    },
    methods: {
        clicked(index, id) {
            console.log(this.jogadas)
            this.button[index][id][0].status = this.turno == 1 ? true : false;
            if (this.turno == 2) {
                this.turno--;
            } else if (this.turno == 1) {
                this.turno++;
            }
            this.whoWin(function (winner) {
                setTimeout(() => {
                    let rodada = confirm(
                        `${winner == 0 ? "Ninguém" : winner == 1 ? "X" : "O"} venceu!!`
                    );
                    if (rodada == true) window.location.reload();
                }, 500);
            });
            this.jogadas++;
        },

        whoWin(callback) {
            if (
                (this.button[0][0][0].status == true &&
                    this.button[0][1][0].status == true &&
                    this.button[0][2][0].status == true) ||
                (this.button[1][0][0].status == true &&
                    this.button[1][1][0].status == true &&
                    this.button[1][2][0].status == true) ||
                (this.button[2][0][0].status == true &&
                    this.button[2][1][0].status == true &&
                    this.button[2][2][0].status == true) ||
                (this.button[0][0][0].status == true &&
                    this.button[1][0][0].status == true &&
                    this.button[2][0][0].status == true) ||
                (this.button[0][1][0].status == true &&
                    this.button[1][1][0].status == true &&
                    this.button[2][1][0].status == true) ||
                (this.button[0][0][0].status == true &&
                    this.button[1][1][0].status == true &&
                    this.button[2][2][0].status == true) ||
                (this.button[0][2][0].status == true &&
                    this.button[1][1][0].status == true &&
                    this.button[2][0][0].status == true)
            ) {
                callback(1);
            } else if (
                (this.button[0][0][0].status == false &&
                    this.button[0][1][0].status == false &&
                    this.button[0][2][0].status == false) ||
                (this.button[1][0][0].status == false &&
                    this.button[1][1][0].status == false &&
                    this.button[1][2][0].status == false) ||
                (this.button[2][0][0].status == false &&
                    this.button[2][1][0].status == false &&
                    this.button[2][2][0].status == false) ||
                (this.button[0][0][0].status == false &&
                    this.button[1][0][0].status == false &&
                    this.button[2][0][0].status == false) ||
                (this.button[0][1][0].status == false &&
                    this.button[1][1][0].status == false &&
                    this.button[2][1][0].status == false) ||
                (this.button[0][2][0].status == false &&
                    this.button[1][2][0].status == false &&
                    this.button[2][2][0].status == false) ||
                (this.button[0][0][0].status == false &&
                    this.button[1][1][0].status == false &&
                    this.button[2][2][0].status == false) ||
                (this.button[0][2][0].status == false &&
                    this.button[1][1][0].status == false &&
                    this.button[2][0][0].status == false)
            ) {
                callback(2);
            } else if (this.jogadas >= 8) {
                callback(0);
            }
        }
    },
    mounted() {
        //DEBUG matriz
        console.log(this.button);
    }
});
