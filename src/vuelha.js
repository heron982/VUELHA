const vuelha = new Vue({
    el: "#app",
    data: {
        button: [
            [
                [{ status: Boolean }], [{ status: Boolean }], [{ status: Boolean }]
            ],
            [
                [{ status: Boolean }], [{ status: Boolean }], [{ status: Boolean }]
            ],
            [
                [{ status: Boolean }], [{ status: Boolean }], [{ status: Boolean }]
            ]
        ],
        turno: 1
    },
    methods: {
        clicked(index, id) {
            console.log(this.turno)
            //DEBUG linhas e colunas da matriz
            // console.log(`Linha => ${index} Coluna => ${id}`)
            this.button[index][id][0].status = (this.turno == 1) ? true : false

            if (this.turno == 2) {
                this.turno--
            } else if (this.turno == 1) {
                this.turno++
            }

            this.whoWin(function (winner) {
                setTimeout(() => {
                    let rodada = confirm(`${winner == 1 ? 'X' : 'O'} venceu!!`)
                    if (rodada == true) window.location.reload()
                }, 500)
            })

            console.log(this.button)
        },

        whoWin(callback) {
            let winner = ''

            // Linha horizontal 1
            if (this.button[0][0][0].status == true
                && this.button[0][1][0].status == true
                && this.button[0][2][0].status == true) {

                winner = 1
                callback(winner)
            } else if (this.button[0][0][0].status == false
                && this.button[0][1][0].status == false
                && this.button[0][2][0].status == false) {

                winner = 2
                callback(winner)
            }

            // Linha horizontal 2
            if (this.button[1][0][0].status == true
                && this.button[1][1][0].status == true
                && this.button[1][2][0].status == true) {

                winner = 1
                callback(winner)
            } else if (this.button[1][0][0].status == false
                && this.button[1][1][0].status == false
                && this.button[1][2][0].status == false) {

                winner = 2
                callback(winner)
            }

            // Linha horizontal 3
            if (this.button[2][0][0].status == true
                && this.button[2][1][0].status == true
                && this.button[2][2][0].status == true) {

                winner = 1
                callback(winner)
            } else if (this.button[2][0][0].status == false
                && this.button[2][1][0].status == false
                && this.button[2][2][0].status == false) {

                winner = 2
                callback(winner)
            }

            // Linha vertical 1
            if (this.button[0][0][0].status == true
                && this.button[1][0][0].status == true
                && this.button[2][0][0].status == true) {

                winner = 1
                callback(winner)
            } else if (this.button[0][0][0].status == false
                && this.button[1][0][0].status == false
                && this.button[2][0][0].status == false) {

                winner = 2
                callback(winner)
            }

            // Linha vertical 2
            if (this.button[0][1][0].status == true
                && this.button[1][1][0].status == true
                && this.button[2][1][0].status == true) {

                winner = 1
                callback(winner)
            } else if (this.button[0][1][0].status == false
                && this.button[1][1][0].status == false
                && this.button[2][1][0].status == false) {

                winner = 2
                callback(winner)
            }

            //Linha vertical 3
            if (this.button[0][2][0].status == true
                && this.button[1][2][0].status == true
                && this.button[2][2][0].status == true) {

                winner = 1
                callback(winner)
            } else if (this.button[0][2][0].status == false
                && this.button[1][2][0].status == false
                && this.button[2][2][0].status == false) {

                winner = 2
                callback(winner)
            }

            //Linha diagonal 1
            if (this.button[0][0][0].status == true
                && this.button[1][1][0].status == true
                && this.button[2][2][0].status == true) {

                winner = 1
                callback(winner)
            } else if (this.button[0][0][0].status == false
                && this.button[1][1][0].status == false
                && this.button[2][2][0].status == false) {

                winner = 2
                callback(winner)
            }


            //Linha diagonal 2
            if (this.button[0][2][0].status == true
                && this.button[1][1][0].status == true
                && this.button[2][0][0].status == true) {

                winner = 1
                callback(winner)
            } else if (this.button[0][2][0].status == false
                && this.button[1][1][0].status == false
                && this.button[2][0][0].status == false) {

                winner = 2
                callback(winner)
            }

        }
    },
    mounted() {
        //DEBUG matriz
        console.log(this.button)
    }
})