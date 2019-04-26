const vuelha = new Vue({
    el: "#app",
    data: {
        //matriz 3x3
        button: [
            [
                [{ status: true }], [{ status: true }], [{ status: true }]
            ],
            [
                [{ status: true }], [{ status: true }], [{ status: true }]
            ],
            [
                [{ status: true }], [{ status: true }], [{ status: true }]
            ]
        ],
    },
    methods: {
        clicked(index, id) {
            //DEBUG linhas e colunas da matriz
            // console.log(`Linha => ${index} Coluna => ${id}`)
            this.button[index][id][0].status = !this.button[index][id][0].status
        }
    },
    mounted() {
        //DEBUG matriz
        console.log(this.button)
    }
})